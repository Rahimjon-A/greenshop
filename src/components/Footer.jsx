import visa from "../assets/images/pay.svg";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-[--bg] pt-[33px] pl-[23px] pb-[30px] border-b-[2px] ">
                <div>
                    <p className="text-[20px] font-bold mb-[20px] ">
                        My Account
                    </p>
                    <ul>
                        <li className=" cursor-pointer hover:text-[--primary] font-light text-[18px] mb-3 ">
                            My Account
                        </li>
                        <li className=" cursor-pointer hover:text-[--primary] font-light text-[18px] mb-3 ">
                            Our stores
                        </li>
                        <li className=" cursor-pointer hover:text-[--primary] font-light text-[18px] mb-3 ">
                            Contact us
                        </li>
                        <li className=" cursor-pointer hover:text-[--primary] font-light text-[18px]">
                            Career Specials
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="text-[20px] font-bold mb-[20px] ">
                        Help & Guide
                    </p>
                    <ul>
                        <li className="font-light text-[18px] mb-3 cursor-pointer duration-300 hover:text-[--primary] ">
                            Help Center
                        </li>
                        <li className="font-light text-[18px] mb-3 cursor-pointer duration-300 hover:text-[--primary] ">
                            How to Buy
                        </li>
                        <li className="font-light text-[18px] mb-3 cursor-pointer duration-300 hover:text-[--primary] ">
                            Shipping & Delivery
                        </li>
                        <li className="font-light text-[18px] mb-3 cursor-pointer duration-300 hover:text-[--primary] ">
                            Product Policy
                        </li>
                        <li className="font-light text-[18px] mb-3 cursor-pointer duration-300 hover:text-[--primary] ">
                            How to Return
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="text-[20px] font-bold mb-[20px] ">
                        Categories
                    </p>
                    <ul>
                        <li className="font-light text-[18px] mb-3 cursor-pointer duration-300 hover:text-[--primary] ">
                            House Plants
                        </li>
                        <li className="font-light text-[18px] mb-3 cursor-pointer duration-300 hover:text-[--primary] ">
                            Potter Plants
                        </li>
                        <li className="font-light text-[18px] mb-3 cursor-pointer duration-300 hover:text-[--primary] ">
                            Seeds
                        </li>
                        <li className="font-light text-[18px] mb-3 cursor-pointer duration-300 hover:text-[--primary] ">
                            Small Plants
                        </li>
                        <li className="font-light text-[18px] mb-3 cursor-pointer duration-300 hover:text-[--primary] ">
                            Accessories
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="text-[20px] font-bold mb-[20px] ">
                        Social Media
                    </p>
                    <span className="flex gap-[10px]  mb-[33px] ">
                        <span className="border rounded-md cursor-pointer hover:text-[--second] hover:border-[--second] duration-300 border-[--primary] text-[--primary] p-3 ">
                           <a href="https://www.instagram.com/rahimjonabduraximov/"> <FaInstagram></FaInstagram></a>
                        </span>
                        <span className="border rounded-md cursor-pointer hover:text-[--second] hover:border-[--second] duration-300 border-[--primary] text-[--primary] p-3 ">
                            <FaFacebookF></FaFacebookF>
                        </span>
                        <span className="border rounded-md cursor-pointer hover:text-[--second] hover:border-[--second] duration-300 border-[--primary] text-[--primary] p-3 ">
                            <a href="https://t.me/rahimjonabduraximov"><FaTwitter></FaTwitter></a>
                        </span>
                        <span className="border rounded-md cursor-pointer hover:text-[--second] hover:border-[--second] duration-300 border-[--primary] text-[--primary] p-3 ">
                           <a href="https://www.linkedin.com/in/rakhimjon-abdurakhimov-5ba2b7231/"> <FaLinkedinIn></FaLinkedinIn></a>
                        </span>
                        <span className="border rounded-md cursor-pointer hover:text-[--second] hover:border-[--second] duration-300 border-[--primary] text-[--primary] p-3 ">
                            <a href="https://www.youtube.com/channel/UCR3Hd79FFrnJT2moP0eAz_Q"><FaYoutube></FaYoutube></a>
                        </span>
                    </span>

                    <p className="text-[20px] font-bold mb-[20px] ">
                        We accept
                    </p>
                    <img src={visa} alt="" />
                </div>
            </div>

            <div className="pt-[8px] pb-[13px] " >
                <p className="text-center text-[18px] leading-[200%] " >© 2021 GreenShop. All Rights Reserved.</p>
            </div>
        </>
    );
};

export default Footer;
