import { FaLocationPin } from "react-icons/fa6";
import img1 from "../assets/images/contact1.svg";
import img2 from "../assets/images/contact2.svg";
import Logo from "../assets/images/Logo.svg";
import { CiLocationOn } from "react-icons/ci";
import { BiMessageSquareCheck } from "react-icons/bi";
import { PiPhoneCall } from "react-icons/pi";
import Footer from "./Footer";

const Contact = () => {
    return (
        <div>
            <div className="flex flex-wrap lg:flex-nowrap  gap-[62px] bg-[--bg] pt-[31px] pr-[25px] pb-[23px] ">
                <div className="grid grid-cols-1 md:grid-cols-3  grow ">
                    <div className="md:border-r ml-[27px] pr-[34px] ">
                        <img src={img1} alt="" className="mb-[17px]" />
                        <div>
                            <p className="font-bold mb-2 text-[18px] text-[--second] ">
                                Garden Care
                            </p>
                            <p className="text-[--text] text-[15px] leading-[150%] ">
                                We are an online plant shop offering a wide
                                range of cheap and trendy plants.
                            </p>
                        </div>
                    </div>

                    <div className="md:border-r ml-[27px] pr-[34px] ">
                        <img src={img2} alt="" className="mb-[17px]" />
                        <div>
                            <p className="font-bold mb-2 text-[18px] text-[--second] ">
                                Garden Care
                            </p>
                            <p className="text-[--text] text-[15px] leading-[150%] ">
                                We are an online plant shop offering a wide
                                range of cheap and trendy plants.
                            </p>
                        </div>
                    </div>

                    <div className=" ml-[27px] pr-[34px] ">
                        <img src={img1} alt="" className="mb-[17px]" />
                        <div>
                            <p className="font-bold mb-2 text-[18px] text-[--second] ">
                                Garden Care
                            </p>
                            <p className="text-[--text] text-[15px] leading-[150%] ">
                                We are an online plant shop offering a wide
                                range of cheap and trendy plants.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-[354px] ml-[34px] md:ml-0 w-full ">
                    <p className="text-[20px] font-bold text-[--second] mb-[18px] ">
                        Would you like to join newsletters?
                    </p>
                    <div className="flex bg-white pl-3 mb-[18px] rounded-md overflow-hidden ">
                        <input
                            type="text"
                            className="py-[12px] text-[#ACACAC] outline-none text-[18px] bg-inherit grow"
                            placeholder="enter your email address..."
                        />
                        <button className="text-white bg-[--primary] px-[26px] ">
                            Join
                        </button>
                    </div>
                    <p className="text-[--text] text-[15px] leading-[170%] ">
                        We usually post offers and challenges in newsletter.
                        We’re your online houseplant destination. We offer a
                        wide range of houseplants and accessories shipped
                        directly from our (green)house to yours!
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-5 justify-between items-center gap-[60px] pt-[25px] pl-[25px] pb-[19px] bg-[--bg-low] ">

                <img src={Logo} alt="" className=" cursor-pointer" />

                <div className="flex gap-2 cursor-pointer items-center">
                    <CiLocationOn className="text-[--primary] text-[45px] " ></CiLocationOn>
                    <span className=" text-[18px] leading-[150%] ">70 West Buckingham Ave. Farmingdale, NY 11735</span>
                </div>

                <div className="flex gap-2 cursor-pointer items-center">
                    <BiMessageSquareCheck className="text-[--primary] text-[24px] " > </BiMessageSquareCheck>
                    <span className=" text-[18px] leading-[150%] ">contact@greenshop.com</span>
                </div>

                <div className="flex cursor-pointer  gap-2 items-center">
                <PiPhoneCall className="text-[--primary] text-[24px] " ></PiPhoneCall>
                    <span className=" text-[18px] leading-[150%] ">+88 01911 717 490</span>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default Contact;
