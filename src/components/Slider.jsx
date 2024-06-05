import { useEffect, useState } from "react";
import heroImg1 from "../assets/images/heroImg1.svg";
import heroImg2 from "../assets/images/heroImg2.svg";
import { FaRightLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Slider = () => {
    const [isShow, setIsShow] = useState(0);

    const handleSlide = () => {
        if (isShow > 0) {
            setIsShow(isShow - 1);
        } else if (isShow < 2) {
            setIsShow(isShow + 1);
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsShow((prevSlide) => (prevSlide % 3) + 1);
        }, 4000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className=" mt-[10px] overflow-hidden w-full z-0 relative bg-[--bg-low] md:bg-[#f9f9f9] rounded-3xl  md:max-h-[780px] mb-[18px]  md:mb-[46px]  ">
            <div
                style={{ transform: `translateX(-${isShow * 100}% )` }}
                className="flex w-full transition-transform  ease-out duration-500 z-0 relative"
            >
                <div
                    className={` overflow-hidden  min-w-full transition-all ease-out duration-500 grid grid-cols-2 h-full `}
                >
                    <div className=" pl-[18px] md:pl-[43px] pt-[24px] md:pt-[68px] ">
                        <p className=" uppercase text-[11px] sm:text-[16px] font-medium mb-2 ">
                            Welcome to GreenShop
                        </p>
                        <h1 className=" mb-1 text-[--second] text-[24px] md:text-[70px] font-black leading-[120%] md:leading-[70px] w-[80%] ">
                            Let’s Make a Better{" "}
                            <span className="text-[--primary] ">Planet</span>
                        </h1>
                        <p className="text-[#727272] hidden md:block text-[16px] leading-[24px] mb-[44px] ">
                            We are an online plant shop offering a wide range of
                            cheap and trendy plants. Use our plants to create an
                            unique Urban Jungle. Order your favorite plants!
                        </p>
                        <p className="text-[#727272] text-[12px] leading-[150%] mb-[11px] md:hidden ">
                            We are an online plant shop offering a wide range
                        </p>
                        <Link to={"/shop"}>
                            <button className="bg-[--primary] hidden md:block text-white py-3 px-7 rounded-md font-bold ">
                                Shop Now
                            </button>
                        </Link>
                        <Link to={"/shop"}>
                            <button className="flex md:hidden text-[12px] items-center gap-1 text-[--primary] font-bold ">
                                SHOP NOW <FaArrowRight />
                            </button>{" "}
                        </Link>
                    </div>

                    <div>
                        <div className="h-full flex relative justify-end">
                            <img
                                src={heroImg1}
                                className="bg-inherit mr-[-50px] sm:mr-0 h-full "
                                alt="image"
                            />
                            <span className=" absolute bottom-[10px] left-[40px]  lg:bottom-[35px] lg:left-[300px] ">
                                <img
                                    src={heroImg2}
                                    alt=""
                                    className="lg:w-[135px] lg:h-[135px] w-[82px] h-[82px]  "
                                />
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    className={` overflow-hidden  min-w-full transition-all ease-out duration-500 grid grid-cols-2 h-full `}
                >
                    <div className=" pl-[18px] md:pl-[43px] pt-[24px] md:pt-[68px] ">
                        <p className=" uppercase text-[11px] sm:text-[16px] font-medium mb-2 ">
                            Welcome to GreenShop
                        </p>
                        <h1 className=" mb-1 text-[--second] text-[24px] md:text-[70px] font-black leading-[120%] md:leading-[70px] w-[80%] ">
                            Let’s Make a Better{" "}
                            <span className="text-[--primary] ">Planet</span>
                        </h1>
                        <p className="text-[#727272] hidden md:block text-[16px] leading-[24px] mb-[44px] ">
                            We are an online plant shop offering a wide range of
                            cheap and trendy plants. Use our plants to create an
                            unique Urban Jungle. Order your favorite plants!
                        </p>
                        <p className="text-[#727272] text-[12px] leading-[150%] mb-[11px] md:hidden ">
                            We are an online plant shop offering a wide range
                        </p>
                        <Link to={"/shop"}>
                            <button className="bg-[--primary] hidden md:block text-white py-3 px-7 rounded-md font-bold ">
                                Shop Now
                            </button>
                        </Link>
                        <Link to={"/shop"}>
                            <button className="flex md:hidden text-[12px] items-center gap-1 text-[--primary] font-bold ">
                                SHOP NOW <FaArrowRight />
                            </button>{" "}
                        </Link>
                    </div>

                    <div>
                        <div className="h-full flex relative justify-end">
                            <img
                                src={heroImg1}
                                className="bg-inherit mr-[-50px] sm:mr-0 h-full "
                                alt="image"
                            />
                            <span className=" absolute bottom-[10px] left-[40px]  lg:bottom-[35px] lg:left-[300px] ">
                                <img
                                    src={heroImg2}
                                    alt=""
                                    className="lg:w-[135px] lg:h-[135px] w-[82px] h-[82px]  "
                                />
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    className={` overflow-hidden  min-w-full transition-all ease-out duration-500 grid grid-cols-2 h-full `}
                >
                    <div className=" pl-[18px] md:pl-[43px] pt-[24px] md:pt-[68px] ">
                        <p className=" uppercase text-[11px] sm:text-[16px] font-medium mb-2 ">
                            Welcome to GreenShop
                        </p>
                        <h1 className=" mb-1 text-[--second] text-[24px] md:text-[70px] font-black leading-[120%] md:leading-[70px] w-[80%] ">
                            Let’s Make a Better{" "}
                            <span className="text-[--primary] ">Planet</span>
                        </h1>
                        <p className="text-[#727272] hidden md:block text-[16px] leading-[24px] mb-[44px] ">
                            We are an online plant shop offering a wide range of
                            cheap and trendy plants. Use our plants to create an
                            unique Urban Jungle. Order your favorite plants!
                        </p>
                        <p className="text-[#727272] text-[12px] leading-[150%] mb-[11px] md:hidden ">
                            We are an online plant shop offering a wide range
                        </p>
                        <Link to={"/shop"}>
                            <button className="bg-[--primary] hidden md:block text-white py-3 px-7 rounded-md font-bold ">
                                Shop Now
                            </button>
                        </Link>
                        <Link to={"/shop"}>
                            <button className="flex md:hidden text-[12px] items-center gap-1 text-[--primary] font-bold ">
                                SHOP NOW <FaArrowRight />
                            </button>{" "}
                        </Link>
                    </div>

                    <div>
                        <div className="h-full flex relative justify-end">
                            <img
                                src={heroImg1}
                                className="bg-inherit mr-[-50px] sm:mr-0 h-full "
                                alt="image"
                            />
                            <span className=" absolute bottom-[10px] left-[40px]  lg:bottom-[35px] lg:left-[300px] ">
                                <img
                                    src={heroImg2}
                                    alt=""
                                    className="lg:w-[135px] lg:h-[135px] w-[82px] h-[82px]  "
                                />
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    className={` overflow-hidden  min-w-full transition-all ease-out duration-500 grid grid-cols-2 h-full `}
                >
                    <div className=" pl-[18px] md:pl-[43px] pt-[24px] md:pt-[68px] ">
                        <p className=" uppercase text-[11px] sm:text-[16px] font-medium mb-2 ">
                            Welcome to GreenShop
                        </p>
                        <h1 className=" mb-1 text-[--second] text-[24px] md:text-[70px] font-black leading-[120%] md:leading-[70px] w-[80%] ">
                            Let’s Make a Better{" "}
                            <span className="text-[--primary] ">Planet</span>
                        </h1>
                        <p className="text-[#727272] hidden md:block text-[16px] leading-[24px] mb-[44px] ">
                            We are an online plant shop offering a wide range of
                            cheap and trendy plants. Use our plants to create an
                            unique Urban Jungle. Order your favorite plants!
                        </p>
                        <p className="text-[#727272] text-[12px] leading-[150%] mb-[11px] md:hidden ">
                            We are an online plant shop offering a wide range
                        </p>
                        <Link to={"/shop"}>
                            <button className="bg-[--primary] hidden md:block text-white py-3 px-7 rounded-md font-bold ">
                                Shop Now
                            </button>
                        </Link>
                        <Link to={"/shop"}>
                            <button className="flex md:hidden text-[12px] items-center gap-1 text-[--primary] font-bold ">
                                SHOP NOW <FaArrowRight />
                            </button>{" "}
                        </Link>
                    </div>

                    <div>
                        <div className="h-full flex relative justify-end">
                            <img
                                src={heroImg1}
                                className="bg-inherit mr-[-50px] sm:mr-0 h-full "
                                alt="image"
                            />
                            <span className=" absolute bottom-[10px] left-[40px]  lg:bottom-[35px] lg:left-[300px] ">
                                <img
                                    src={heroImg2}
                                    alt=""
                                    className="lg:w-[135px] lg:h-[135px] w-[82px] h-[82px]  "
                                />
                            </span>
                        </div>
                    </div>
                </div>
                



            </div>

            <div className="flex absolute z-10 bottom-2 sm:bottom-14 left-[50%] -translate-x-1/2 gap-4 items-center">
                <span
                    onClick={() => setIsShow(1)}
                    className={` ${
                        isShow == 1 ? "bg-[--primary]" : "bg-[#c4e0c9] "
                    } w-[12px] h-3 rounded-full cursor-pointer hover:scale-105 `}
                ></span>
                <span
                    onClick={() => setIsShow(2)}
                    className={` ${
                        isShow == 2 ? "bg-[--primary]" : "bg-[#c4e0c9] "
                    } w-[12px] h-3 rounded-full cursor-pointer hover:scale-105 `}
                ></span>
                <span
                    onClick={() => setIsShow(3)}
                    className={` ${
                        isShow == 3 ? "bg-[--primary]" : "bg-[#c4e0c9] "
                    } w-[12px] h-3 rounded-full cursor-pointer hover:scale-105 `}
                ></span>
            </div>
        </div>
    );
};

export default Slider;
