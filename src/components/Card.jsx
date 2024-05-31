import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

const Card = ({ item }) => {
    return (
        <div className="group h-full  ">
            <div className=" relative group border-t-[5px] border-[#fff] group-hover:border-[--primary] duration-300 transition-all ">
                <img
                    src={item.image_url}
                    alt=""
                    className="h-[300px] w-full "
                />

                <div className=" translate-y-[50px] group-hover:translate-y-0 duration-300 transition-all flex gap-4 absolute z-10 bottom-1 left-[27%]  ">
                    <p className="text-[32px] cursor-pointer  bg-[#FBFBFB]  rounded-md p-1 " > <PiShoppingCartSimpleBold className={` text-[--second] hover:text-[--primary] duration-300 `}></PiShoppingCartSimpleBold> </p>
                    <p className="text-[32px] cursor-pointer  bg-[#FBFBFB]  rounded-md p-1 " > <IoSearch className={` text-[--second] hover:text-[--primary] duration-300 `}></IoSearch></p>
                    <p className="text-[32px] cursor-pointer  bg-[#FBFBFB]  rounded-md p-1 " ><FaRegHeart className={` text-[--second] hover:text-[--primary] duration-300 `}></FaRegHeart></p>
                </div>
                
            </div>
            <div className="pb-[60px] bg-white pt-[12px] relative z-30 ">
                <p className="text-[20px] text-[--second] mb-[6px] ">
                    {item.common_name}
                </p>
                <p className=" text-[--primary] font-bold text-[20px] ">
                    $ {item.price}
                </p>
            </div>
        </div>
    );
};

export default Card;
