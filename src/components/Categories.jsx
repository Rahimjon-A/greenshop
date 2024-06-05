import Discout from "../assets/images/discount.svg"
import RangeSlider from "../ui/Range"

const Categories = () => {
    return (
       <div >
         <div className=" hidden md:block bg-[--bg] pl-[18px] pb-[18px] pt-[14px] pr-[24px] ">
            <div className="mb-[30px] ">
                <p className=" text-[20px] font-bold mb-[20px] ">Categories</p>
                <ul className="pl-[12px] flex flex-col gap-[20px] tex-[--second] ">
                    <li
                        className={`flex  cursor-pointer justify-between text-[18px] items-center`}
                    >
                        <span>House Plants</span>
                        <span>(33)</span>
                    </li>
                    <li
                        className={`flex cursor-pointer justify-between text-[18px] items-center`}
                    >
                        <span>Potter Plants</span>
                        <span>(12)</span>
                    </li>
                    <li
                        className={`flex cursor-pointer justify-between text-[18px] items-center`}
                    >
                        <span>Seeds</span>
                        <span>(33)</span>
                    </li>
                    <li
                        className={`flex cursor-pointer justify-between text-[18px] items-center`}
                    >
                        <span>Small Plants</span>
                        <span>(33)</span>
                    </li>
                    <li
                        className={`flex cursor-pointer justify-between text-[18px] items-center`}
                    >
                        <span>Big Plants</span>
                        <span>(33)</span>
                    </li>
                    <li
                        className={`flex cursor-pointer justify-between text-[18px] items-center`}
                    >
                        <span>Succulents</span>
                        <span>(33)</span>
                    </li>
                    <li
                        className={`flex cursor-pointer justify-between text-[18px] items-center`}
                    >
                        <span>Trerrariums</span>
                        <span>(33)</span>
                    </li>
                    <li
                        className={`flex cursor-pointer justify-between text-[18px] items-center`}
                    >
                        <span>Gardening</span>
                        <span>(33)</span>
                    </li>
                    <li
                        className={`flex cursor-pointer justify-between text-[18px] items-center`}
                    >
                        <span>Accessories</span>
                        <span>(33)</span>
                    </li>
                </ul>
            </div>


            <div>
                    <p className=" text-[20px] justify-start items-start font-bold mb-[20px] ">
                        Price Range
                    </p>
                    <RangeSlider/>
            </div>

            <div >
                <p className=" text-[20px] font-bold mb-[20px] ">Categories</p>
                <ul className="pl-[12px] flex flex-col gap-[20px] tex-[--second] ">
                    <li
                        className={`flex cursor-pointer justify-between text-[18px] items-center`}
                    >
                        <span>Small</span>
                        <span>(33)</span>
                    </li>
                    <li
                        className={`flex cursor-pointer justify-between text-[18px] items-center`}
                    >
                        <span>Medium</span>
                        <span>(12)</span>
                    </li>
                    <li
                        className={`flex cursor-pointer justify-between text-[18px] items-center`}
                    >
                        <span>Large</span>
                        <span>(33)</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className=" hidden md:block discount w-full  max-h-[470px] h-full" >
            <img src={Discout} alt="" />
        </div>

       </div>
    );
};

export default Categories;


