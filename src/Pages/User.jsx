import React, { useState } from "react";
import { FaRegHeart, FaRegUser } from "react-icons/fa6";
import {
    FiAlertTriangle,
    FiDownload,
    FiLogIn,
    FiLogOut,
    FiTrash,
} from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { LuShoppingCart } from "react-icons/lu";
import { TbGraph } from "react-icons/tb";
import OrderForm from "../components/OrderForm";
import { CiImageOn } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import empty from "../assets/images/empty.png"
import Card from "../components/Card";
import {
    SignedIn,
    UserButton,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const User = ({ formData, handleInputChange, handleSubmit, errors, order }) => {
    const [user, setUser] = useState(0);
    const { carts, wishlist, totalPrice } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <div className="mt-[61px] mb-[230px] gap-[28px] grid grid-cols-1 lg:grid-cols-[1fr_3fr] ">
            <div>
                <div className="bg-[--bg] rounded-md  ">
                    <p className="pt-[17px] pb-[15px] font-bold text-[22px] pl-[18px] ">
                        My Account
                    </p>
                    <ul className="border-b pb-[10px] text-[--text] flex lg:flex-col overflow-scroll border-[--primary] ">
                        <li
                            onClick={() => setUser(0)}
                            className={`${
                                user == 0
                                    ? "bg-white text-[--primary] border-[--primary]"
                                    : "border-[--bg] "
                            } border-b-[5px] lg:border-b-[0px] lg:border-l-[5px] min-w-[180px] duration-300 hover:text-[--primary] cursor-pointer flex pl-[18px] py-[10px] gap-3 text-[18px] items-center `}
                        >
                            <FaRegUser /> <span>Account Details</span>{" "}
                        </li>
                        <li
                            onClick={() => setUser(1)}
                            className={`${
                                user == 1
                                    ? "bg-white text-[--primary] border-[--primary]"
                                    : "border-[--bg] "
                            } border-b-[5px] lg:border-b-[0px] lg:border-l-[5px] duration-300 hover:text-[--primary] cursor-pointer flex pl-[18px] py-[10px] gap-3 text-[18px] items-center `}
                        >
                            <GrLocation /> <span>Address</span>{" "}
                        </li>
                        <li
                            onClick={() => setUser(2)}
                            className={`${
                                user == 2
                                    ? "bg-white text-[--primary] border-[--primary]"
                                    : "border-[--bg] "
                            } border-b-[5px] lg:border-b-[0px] lg:border-l-[5px] duration-300 hover:text-[--primary] cursor-pointer flex pl-[18px] py-[10px] gap-3 text-[18px] items-center `}
                        >
                            <LuShoppingCart /> <span>Orders</span>{" "}
                        </li>
                        <li
                            onClick={() => setUser(3)}
                            className={`${
                                user == 3
                                    ? "bg-white text-[--primary] border-[--primary]"
                                    : "border-[--bg] "
                            } border-b-[5px] lg:border-b-[0px] lg:border-l-[5px] duration-300 hover:text-[--primary] cursor-pointer flex pl-[18px] py-[10px] gap-3 text-[18px] items-center `}
                        >
                            <FaRegHeart /> <span>Wishlist</span>{" "}
                        </li>
                        <li
                            onClick={() => setUser(4)}
                            className={`${
                                user == 4
                                    ? "bg-white text-[--primary] border-[--primary]"
                                    : "border-[--bg] "
                            } border-b-[5px] lg:border-b-[0px] lg:border-l-[5px] duration-300 hover:text-[--primary] cursor-pointer flex pl-[18px] py-[10px] gap-3 text-[18px] items-center `}
                        >
                            <TbGraph />
                            <span>Reports</span>{" "}
                        </li>
                        <li
                            onClick={() => setUser(5)}
                            className={`${
                                user == 5
                                    ? "bg-white text-[--primary] border-[--primary]"
                                    : "border-[--bg] "
                            } border-b-[5px] lg:border-b-[0px] lg:border-l-[5px] duration-300 hover:text-[--primary] cursor-pointer flex pl-[18px] py-[10px] gap-3 text-[18px] items-center `}
                        >
                            <FiDownload />
                            <span>Downloads</span>{" "}
                        </li>
                        <li
                            onClick={() => setUser(6)}
                            className={`${
                                user == 6
                                    ? "bg-white text-[--primary] border-[--primary]"
                                    : "border-[--bg] "
                            } border-b-[5px] lg:border-b-[0px] lg:border-l-[5px] duration-300 hover:text-[--primary] cursor-pointer flex pl-[18px] py-[10px] gap-3 text-[18px] items-center `}
                        >
                            <FiAlertTriangle />
                            <span>Support</span>{" "}
                        </li>
                    </ul>

                    <SignedIn>
                        <span
                            className={`flex gap-2 items-center cursor-pointer text-[--primary] font-bold pl-[22px] py-[21px] text-[18px] `}
                        >
                            <UserButton></UserButton>
                            <FiLogOut className="text-[25px] font-extrabold"></FiLogOut>{" "}
                            <span>Loguot</span>
                        </span>
                    </SignedIn>
                </div>
            </div>

            {user == 0 ? (
                <div>
                    <p className="text-[18px] font-medium mb-[20px] ">
                        Personal Information
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[28px] ">
                        <div className="flex flex-col ">
                            <label
                                htmlFor="firstname"
                                className="text-[18px] mb-[10px]"
                            >
                                First Name{" "}
                                <span className="text-red-700 font-bold text-xl">
                                    *
                                </span>
                            </label>
                            <input
                                type="text"
                                id="firstname"
                                value={formData.firstname}
                                onChange={handleInputChange}
                                className="border px-2 h-[40px] outline-[--primary]"
                            />
                            {errors.firstname && (
                                <p className="text-red-700">
                                    {errors.firstname}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label
                                htmlFor="lastname"
                                className="text-[18px] mb-[10px]"
                            >
                                Last Name{" "}
                                <span className="text-red-700 font-bold text-xl">
                                    *
                                </span>
                            </label>
                            <input
                                type="text"
                                id="lastname"
                                value={formData.lastname}
                                onChange={handleInputChange}
                                className="border px-2 h-10 outline-[--primary]"
                            />
                            {errors.lastname && (
                                <p className="text-red-700">
                                    {errors.lastname}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label
                                htmlFor="email"
                                className="text-[18px] mb-[10px]"
                            >
                                Email address{" "}
                                <span className="text-red-700 font-bold text-xl">
                                    *
                                </span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="border px-2 h-10 outline-[--primary]"
                            />
                            {errors.email && (
                                <p className="text-red-700">{errors.email}</p>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label
                                htmlFor="phone"
                                className="text-[18px] mb-[10px]"
                            >
                                Phone Number{" "}
                                <span className="text-red-700 font-bold text-xl">
                                    *
                                </span>
                            </label>
                            <div className="flex items-center gap-2">
                                <select
                                    className="border px-3 h-10 outline-[--primary]"
                                    id="phone"
                                >
                                    <option value="+966">+966</option>
                                    <option value="+998">+998</option>
                                    <option value="+900">+900</option>
                                </select>
                                <input
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="border outline-[--primary] h-full grow "
                                    type="number"
                                />
                            </div>
                            {errors.phone && (
                                <p className="text-red-700">{errors.phone}</p>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label
                                htmlFor="username"
                                className="text-[18px] mb-[10px]"
                            >
                                User Name
                                <span className="text-red-700 font-bold text-xl">
                                    *
                                </span>
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={formData.firstname}
                                onChange={handleInputChange}
                                className="border px-2 h-[40px] outline-[--primary]"
                            />
                            {errors.firstname && (
                                <p className="text-red-700">
                                    User name is required
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <span className="text-[18px] mb-[10px]">Photo</span>
                            <div className="flex gap-[23px] items-center">
                                <input
                                    type="file"
                                    id="file"
                                    value={""}
                                    onChange={handleInputChange}
                                    className=" hidden outline-[--primary]"
                                />
                                <label
                                    htmlFor="file"
                                    className=" border p-3 bg-[--bg] rounded-full  text-[--text] "
                                >
                                    <CiImageOn className="text-[32px] ">
                                        {" "}
                                    </CiImageOn>
                                </label>
                                <label
                                    htmlFor="file"
                                    className="text-[18px] px-[22px] py-3 rounded-md bg-[--primary] text-white "
                                >
                                    Change
                                </label>

                                <label
                                    htmlFor="file"
                                    className="text-[18px] hover:bg-[--bg-low] px-[22px] py-3 rounded-md  "
                                >
                                    Remove
                                </label>
                            </div>
                        </div>

                        <div>
                            <p className="text-[18px] font-medium my-[15px]">
                                Password change
                            </p>

                            <div className="flex flex-col mb-[30px] ">
                                <label
                                    htmlFor="firstname"
                                    className="text-[18px] mb-[10px]"
                                >
                                    Current password
                                </label>
                                <input
                                    type="text"
                                    id="firstname"
                                    value={""}
                                    onChange={handleInputChange}
                                    className="border px-2 h-[40px] outline-[--primary]"
                                />
                            </div>

                            <div className="flex flex-col mb-[30px] ">
                                <label
                                    htmlFor="firstname"
                                    className="text-[18px] mb-[10px]"
                                >
                                    New password
                                </label>
                                <input
                                    type="text"
                                    id="firstname"
                                    value={""}
                                    onChange={handleInputChange}
                                    className="border px-2 h-[40px] outline-[--primary]"
                                />
                            </div>

                            <div className="flex flex-col mb-[30px] ">
                                <label
                                    htmlFor="firstname"
                                    className="text-[18px] mb-[10px]"
                                >
                                    Confirm new password
                                </label>
                                <input
                                    type="text"
                                    id="firstname"
                                    value={""}
                                    onChange={handleInputChange}
                                    className="border px-2 h-[40px] outline-[--primary]"
                                />
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="text-white hover:opacity-70 text-[18px] mb-[64px] font-bold bg-[--primary] py-3 px-[22px] rounded-md "
                            >
                                {order ? "Change Saved" : "Save Change"}
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}

            {user == 1 ? (
                <div>
                    <OrderForm
                        formData={formData}
                        handleInputChange={handleInputChange}
                        handleSubmit={handleSubmit}
                        errors={errors}
                        info={
                            "The following addresses will be used on the checkout page by default."
                        }
                    />
                    <button
                        onClick={handleSubmit}
                        className="text-white hover:opacity-70 text-[18px] mb-[64px] font-bold bg-[--primary] py-3 px-[22px] rounded-md "
                    >
                        {order ? "Address Saved" : "Save Address"}
                    </button>
                    <div className="flex flex-col lg:flex-row gap-[30px] justify-between">
                        <div>
                            <p className="text-[18px] font-medium ">
                                Shipping Address
                            </p>
                            <p className="text-[--text] ">
                                You have not set up this type of address yet.
                            </p>
                        </div>
                        <div className="flex items-center gap-[63px] ">
                            <div className="flex items-center gap-2 ">
                                <input type="radio" id="ship-different" />
                                <label
                                    htmlFor="ship-different"
                                    className="text-[18px] font-medium"
                                >
                                    Ship to a different address?
                                </label>
                            </div>
                            <button className="text-[--primary] text-[18px] font-bold ">
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}

            {user == 2 ? (
                <div>
                    <p className="text-[11px] lg:text-[18px] px-[21px] lg:px-[41px] pb-[11px] grid grid-cols-[3fr_1fr_1fr] justify-between items-center border-b border-[--primary]">
                        <span>Products</span>
                        <span>Qty</span>
                        <span>Subtotal</span>
                    </p>
                    <div className="max-h-[300px] px-[21px] lg:px-[41px] overflow-scroll">
                        {carts.map((item) => {
                            const itemTotal = (
                                item.amount * item.price
                            ).toFixed(2);

                            return (
                                <div
                                    key={item.id}
                                    className="grid grid-cols-[3fr_1fr_1fr] justify-between items-center mt-[6px] lg:mt-[12px] bg-[--bg]"
                                >
                                    <div className="flex gap-2 lg:gap-4 items-center">
                                        <img
                                            src={item.image_url}
                                            alt=""
                                            className="lg:w-[80px] lg:h-[80px] w-[40px] h-[40px] "
                                        />
                                        <span>
                                            <span className="block text-[12px] lg:text-[18px] capitalize font-medium mb-[6px]">
                                                {item.common_name}
                                            </span>
                                            <span className="text-[#A5A5A5] text-[12px] ">
                                                SKU:{" "}
                                                <span className="text-[--text] text-[12px] ">
                                                    {item.id}
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    <p className="text-[12px] ">
                                        ( x {item.amount} )
                                    </p>
                                    <p className="text-[12px] lg:text-[18px] font-bold text-[--primary]">
                                        ${itemTotal}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : null}

            {user == 3 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full gap-[33px]">
                    {wishlist.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}{" "}
                </div>
            ) : null}

            {user == 4 ? (
                <div>
                    <p className="text-[18px] font-medium mb-[20px]">Reports</p>
                    <div className="grid gap-[28px]">
                        <div className="bg-[--bg] p-4 rounded-md">
                            <p className="text-[16px] font-medium">
                                Order Summary
                            </p>
                            <p className="text-[--text] mt-2">
                                Total Orders: {carts.length}
                            </p>
                            <p className="text-[--text]">
                                Total Spent: ${totalPrice}.00
                            </p>
                        </div>
                        <div className="bg-[--bg] p-4 rounded-md">
                            <p className="text-[16px] font-medium">
                                Wishlist Summary
                            </p>
                            <p className="text-[--text] mt-2">
                                Total Items: {wishlist.length}{" "}
                            </p>
                        </div>
                    </div>
                </div>
            ) : null}

            {user == 5 ? (
                carts.length > 0 ? (
                    <div>
                        <p className="text-[18px] font-medium mb-[20px]">
                            Downloads
                        </p>
                        <div className="grid gap-[28px]">
                            <div className="bg-[--bg] p-4 rounded-md">
                                <p className="text-[16px] font-medium">
                                    Invoice #12345
                                </p>
                                <button className="text-[--primary] mt-2">
                                    Download PDF
                                </button>
                            </div>
                            <div className="bg-[--bg] p-4 rounded-md">
                                <p className="text-[16px] font-medium">
                                    Ebook Title
                                </p>
                                <button className="text-[--primary] mt-2">
                                    Download EPUB
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                        <img
                            src={empty}
                            alt="No Downloads"
                            className="w-[150px] h-[150px] mb-[20px]"
                        />
                        <p className="text-[18px] font-medium mb-[10px]">
                            No Downloads Available
                        </p>
                        <p className="text-[16px] text-[--text-secondary]">
                            You haven't made any purchases yet. Browse our store
                            and make your first purchase to see your downloads
                            here.
                        </p>
                        <Link to={'/'} className="mt-[20px] bg-[--primary] text-white px-[20px] py-[10px] rounded-md">
                            Start Shopping
                        </Link>
                    </div>
                )
            ) : null}

            {user == 6 ? (
                <div>
                    <p className="text-[18px] font-medium mb-[20px]">Support</p>
                    <div className="grid gap-[28px]">
                        <div className="bg-[--bg] p-4 rounded-md">
                            <p className="text-[16px] font-medium">
                                Submit a Ticket
                            </p>
                            <form className="mt-4">
                                <div className="flex flex-col mb-[20px]">
                                    <label
                                        htmlFor="subject"
                                        className="text-[16px] mb-[10px]"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="border px-2 h-[40px] outline-[--primary]"
                                    />
                                </div>
                                <div className="flex flex-col mb-[20px]">
                                    <label
                                        htmlFor="message"
                                        className="text-[16px] mb-[10px]"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        className="border px-2 h-[100px] outline-[--primary]"
                                    />
                                </div>
                                <button className="text-white hover:opacity-70 text-[18px] font-bold bg-[--primary] py-3 px-[22px] rounded-md">
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div className="bg-[--bg] p-4 rounded-md">
                            <p className="text-[16px] font-medium">
                                Recent Tickets
                            </p>
                            <div className="mt-2">
                                <p className="text-[--text]">
                                    No recent tickets.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default User;
