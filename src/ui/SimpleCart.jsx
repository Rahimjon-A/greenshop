import { FaArrowRight } from "react-icons/fa";


const SimpleCart = ({image, title}) => {
    return (
        <div className="bg-[--bg] grow rounded-md ">
            <div className="flex items-end " >
                <div>
                    <img src={image} alt="" className="w-full " />
                </div>

                <div className=" px-9 py-12 flex flex-col justify-end items-end w-[60%] ml-auto ">
                    <p className="text-[--second] text-[35px]  w-[69%] font-bold text-end mb-[15px] ">
                        {title}
                    </p>
                    <p className="text-[20px] leading-8 font-light  text-end mb-[15px] ">
                        We are an olline palnt shop offering a wide range of
                        cheap and trendy plants
                    </p>
                    <button className="flex items-center gap-1 bg-[--primary] py-2 px-6 rounded-md text-white hover:opacity-70 duration-300 ">
                        <span className="text-[18px]">Find More</span>
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SimpleCart;
