import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import { useDispatch, useSelector } from "react-redux";
import thank from "../assets/images/thank-you.svg";
import payment from "../assets/images/pay.svg";
import { useEffect, useState } from "react";
import moment from "moment/moment";
import OrderForm from "../components/OrderForm";
import { handleActive, handleReset } from "../reducers/cart";

const Checkout = ({
    formData,
    order,
    setOrder,
    handleInputChange,
    handleSubmit,
    errors,
}) => {
    const { totalPrice, carts } = useSelector((state) => state.cart);
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (order) {
            setModal(true);
        } else {
            setTimeout(() => setModal(false), 500);
        }
    }, [order]);

    // vadidation

    return (
        <>
            <div className="min-h-[100vh] flex flex-col justify-between">
                <div className="mb-[43px] mt-[36px] tracking-widest">
                    <Link
                        onClick={() => dispatch(handleActive(0))}
                        to="/"
                        className="font-semibold cursor-pointer pr-1"
                    >
                        Home/
                    </Link>
                    <Link to={"/shop/cart"} className="cursor-pointer pr-1">
                        Shop/
                    </Link>
                    <Link>Shopping Checkout</Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-[30px] lg:gap-[76px] mb-[60px] lg:mb-[210px]">
                    <div>
                        <OrderForm
                            formData={formData}
                            handleInputChange={handleInputChange}
                            errors={errors}
                        />
                        <div className="flex flex-col mb-[30px]">
                            <div className="flex items-center gap-2 mb-[54px]">
                                <input type="radio" id="ship-different" />
                                <label
                                    htmlFor="ship-different"
                                    className="text-[18px] font-medium"
                                >
                                    Ship to a different address?
                                </label>
                            </div>

                            <div className="flex flex-col">
                                <label
                                    htmlFor="order-notes"
                                    className="text-[18px] mb-[15px]"
                                >
                                    Order notes (optional)
                                </label>
                                <textarea
                                    id="order-notes"
                                    className="resize-none max-w-[350px] w-full h-[152px] p-2 border outline-none"
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    <div className=" min-w-[428px] pr-3 ">
                        <p className="mb-[21px] font-bold text-[22px] text-[--second]">
                            Your Order
                        </p>
                        <p className="text-[20px] pb-[11px] flex justify-between items-center border-b border-[--primary]">
                            <span>Products</span>
                            <span>Subtotal</span>
                        </p>

                        <div className="max-h-[500px] overflow-scroll">
                            {carts.map((item) => {
                                const itemTotal = (
                                    item.amount * item.price
                                ).toFixed(2);

                                return (
                                    <div
                                        key={item.id}
                                        className="flex justify-between items-center mt-[12px] bg-[--bg]"
                                    >
                                        <div className="flex gap-4 items-center">
                                            <img
                                                src={item.image_url}
                                                alt=""
                                                className="w-[80px] h-[80px]"
                                            />
                                            <span>
                                                <span className="block text-[18px] capitalize font-medium mb-[6px]">
                                                    {item.common_name}
                                                </span>
                                                <span className="text-[#A5A5A5]">
                                                    SKU:{" "}
                                                    <span className="text-[--text]">
                                                        {item.id}
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                        <p>( x {item.amount} )</p>
                                        <p className="text-[18px] font-bold text-[--primary]">
                                            ${itemTotal}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        <p className="text-[16px] text-end mb-[19px]">
                            Have a coupon code?{" "}
                            <span className="text-[--primary]">
                                <Link to="/shop/cart">Click here</Link>
                            </span>
                        </p>

                        <div className="flex pl-[84px] flex-col gap-4 w-full mb-[50px]">
                            <div className="flex justify-between w-full items-center">
                                <span className="text-[18px] text-[--second]">
                                    Subtotal
                                </span>
                                <span className="text-[--second] font-medium text-[20px]">
                                    ${totalPrice}.00
                                </span>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <span className="text-[18px] text-[--second]">
                                    Coupon Discount
                                </span>
                                <span className="text-[--second] font-medium text-[20px]">
                                    (-) 00.00
                                </span>
                            </div>
                            <div className="flex justify-between w-full items-center relative">
                                <span className="text-[18px] text-[--second]">
                                    Shipping
                                </span>
                                <span className="text-[--second] font-medium text-[20px]">
                                    {totalPrice ? "$16.00" : "$0.00"}
                                </span>
                                <span className="absolute bottom-[-24px] right-0 text-[14px] text-[--primary]">
                                    View shipping charge
                                </span>
                            </div>
                        </div>

                        <div className="flex pl-[84px] justify-between mb-[30px] w-full items-center">
                            <span className="text-[20px] text-[--second] font-bold">
                                Total
                            </span>
                            <span className="text-[--primary] font-bold text-[22px]">
                                ${totalPrice ? totalPrice + 16 : totalPrice}.00
                            </span>
                        </div>

                        <div className="pl-[84px] mb-[50px]">
                            <p className="mb-[21px] font-bold text-[22px] text-[--second]">
                                Payment Method
                            </p>
                            <div className="border rounded-md mb-4 px-3 py-2 flex gap-[10px] items-center">
                                <input
                                    type="radio"
                                    id="card"
                                    name="payment"
                                    value="card"
                                    className=""
                                    defaultChecked
                                />
                                <label htmlFor="card">
                                    <img
                                        src={payment}
                                        alt=""
                                        className="w-[224px] h-[26px]"
                                    />
                                </label>
                            </div>
                            <div className="border rounded-md mb-4 px-3 py-2 flex gap-[10px] items-center">
                                <input
                                    type="radio"
                                    id="bank"
                                    name="payment"
                                    value="bank"
                                    className=""
                                />
                                <label htmlFor="bank">
                                    Direct bank transfer
                                </label>
                            </div>
                            <div className="border rounded-md px-3 py-2 flex gap-[10px] items-center">
                                <input
                                    type="radio"
                                    id="cash"
                                    name="payment"
                                    value="cash"
                                    className=""
                                />
                                <label htmlFor="cash">Cash on delivery</label>
                            </div>
                        </div>

                        <div
                            onClick={handleSubmit}
                            className="flex pl-[84px] flex-col gap-3"
                        >
                            <button className="text-white bg-[--primary] rounded-md py-3 hover:opacity-70">
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>

                <Contact />
            </div>

            <div
                className={`${
                    order ? "flex" : "hidden"
                } bg-[#000000b3] fixed z-40 top-0 left-0 w-full h-full duration-300 justify-center items-center`}
            >
                <div
                    className={`bg-white ${
                        modal ? "translate-y-0" : "translate-y-[100vh]"
                    } transition-all mx-[30px] duration-500 max-w-[678px] border-b-[8px] border-[--primary] overflow-hidden content flex rounded-md flex-col`}
                >
                    <div className="flex flex-col items-center border-b-[3px] bg-[#f4faf5] pt-[15px] lg:pt-[30px] relative">
                        <img
                            src={thank}
                            className=" w-[40px] lg:w-[80px] mb-2 lg:mb-4 h-[40px] lg:h-[80px]"
                        />
                        <p className="text-14px lg:text-[20px] tracking-widest mb-[8px] lg:mb-[15px] text-[--text] ">
                            Your order has been received
                        </p>
                        <span
                            onClick={() => {
                                setOrder(false);
                                dispatch(handleReset());
                                dispatch(handleActive(0));
                            }}
                            className="text-[25px] lg:text-[45px] top-[17px] text-[--primary] rotate-45 font-light right-[17px] absolute cursor-pointer"
                        >
                            <Link to={'/'}> +</Link>
                        </span>
                    </div>

                    <div className="flex border-b-[3px] py-8 justify-between lg:py-[15px] mb-[10px] lg:mb-[18px] px-[20px] lg:px-[41px] ">
                        <div className="text-[--text] border-r-[2px] pr-[11px] lg:pr-[22px] ">
                            <p className="text-[12px] lg:text-[20px] font-light">
                                Order Number
                            </p>
                            <p className="text-[12px] lg:text-[20px] font-bold ">
                                19586687
                            </p>
                        </div>
                        <div className="text-[--text] border-r-[2px] px-[11px] lg:px-[22px] ">
                            <p className="text-[12px] lg:text-[20px] font-light">
                                Date
                            </p>
                            <p className="text-[12px] lg:text-[20px] font-bold ">
                                {moment().format("ll")}{" "}
                            </p>
                        </div>
                        <div className="text-[--text] border-r-[2px] px-[11px] lg:px-[22px] ">
                            <p className="text-[12px] lg:text-[20px] font-light">
                                Total
                            </p>
                            <p className="text-[12px] lg:text-[20px] font-bold ">
                                ${totalPrice + 16}.00
                            </p>
                        </div>
                        <div className="text-[--text]  lg:pl-[22px] ">
                            <p className="text-[12px] lg:text-[20px] font-light">
                                Payment Method
                            </p>
                            <p className="text-[12px] lg:text-[20px] font-bold ">
                                Cash on delivery
                            </p>
                        </div>
                    </div>

                    <p className="mb-[12px] px-[21px] lg:px-[41px] font-bold text-[12px] lg:text-[20px] text-[--second]">
                        Your Order
                    </p>
                    <p className="text-[11px] lg:text-[18px] px-[21px] lg:px-[41px] pb-[11px] grid grid-cols-[3fr_1fr_1fr] justify-between items-center border-b border-[--primary]">
                        <span>Products</span>
                        <span>Qty</span>
                        <span className="text-end ">Subtotal</span>
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
                                    <p className="text-[12px] text-end lg:text-[18px] font-bold text-[--primary]">
                                        ${itemTotal}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex mb-[13px] lg:mb-[25px] pr-[21px] lg:pr-[41px] pl-[80px] lg:pl-[160px] justify-between">
                        <p className="text-[--text] text-[12px] lg:text-[20px] ">
                            Shipping
                        </p>
                        <p className="text-[12px]  lg:text-[20px] font-bold ">
                            {totalPrice ? "$16.00" : "$0.00"}{" "}
                        </p>
                    </div>

                    <div className="flex mb-[13px] lg:mb-[25px] border-b pb-2 pr-[21px] lg:pr-[41px] pl-[80px] lg:pl-[160px] justify-between">
                        <p className="text-[12px] lg:text-[20px] font-bold ">
                            Total{" "}
                        </p>
                        <p className="text-[12px] lg:text-[20px] font-bold text-[--primary] ">
                            ${totalPrice + 16}.00{" "}
                        </p>
                    </div>

                    <p className="text-[--text] text-[12px] text-center px-[21px] lg:px-[41px] tracking-wider mb-[12px] lg:mb-[20px] leading-[150%] ">
                        Your order is currently being processed. You will
                        receive an order confirmation email shortly with the
                        expected delivery date for your items.
                    </p>
                    <button className="text-white px-[11px] text-[12px] lg:text-[18px] lg:px-[18px]  mx-auto bg-[--primary] font-bold mb-[16px] lg:mb-[28px] rounded-md py-[6px] lg:py-3 hover:opacity-70">
                        Track your order
                    </button>
                </div>
            </div>
        </>
    );
};

export default Checkout;
