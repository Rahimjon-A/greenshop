import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../data/data";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import {
    closeModal,
    handleActive,
    handleLiked,
    setCarts,
    setWishlist,
} from "../reducers/cart";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const { modal, items, wishlist, carts, warning } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [val, setVal] = useState("");
    const [search, setSearch] = useState(data);

    const searchBranch = () => {
        if (val.trim() === "") {
            setSearch(data);
        } else {
            const newList = data.filter((item) =>
                item.common_name
                    .toLowerCase()
                    .includes(val.trim().toLowerCase())
            );
            setSearch(newList);
        }
    };

    useEffect(() => {
        searchBranch();
    }, [val]);

    useEffect(() => {
        if (modal) {
            setShow(true);
        } else {
            setTimeout(() => setShow(false), 500);
        }
    }, [modal]);

    useEffect(() => {
        if (warning) {
            const timer = setTimeout(() => {
                dispatch(clearWarning());
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [warning, dispatch]);

    const handleLikeClick = (item) => {
        dispatch(setWishlist(item));
    };

    const handleCartClick = (item) => {
        dispatch(setCarts(item));
    };

    return (
        <div
            className={` ${
                modal ? "flex" : "hidden"
            } bg-[#000000b3] fixed z-50 top-0 left-0 w-full h-full duration-300 justify-center items-start`}
        >
            <div
                className={`bg-white ${
                    show ? "translate-y-0" : "translate-y-[-100vh] "
                } transition-all duration-500 z-50 w-full lg:w-[900px] mx-4 flex mt-[2%] rounded-md flex-col `}
            >
                <div className="flex  gap-3  border-b rounded-md overflow-hidden px-4 items-center  ">
                    <label htmlFor="search">
                        <FaSearch className="text-[--primary] text-[22px] "></FaSearch>{" "}
                    </label>
                    <input
                        className="grow text-[--text] py-3 outline-none text-[22px] "
                        id="search"
                        type="text"
                        value={val}
                        onChange={(e) => setVal(e.target.value)}
                        placeholder="Search for a plant ..."
                    />
                    <IoIosCloseCircleOutline
                        onClick={() => dispatch(closeModal())}
                        className="text-[--primary] text-[32px] cursor-pointer "
                    ></IoIosCloseCircleOutline>
                </div>

                <div className="max-h-[500px] h-full overflow-scroll px-4 py-4 bg-[--bg-low] ">
                    {search.map((item) => {
                        const isInCart = carts.some(
                            (cartItem) => cartItem.id === item.id
                        );
                        const isLiked = wishlist.some(
                            (cartItem) => cartItem.id === item.id
                        );

                        return (
                            <div key={item.id}>
                                <div className="flex pb-1 border-b items-center gap-3 mb-3">
                                    <img
                                        src={item.image_url}
                                        className="w-[100px] rounded-md h-[100px] "
                                        alt=""
                                    />

                                    <div className="grow">
                                        <p className="text-[--second] mb-1 text-[20px] font-semibold ">
                                            {item.common_name}{" "}
                                        </p>
                                        <p className="text-[--primary] mb-1 font-medium ">
                                            ${item.price}.00{" "}
                                        </p>
                                        <span
                                            onClick={() => {
                                                navigate(`/shop/${item.slug}`);
                                                dispatch(handleActive(1));
                                                dispatch(closeModal());
                                            }}
                                            className="text-[--text] cursor-pointer hover:text-[--primary] hover:underline duration-300 "
                                        >
                                            View more...
                                        </span>
                                    </div>

                                    <div className="flex gap-3">
                                        <p
                                            onClick={() =>
                                                handleCartClick(item)
                                            }
                                            className={`text-[32px] cursor-pointer ${
                                                isInCart
                                                    ? "bg-[--primary-low]"
                                                    : "bg-[--bg-cart]"
                                            } rounded-md p-1`}
                                        >
                                            <PiShoppingCartSimpleBold
                                                className={`${
                                                    isInCart
                                                        ? "text-[--primary]"
                                                        : "text-[--second]"
                                                } hover:text-[--primary] duration-300`}
                                            />
                                        </p>
                                        <p
                                            onClick={() =>
                                                handleLikeClick(item)
                                            }
                                            className={`text-[32px] cursor-pointer ${
                                                isLiked
                                                    ? "bg-[--primary-low]"
                                                    : "bg-[--bg-cart]"
                                            } rounded-md p-1`}
                                        >
                                            <FaRegHeart
                                                className={`${
                                                    isLiked
                                                        ? "text-[--primary]"
                                                        : "text-[--second]"
                                                } hover:text-[--primary] duration-300`}
                                            />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Search;
