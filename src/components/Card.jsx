import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleActive, setCarts, setWishlist } from "../reducers/cart";

const Card = ({ item }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { items, wishlist, carts } = useSelector((state) => state.cart);

    const handleLikeClick = (e, item) => {
        e.stopPropagation();
        dispatch(setWishlist(item));
    };

    const handleCartClick = (e, item) => {
        e.stopPropagation();
        dispatch(setCarts(item));
    };

    const handleSearchClick = (e) => {
        e.stopPropagation();
    };

    
    const isInCart = carts.some((cartItem) => cartItem.id === item.id);
    const isLiked = wishlist.some((cartItem) => cartItem.id === item.id);

    return (
        <div
            onClick={() => {
                navigate(`/shop/${item.slug}`);
                dispatch(handleActive(1));
            }}
            className="group h-full"
        >
            <div className="relative group border-t-[5px] border-[#fff] group-hover:border-[--primary] duration-300 transition-all">
                <img src={item.image_url} alt="" className="sm:h-[300px] h-[300px] rounded-[20px] sm:rounded-none w-full" />

                <div className="translate-y-[50px] group-hover:translate-y-0 duration-300 transition-all flex gap-4 absolute z-10 bottom-1 left-1/2 transform -translate-x-1/2">
                    <p
                        onClick={(e) => handleCartClick(e, item)}
                        className={`text-[32px] cursor-pointer ${
                            isInCart ? "bg-[--primary-low]" : "bg-[--bg-cart]"
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
                        className="text-[32px] cursor-pointer bg-[--bg-cart] rounded-md p-1"
                        onClick={handleSearchClick}
                    >
                        <IoSearch className="text-[--second] hover:text-[--primary] duration-300" />
                    </p>

                    <p
                        onClick={(e) => handleLikeClick(e, item)}
                        className={`text-[32px] cursor-pointer ${
                            isLiked ? "bg-[--primary-low]" : "bg-[--bg-cart]"
                        } rounded-md p-1`}
                    >
                        <FaRegHeart
                            className={`${
                                isLiked ? "text-[--primary]" : "text-[--second]"
                            } hover:text-[--primary] duration-300`}
                        />
                    </p>
                </div>
                {item.discount ? (
                    <span className=" absolute top-2 left-0 bg-[--primary] text-white px-3 py-2  ">
                        13% OFF
                    </span>
                ) : null}
            </div>

            <div className="pb-[30px] bg-white pt-[12px] relative z-30">
                <p className="text-[20px] text-[--second] mb-[6px]">
                    {item.common_name}
                </p>
                <p className="text-[--primary] font-bold text-[20px]">
                    $ {item.price}.00
                </p>
            </div>
        </div>
    );
};

export default Card;
