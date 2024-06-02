import { useState } from "react";
import { data } from "../data/data";
import Card from "./Card";

const ShopSlider = () => {
    const [slide, setSlide] = useState(0);
    const slidesToShow = 5;  // Adjust this value based on how many cards you want visible at once.
    const totalSlides = Math.ceil(data.length / slidesToShow);

    return (
        <div className="relative mt-[44px] pb-[50px] w-full overflow-hidden mb-[128px]">
            <div
                style={{ transform: `translateX(-${slide * 100}%)` }}
                className="flex gap-[40px] transition-transform ease-out duration-500"
            >
                {data.map((item) => (
                    <div
                        key={item.common_name}
                        className="min-w-[265px] flex-shrink-0"
                        style={{ flex: `0 0 calc(${100 / slidesToShow}% - 40px)` }}
                    >
                        <Card item={item} />
                    </div>
                ))}
            </div>
            <div className="flex absolute z-10 bottom-0 left-1/2 transform -translate-x-1/2 gap-4 items-center">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setSlide(index)}
                        className={`${
                            slide === index ? "bg-[--primary]" : "bg-white"
                        } w-[14px] border-[2px] border-[--primary] h-[14px] rounded-full cursor-pointer hover:scale-105 transition-transform`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ShopSlider;
