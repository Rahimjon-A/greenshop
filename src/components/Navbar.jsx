import { IoSearch } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(0);

    return (
        <div className=" container border-b  mx-auto flex justify-between">
            <img src={Logo} alt="Logo" />
            <ul className="flex pt-[26px] gap-[50px] h-[76px]">

                <li onClick={()=> setActive(0)} className={`${ active==0 ? "font-bold border-b-[3px]  pb-[17px] border-[--primary] duration-300 transition-all" : null }`} >
                    <Link to={"/"} className={` text-[20px]`} >Home</Link>
                </li>
                <li onClick={()=> setActive(1)} className={`${ active==1 ? "font-bold border-b-[3px]  pb-[17px] border-[--primary] duration-300 transition-all" : null }`} >
                    <Link to={"/shop"} className={` text-[20px]`} >Shop</Link>
                </li>
                <li onClick={()=> setActive(2)} className={`${ active==2 ? "font-bold border-b-[3px]  pb-[17px] border-[--primary] duration-300 transition-all" : null }`} >
                    <Link to={"/plant-care"} className={` text-[20px]`} >Plant Care</Link>
                </li>
                <li onClick={()=> setActive(3)} className={`${ active==3 ? "font-bold border-b-[3px]  pb-[17px] border-[--primary] duration-300 transition-all" : null }`} >
                    <Link to={"/blogs"} className={` text-[20px]`} >Blogs</Link>
                </li>
            </ul>

            <div className="flex gap-[32px] items-center" >
                <span>
                    <IoSearch className="text-[24px] cursor-pointer hover:text-[--primary] transition-all " ></IoSearch>
                </span>
                <span>
                    <PiShoppingCartSimpleBold className="text-[24px] cursor-pointer hover:text-[--primary] transition-all " ></PiShoppingCartSimpleBold>
                </span>
                <span className={` hover:opacity-70 transition-all cursor-pointer rounded-md flex items-center bg-[--primary] py-2 px-4 text-white `} >
                    <FiLogOut />
                    <span className="text-[16px] font-medium " >Login</span>
                </span>
            </div>
        </div>
    );
};

export default Navbar;
