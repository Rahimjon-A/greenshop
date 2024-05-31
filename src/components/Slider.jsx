import { useEffect, useState } from "react";
import heroImg1 from "../assets/images/heroImg1.svg";
import heroImg2 from "../assets/images/heroImg2.svg";

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
        <div className=" mt-[10px] overflow-hidden w-full z-0 relative bg-[#f9f9f9] max-h-[780px]  mb-[46px]  ">
            <div
                style={{ transform: `translateX(-${isShow * 100}% )` }}
                className="flex w-full transition-transform ease-out duration-500 z-0 relative"
            >
                <div
                    className={` min-w-full transition-all ease-out duration-500 grid grid-cols-2  h-full `}
                >
                    <div className=" pl-[43px] pt-[68px] ">
                        <p className=" uppercase text-[16px] font-medium mb-2 ">
                            Welcome to GreenShop
                        </p>
                        <h1 className=" mb-1 text-[--second] text-[70px] font-black leading-[70px] w-[80%] ">
                            Let’s Make a Better{" "}
                            <span className="text-[--primary] ">Planet</span>
                        </h1>
                        <p className="text-[#727272] text-[16px] leading-[24px] mb-[44px] ">
                            We are an online plant shop offering a wide range of
                            cheap and trendy plants. Use our plants to create an
                            unique Urban Jungle. Order your favorite plants!
                        </p>
                        <button className="bg-[--primary] text-white py-3 px-7 rounded-md font-bold ">
                            Shop Now
                        </button>
                    </div>
                    <div>
                        <div className="h-full flex relative justify-end">
                            <img
                                src={heroImg1}
                                className="bg-inherit h-full "
                                alt="image"
                            />
                            <span className=" absolute bottom-[35px] left-[300px] ">
                                <img
                                    src={heroImg2}
                                    alt=""
                                    className="w-[135px] h-[135px] "
                                />
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    className={` min-w-full transition-all ease-out duration-500 grid grid-cols-2  h-full `}
                >
                    <div className=" pl-[43px] pt-[68px] ">
                        <p className=" uppercase text-[16px] font-medium mb-2 ">
                            Welcome to GreenShop
                        </p>
                        <h1 className=" mb-1 text-[--second] text-[70px] font-black leading-[70px] w-[80%] ">
                            Let’s Make a Better{" "}
                            <span className="text-[--primary] ">Planet</span>
                        </h1>
                        <p className="text-[#727272] text-[16px] leading-[24px] mb-[44px] ">
                            We are an online plant shop offering a wide range of
                            cheap and trendy plants. Use our plants to create an
                            unique Urban Jungle. Order your favorite plants!
                        </p>
                        <button className="bg-[--primary] text-white py-3 px-7 rounded-md font-bold ">
                            Shop Now
                        </button>
                    </div>
                    <div>
                        <div className="h-full flex relative justify-end">
                            <img
                                src={heroImg1}
                                className="bg-inherit h-full "
                                alt="image"
                            />
                            <span className=" absolute bottom-[35px] left-[300px] ">
                                <img
                                    src={heroImg2}
                                    alt=""
                                    className="w-[135px] h-[135px] "
                                />
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    className={` min-w-full transition-all ease-out duration-500 grid grid-cols-2  h-full `}
                >
                    <div className=" pl-[43px] pt-[68px] ">
                        <p className=" uppercase text-[16px] font-medium mb-2 ">
                            Welcome to GreenShop
                        </p>
                        <h1 className=" mb-1 text-[--second] text-[70px] font-black leading-[70px] w-[80%] ">
                            Let’s Make a Better{" "}
                            <span className="text-[--primary] ">Planet</span>
                        </h1>
                        <p className="text-[#727272] text-[16px] leading-[24px] mb-[44px] ">
                            We are an online plant shop offering a wide range of
                            cheap and trendy plants. Use our plants to create an
                            unique Urban Jungle. Order your favorite plants!
                        </p>
                        <button className="bg-[--primary] text-white py-3 px-7 rounded-md font-bold ">
                            Shop Now
                        </button>
                    </div>
                    <div>
                        <div className="h-full flex relative justify-end">
                            <img
                                src={heroImg1}
                                className="bg-inherit h-full "
                                alt="image"
                            />
                            <span className=" absolute bottom-[35px] left-[300px] ">
                                <img
                                    src={heroImg2}
                                    alt=""
                                    className="w-[135px] h-[135px] "
                                />
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    className={` min-w-full transition-all ease-out duration-500 grid grid-cols-2  h-full `}
                >
                    <div className=" pl-[43px] pt-[68px] ">
                        <p className=" uppercase text-[16px] font-medium mb-2 ">
                            Welcome to GreenShop
                        </p>
                        <h1 className=" mb-1 text-[--second] text-[70px] font-black leading-[70px] w-[80%] ">
                            Let’s Make a Better{" "}
                            <span className="text-[--primary] ">Planet</span>
                        </h1>
                        <p className="text-[#727272] text-[16px] leading-[24px] mb-[44px] ">
                            We are an online plant shop offering a wide range of
                            cheap and trendy plants. Use our plants to create an
                            unique Urban Jungle. Order your favorite plants!
                        </p>
                        <button className="bg-[--primary] text-white py-3 px-7 rounded-md font-bold ">
                            Shop Now
                        </button>
                    </div>
                    <div>
                        <div className="h-full flex relative justify-end">
                            <img
                                src={heroImg1}
                                className="bg-inherit h-full "
                                alt="image"
                            />
                            <span className=" absolute bottom-[35px] left-[300px] ">
                                <img
                                    src={heroImg2}
                                    alt=""
                                    className="w-[135px] h-[135px] "
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex absolute z-10 bottom-14 left-[50%] gap-4 items-center">
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
