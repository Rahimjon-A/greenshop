import Contact from "../components/Contact";
import ShopSlider from "../components/ShopSlider";
import { useDispatch } from "react-redux";
import { decrement, handleActive, handlePrice, handleRemove, increment } from "../reducers/cart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiTrash } from "react-icons/fi";
import { useEffect } from "react";

const Shopping = () => {
    const dispatch = useDispatch();
    const { carts, totalPrice } = useSelector((state) => state.cart);
    useEffect(()=>{
            dispatch(handlePrice())
    }, [carts] )
    return (
        <div className="min-h-[100vh] flex flex-col justify-between">
            <div className="mb-[43px] mt-[36px] tracking-widest">
                <Link
                    onClick={() => dispatch(handleActive(0))}
                    to="/"
                    className="font-semibold cursor-pointer pr-1"
                >
                    Home/
                </Link>

                <Link
                    to={"/shop"}
                    className="font-semibold cursor-pointer pr-1"
                >
                    Shop/
                </Link>
                <Link>Shopping Cart</Link>
            </div>

            <div className="grid grid-cols-[3fr_1fr] gap-[86px] mb-[87px] ">
                <div>
                    <div className="grid grid-cols-[2fr_1fr_1fr_1fr] border-b border-[--primary] pb-3 ">
                        <p className=" text-[--second] text-[18px] font-medium  ">
                            Products
                        </p>
                        <p className=" text-[--second] text-[18px] font-medium  ">
                            Price
                        </p>
                        <p className=" text-[--second] pl-[15px] text-[18px] font-medium  ">
                            Quantity
                        </p>
                        <p className=" text-[--second] text-[18px] font-medium  ">
                            Total
                        </p>
                    </div>

                    <div className="max-h-[500px] overflow-scroll ">
                        {carts.map((item) => {
                            const itemTotal = (
                                item.amount * item.price
                            ).toFixed(2);

                            return (
                                <div key={item.id} className="grid grid-cols-[2fr_1fr_1fr_1fr] mt-[12px] bg-[--bg] items-center ">
                                    <div className="flex gap-4 items-center">
                                        <img
                                            src={item.image_url}
                                            alt=""
                                            className="w-[80px] h-[80px] "
                                        />
                                        <span>
                                            <span className=" block text-[18px] capitalize font-medium mb-[6px] ">
                                                {item.common_name}
                                            </span>
                                            <span className=" text-[#A5A5A5] ">
                                                SKU:
                                                <span className=" text-[--text] ">
                                                    {item.id}
                                                    {item.id}
                                                </span>
                                            </span>
                                        </span>
                                    </div>

                                    <p className="text-[20px] text-[--text] font-medium ">
                                        ${item.price}.00
                                    </p>

                                    <div>
                                        <span className="flex gap-[14px] items-center">
                                            <span onClickCapture={()=> dispatch(decrement())}  onClick={()=> dispatch(decrement(item.id))} className="text-white cursor-pointer hover:opacity-70 bg-[--primary] px-[14px] text-[18px] py-[6px] rounded-full font-bold">
                                                -
                                            </span>
                                            <span className="text-[20px]">
                                                {item.amount}
                                            </span>
                                            <span onClick={()=> dispatch(increment(item.id))} className="text-white cursor-pointer hover:opacity-70 bg-[--primary] px-[13px] text-[18px] py-[6px] rounded-full font-bold">
                                                +
                                            </span>
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between pr-[26px] ">
                                        <p className=" text-[18px] font-bold text-[--primary] ">
                                            ${itemTotal}
                                        </p>
                                        <FiTrash
                                        onClick={()=> dispatch(handleRemove(item.id)) }
                                        className="text-[28px] text-[--text] cursor-pointer "></FiTrash>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div>
                    <p className=" border-b border-[--primary] pb-[11px] mb-[11px] font-bold text-[20px] text-[--second] ">
                        Cart Totals
                    </p>
                    <label
                        htmlFor="cupon"
                        className=" text-[--second] text-[18px] "
                    >
                        Coupon Apply
                    </label>

                    <div className="flex border mb-[30px] mt-2 border-[--primary]  pl-3  rounded-md overflow-hidden ">
                        <input
                            type="text"
                            className="py-[12px] text-[#ACACAC] outline-none text-[16px] bg-inherit grow"
                            placeholder="Enter coupon code here..."
                        />
                        <button className="text-white bg-[--primary] pr-[26px] font-bold pl-[35px] ">
                            Apply
                        </button>
                    </div>

                    <div className="flex flex-col gap-4 w-full mb-[50px] ">
                        <div className="flex justify-between w-full items-center">
                            <span className="text-[18px] text-[--second] ">
                                Subtotal
                            </span>
                            <span className="text-[--second] font-medium text-[20px] ">
                                ${totalPrice}.00
                            </span>
                        </div>
                        <div className="flex justify-between w-full items-center">
                            <span className="text-[18px] text-[--second] ">
                                Coupon Discount
                            </span>
                            <span className="text-[--second] font-medium text-[20px] ">
                                (-) 00.00
                            </span>
                        </div>
                        <div className="flex justify-between w-full items-center relative">
                            <span className="text-[18px] text-[--second] ">
                                Shiping
                            </span>
                            <span className="text-[--second] font-medium text-[20px] ">
                                $16.00
                            </span>
                            <span className=" absolute bottom-[-24px] right-0 text-[14px] text-[--primary] ">
                                View shipping charge
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-between mb-[30px] w-full items-center">
                        <span className="text-[20px] text-[--second] font-bold ">
                            Subtotal
                        </span>
                        <span className="text-[--primary] font-bold text-[22px]  ">
                            ${totalPrice}.00
                        </span>
                    </div>

                    <div className="flex flex-col gap-3">
                        <button className="text-white bg-[--primary] rounded-md py-3 hover:opacity-70 ">
                            Proceed To Checkout
                        </button>
                        <button className=" py-3 bg-inherit text-[--primary] rounded-md hover:bg-[--bg-low] duration-300 ">
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>

            <p className="text-[--primary] text-[20px] font-bold border-b border-[--primary] pb-[12px]">
                You may be interested in
            </p>
            <ShopSlider />
            <Contact />
        </div>
    );
};

export default Shopping;
