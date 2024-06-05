import  { useEffect, useState } from "react";

const MobileCotegories = ({modal, setModal}) => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        if (modal) {
            setShow(true);
        } else {
            setTimeout(() => setShow(false), 500);
        }
    }, [modal]);

    return (
        <div
            className={` ${
                modal ? "flex" : "hidden"
            } bg-[#000000b3] fixed z-40 top-0 left-0 w-full h-full duration-300 justify-center items-start`}
        >
            <div
                className={`bg-white ${
                    show ? "translate-y-0" : "translate-y-[-100vh] "
                } transition-all duration-500 relative w-full lg:w-[900px] mx-4 flex mt-[7%] rounded-md flex-col `}
            >

            <button onClick={()=> setModal(false)} className=" absolute rotate-45 text-[45px]  top-0 right-4 " >+</button>
            <div className="mb-[30px] p-4 ">
                <p className=" text-[20px] font-bold mb-[20px] ">Categories</p>
                <ul className="pl-[12px] flex flex-col gap-[20px] tex-[--second] ">
                    <li
                        className={`flex  hover:text-[--primary]  cursor-pointer justify-between text-[18px] items-center`}
                    >
                        <span>House Plants</span>
                        <span>(33)</span>
                    </li>
                    <li
                        className={`flex  hover:text-[--primary] cursor-pointer justify-between text-[18px] items-center`}
                    >
                        <span>Potter Plants</span>
                        <span>(12)</span>
                    </li>
                    <li
                        className={`flex hover:text-[--primary]  cursor-pointer justify-between text-[18px] items-center`}
                    >
                        <span>Seeds</span>
                        <span>(33)</span>
                    </li>
                    <li
                        className={`flex hover:text-[--primary]  cursor-pointer justify-between text-[18px] items-center`}
                    >
                        <span>Small Plants</span>
                        <span>(33)</span>
                    </li>
                    <li
                        className={`flex hover:text-[--primary]  cursor-pointer justify-between text-[18px] items-center`}
                    >
                        <span>Big Plants</span>
                        <span>(33)</span>
                    </li>
                    <li
                        className={`flex hover:text-[--primary]  cursor-pointer justify-between text-[18px] items-center`}
                    >
                        <span>Succulents</span>
                        <span>(33)</span>
                    </li>
                    <li
                        className={`flex hover:text-[--primary]  cursor-pointer justify-between text-[18px] items-center`}
                    >
                        <span>Trerrariums</span>
                        <span>(33)</span>
                    </li>
                    <li
                        className={`flex hover:text-[--primary]  cursor-pointer justify-between text-[18px] items-center`}
                    >
                        <span>Gardening</span>
                        <span>(33)</span>
                    </li>
                    <li
                        className={`flex hover:text-[--primary]  cursor-pointer justify-between text-[18px] items-center`}
                    >
                        <span>Accessories</span>
                        <span>(33)</span>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default MobileCotegories;
