import { FaArrowRight } from "react-icons/fa";


const SimpleCart = ({image, title}) => {
    return (
        <div className="bg-[--bg] grow rounded-md ">
            <div className="flex items-end " >
                <div>
                    <img src={image} alt="" className="w-full " />
                </div>

                <div className="px-3 py-5 md:px-9 md:py-12 flex flex-col justify-end items-end sm:w-[60%] w-auto ml-auto ">
                    <p className="text-[--second] text-[18px] md:text-[35px] w-auto  sm:w-[69%] font-bold text-end mb-[15px] ">
                        {title}
                    </p>
                    <p className="md:text-[20px] text-[12px] md:leading-8  font-light  text-end mb-[15px] ">
                        We are an olline palnt shop offering a wide range of
                        cheap and trendy plants
                    </p>
                    <button className="flex items-center md:text-[18px] text-[11px]  gap-1 bg-[--primary] py-1 px-3 md:py-2 md:px-6 rounded-sm md:rounded-md text-white hover:opacity-70 duration-300 ">
                        <span>Find More</span>
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SimpleCart;
