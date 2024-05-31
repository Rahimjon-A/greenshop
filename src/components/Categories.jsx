
import RangeSlider from "../ui/Range"

const Categories = () => {
    return (
       <div >
         <div className=" bg-[--bg] pl-[18px] pb-[18px] pt-[14px] pr-[24px] ">
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
                <div className="flex pl-[12px] gap-4 flex-col mb-[30px] w-[80%] ">
                        <RangeSlider/>
                        <p className="text-[18px]">Price:  <span className="text-[--primary] " >$39 - $1230</span></p>

                   <p> <span className="bg-[--primary]  rounded-md text-white text-[18px] py-2 px-7 hover:opacity-70 " >FIlter</span></p>
                </div>
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

        <div className="discount w-full  max-h-[470px] h-full" >
        </div>
       </div>
    );
};

export default Categories;


