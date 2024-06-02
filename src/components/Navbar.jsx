import { IoSearch } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleActive, openModal } from "../reducers/cart";

const Navbar = () => {
  const dispatch = useDispatch()
  const { active, carts } = useSelector(state => state.cart)

    return (
        <div className=" container px-4 border-b  mx-auto flex justify-between">
           <Link to={"/"} onClick={()=> dispatch(handleActive(0))} className="flex items-center" >  <img src={Logo} alt="Logo" /> </Link>
            <ul className="flex pt-[26px] gap-[50px] h-[76px]">

                <li onClick={()=> dispatch(handleActive(0))} className={`${ active==0 ? "font-bold border-b-[3px]  pb-[17px] border-[--primary] duration-300 transition-all" : null }`} >
                    <Link to={"/"} className={` text-[20px]`} >Home</Link>
                </li>
                <li onClick={()=> dispatch(handleActive(1))} className={`${ active==1 ? "font-bold border-b-[3px]  pb-[17px] border-[--primary] duration-300 transition-all" : null }`} >
                    <Link to={"/shop"} className={` text-[20px]`} >Shop</Link>
                </li>
                <li onClick={()=> dispatch(handleActive(2))} className={`${ active==2 ? "font-bold border-b-[3px]  pb-[17px] border-[--primary] duration-300 transition-all" : null }`} >
                    <Link to={"/plant-care"} className={` text-[20px]`} >Plant Care</Link>
                </li>
                <li onClick={()=> dispatch(handleActive(3))} className={`${ active==3 ? "font-bold border-b-[3px]  pb-[17px] border-[--primary] duration-300 transition-all" : null }`} >
                    <Link to={"/blogs"} className={` text-[20px]`} >Blogs</Link>
                </li>
            </ul>

            <div className="flex gap-[32px] items-center" >
                <span onClick={()=> dispatch(openModal())} >
                    <IoSearch className="text-[28px] cursor-pointer hover:text-[--primary] transition-all " ></IoSearch>
                </span>

                <span className=" relative" >
                    <Link onClick={()=> dispatch(handleActive(1))} to={"/shop/cart"} >
                      <PiShoppingCartSimpleBold className="text-[28px] cursor-pointer hover:text-[--primary] transition-all " ></PiShoppingCartSimpleBold>
                    </Link>
                    <span className="bg-[--primary] absolute top-[-8px] right-[-10px] text-white w-5 h-5 text-[12px] grid place-content-center rounded-full " > { carts.length } </span>
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
