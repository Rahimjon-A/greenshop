import moment from "moment/moment";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BlogCart = ({ image, title, content }) => {
    return (
        <div className="bg-[--bg] rounded-md " >
            <img src={image} alt="" className=" w-full mb-2 " />
            <div className="px-[15px] pb-[13px] " >
                <p className="text-[--primary] mb-1 font-medium text-[20px] tracking-normal ">
                    <span> {moment().format("dddd DD")} </span> | Read
                    <span> {moment().startOf("hour").fromNow()} </span>
                </p>
                <p className="text-[30px] font-bold leading-[130%] w-[90%] mb-1 ">
                    {title}
                </p>
                <p className=" text-[--text] text-[18px] leading-[150%] mb-2 ">
                    {content}
                </p>
                <button className="flex items-center gap-2  hover:text-[--primary] font-medium  hover:opacity-70 duration-300 ">
                    <span className="text-[18px]">Find More</span>
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default BlogCart;
