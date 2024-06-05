import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../data/data";
import { FaSearch } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import ShopContent from "../ui/ShopContent";
import ShopSlider from "../components/ShopSlider";
import Contact from "../components/Contact";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ReactImageMagnify from "react-image-magnify";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
    decrement,
    handleActive,
    handleLiked,
    increment,
    setCarts,
} from "../reducers/cart";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

const Cart = () => {
    const { slug } = useParams();
    const [size, setSize] = useState(0);
    const shopping = data.find((item) => item.slug === slug);
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.cart);
    const [amount, setAmount] = useState(0);
    const isLiked = shopping
        ? items.find((i) => i.id === shopping.id)?.isLiked || false
        : false;

    return (
        <div className="min-h-[100vh] flex flex-col justify-between">
            <div className="mb-[43px] mt-[36px] tracking-widest">
                <Link
                    onClick={() => dispatch(handleActive(0))}
                    to="/"
                    className="font-semibold pr-1"
                >
                    Home/
                </Link>
                <Link>Shop</Link>
            </div>

            {shopping ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[53px] mb-[92px]">
                    <div className="flex gap-[46px]">
                        <div className="md:flex hidden flex-col gap-4">
                            <img
                                src={shopping.image_url}
                                className="rounded-md cursor-pointer w-[100px] h-[100px]"
                                alt="image"
                            />
                            <img
                                src={shopping.image_url}
                                className="rounded-md cursor-pointer w-[100px] h-[100px]"
                                alt="image"
                            />
                            <img
                                src={shopping.image_url}
                                className="rounded-md cursor-pointer w-[100px] h-[100px]"
                                alt="image"
                            />
                            <img
                                src={shopping.image_url}
                                className="rounded-md cursor-pointer w-[100px] h-[100px]"
                                alt="image"
                            />
                        </div>
                        <div className="relative cursor-pointer overflow-hidden">
                            <TransformWrapper
                                defaultScale={1}
                                defaultPositionX={100}
                                defaultPositionY={200}
                            >
                                <TransformComponent>
                                    <img
                                        src={shopping.image_url}
                                        className="rounded-md h-[444px] w-[444px]"
                                        alt="image"
                                    />
                                </TransformComponent>
                            </TransformWrapper>
                            <span className="p-3 rounded-full bg-[--bg-cart] cursor-pointer absolute top-5 right-5">
                                <FaSearch className="text-[--second] text-[28px] hover:text-[--primary] transition-all"></FaSearch>
                            </span>
                        </div>
                    </div>

                    <div>
                        <h1 className="capitalize text-[28px] font-bold text-[--second] mb-[21px]">
                            {shopping.common_name}
                        </h1>

                        <div className="flex justify-between items-center pb-3 border-b border-[--primary]">
                            <p className="text-[22px] font-bold text-[--primary]">
                                {shopping.price}.00
                            </p>
                            <span className="flex items-center gap-3">
                                <span className="flex">
                                    <IoIosStar className="text-yellow-500"></IoIosStar>
                                    <IoIosStar className="text-yellow-500"></IoIosStar>
                                    <IoIosStar className="text-yellow-500"></IoIosStar>
                                    <IoIosStar className="text-yellow-500"></IoIosStar>
                                    <IoIosStar className="text-slate-300"></IoIosStar>
                                </span>
                                <span>19 Customer Review</span>
                            </span>
                        </div>

                        <div className="mt-[15px]">
                            <p className="mb-[10px] text-[18px] font-medium text-[--second]">
                                Short Description:
                            </p>
                            <p className="text-[--text] mb-[24px] leading-[170%] tracking-widest">
                                {shopping.description}
                            </p>
                        </div>

                        <div className="mb-[23px] ">
                            <p className="mb-[10px] text-[18px] font-medium text-[--second] ">
                                Size:
                            </p>
                            <span className="flex items-center gap-[10px]  ">
                                <span
                                    onClick={() => setSize(1)}
                                    className={`  ${
                                        size == 1
                                            ? "border-[--primary] text-[--primary]"
                                            : null
                                    } border-[2px] rounded-full px-3 py-2 w-[38px] grid place-content-center cursor-pointer hover:border-[--primary] duration-300 hover:text-[--primary] h-[38px] text-center `}
                                >
                                    S
                                </span>
                                <span
                                    onClick={() => setSize(2)}
                                    className={` ${
                                        size == 2
                                            ? "border-[--primary] text-[--primary]"
                                            : null
                                    } border-[2px] rounded-full px-3 py-2 w-[38px] grid place-content-center cursor-pointer hover:border-[--primary] duration-300 hover:text-[--primary] h-[38px] text-center `}
                                >
                                    M
                                </span>
                                <span
                                    onClick={() => setSize(3)}
                                    className={` ${
                                        size == 3
                                            ? "border-[--primary] text-[--primary]"
                                            : null
                                    } border-[2px] rounded-full px-3 py-2 w-[38px] grid place-content-center cursor-pointer hover:border-[--primary] duration-300 hover:text-[--primary] h-[38px] text-center `}
                                >
                                    L
                                </span>
                                <span
                                    onClick={() => setSize(4)}
                                    className={` ${
                                        size == 4
                                            ? "border-[--primary] text-[--primary]"
                                            : null
                                    } border-[2px] rounded-full px-3 py-2 w-[38px] grid place-content-center cursor-pointer hover:border-[--primary] duration-300 hover:text-[--primary] h-[38px] text-center `}
                                >
                                    XL
                                </span>
                            </span>
                        </div>

                        <div className="flex items-center mb-[23px] gap-[23px]">
                            <span className="flex gap-[23px] items-center">
                                <span
                                    onClick={() => {
                                        dispatch(decrement(shopping.id));
                                        setAmount(
                                            amount > 1 ? amount - 1 : amount
                                        );
                                    }}
                                    className="text-white cursor-pointer hover:opacity-70 bg-[--primary] px-[15px] text-[20px] py-[7px] rounded-full font-bold"
                                >
                                    -
                                </span>
                                <span className="text-[20px]"> {amount} </span>
                                <span
                                    onClick={() => {
                                        dispatch(increment(shopping.id));
                                        dispatch(setCarts(shopping));
                                        setAmount((prev) => prev + 1);
                                    }}
                                    className="text-white cursor-pointer hover:opacity-70 bg-[--primary] px-[15px] text-[20px] py-[7px] rounded-full font-bold"
                                >
                                    +
                                </span>
                            </span>

                            <span className="text-[18px] break-keep font-bold border rounded-md w-[150px] text-center py-[7px] text-white bg-[--primary] cursor-pointer hover:opacity-70">
                                <Link to={"/shop/cart"}>BUY NOW</Link>
                            </span>
                            <span
                                onClick={() => dispatch(setCarts(shopping))}
                                className="text-[18px] hidden lg:block font-bold border rounded-md w-[150px] text-center py-[7px] text-[--primary] border-[--primary] cursor-pointer hover:opacity-70"
                            >
                                ADD TO CART
                            </span>
                            <span
                                onClick={() => dispatch(setCarts(shopping))}
                                className="text-[24px] lg:hidden font-bold border rounded-md w-[150px] flex justify-center py-[7px] text-[--primary] border-[--primary] cursor-pointer hover:opacity-70"
                            >
                                <PiShoppingCartSimpleFill />
                            </span>
                            <span
                                onClick={() =>
                                    dispatch(handleLiked(shopping.id))
                                }
                                className={`font-bold border ${
                                    isLiked
                                        ? " bg-[--primary] text-white "
                                        : "text-[--primary] bg-white "
                                } rounded-md text-center px-[7px] py-[7px]  border-[--primary] cursor-pointer hover:opacity-70`}
                            >
                                <CiHeart className="text-[26px]"></CiHeart>
                            </span>
                        </div>

                        <span className="flex flex-col mb-[18px] gap-[8px]">
                            <span className="text-[#ACACAC]">
                                SKU:{" "}
                                <span className="text-[--text]">
                                    {shopping.id}
                                </span>
                            </span>
                            <span className="text-[#ACACAC]">
                                Categories:{" "}
                                <span className="text-[--text]">
                                    {shopping.family}
                                </span>
                            </span>
                            <span className="text-[#ACACAC]">
                                TAGS:{" "}
                                <span className="text-[--text]">
                                    {shopping.scientific_name}
                                </span>
                            </span>
                        </span>

                        <div className="flex gap-4 items-center">
                            <p className="text-[18px] font-medium text-[--second]">
                                Share:
                            </p>
                            <FaInstagram className="text-[--second] text-[24px] hover:text-[--primary] hover:scale-110 cursor-pointer " />
                            <FaFacebookF className="text-[--second] text-[24px] hover:text-[--primary] hover:scale-110 cursor-pointer " />
                            <FaTwitter className="text-[--second] text-[24px] hover:text-[--primary] hover:scale-110 cursor-pointer " />
                            <FaLinkedinIn className="text-[--second] text-[24px] hover:text-[--primary] hover:scale-110 cursor-pointer " />
                            <FaYoutube className="text-[--second] text-[24px] hover:text-[--primary] hover:scale-110 cursor-pointer " />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="min-h-[50vh] flex flex-col justify-center items-center text-center">
                    <h2 className="text-[28px] font-bold text-[--primary] mb-[21px]">
                        No Item Selected
                    </h2>
                    <p className="text-[--text] mb-[24px] leading-[170%] tracking-widest">
                        Please select an item from the shop to view details.
                    </p>
                    <Link
                        onClick={() => dispatch(handleActive(0))}
                        to="/"
                        className="text-[18px] font-bold border rounded-md w-[150px] text-center py-[7px] text-white bg-[--primary] cursor-pointer hover:opacity-70"
                    >
                        Go to Shop
                    </Link>
                </div>
            )}

            {shopping ? <ShopContent /> : null}

            <div>
                <p className="text-[--primary] text-[20px] font-bold border-b border-[--primary] pb-[12px]">
                    Related Products
                </p>
                <ShopSlider />
            </div>
            <Contact />
        </div>
    );
};

export default Cart;

{
    /* <TransformWrapper
defaultScale={1}
defaultPositionX={100}
defaultPositionY={200}
>
<TransformComponent>
    <img
        src={shopping.image_url}
        className="rounded-md h-[444px] w-[444px]"
        alt="image"
    />
</TransformComponent>
</TransformWrapper> */
}
