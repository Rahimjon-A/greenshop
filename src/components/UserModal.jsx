import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { finishAuth } from "../reducers/cart";

const UserModal = () => {
    const { isAuth } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [ show, setShow ] = useState(false)
    
    useEffect(() => {
        if (isAuth) {
            setShow(true);
        } else {
            setTimeout(() => setShow(false), 500);
        }
    }, [isAuth]);

    return (
        <div
            className={`${
                isAuth ? "flex" : "hidden"
            } bg-[#000000b3] fixed z-40 top-0 left-0 w-full h-full duration-300 justify-center items-center`}
        >
            <div
                className={`bg-white ${
                    show ? "translate-y-0" : "translate-y-[100vh]"
                } transition-all duration-500 max-w-[600px] px-[100px] pt-[50px] pb-[60px] w-full border-b-[8px] border-[--primary] overflow-hidden content flex rounded-md flex-col`}
            >
                    <span
                        onClick={() => dispatch(finishAuth())}
                        className="text-[45px] top-[17px] text-[--primary] rotate-45 font-light right-[17px] absolute cursor-pointer"
                        > +
                    </span>

                <div className="flex gap-3 items-center justify-center mb-[50px] " >
                <p className=" cursor-pointer text-[24px] font-medium ">Login</p> <span className=" text-[24px] font-medium ">|</span> <p className=" cursor-pointer text-[24px] font-medium ">Register</p>
                </div>

                <div className="flex flex-col gap-[17px] " >
                    <p>Enter your username and password to login.</p>
                    <input type="email" value={"almamun_uxui@outlook.com"} className="border px-[14px] text-[18px] text-[--text] py-3 outline-[--primary]  "/>
                    <input type="password" className="border px-[14px] text-[18px] text-[--text] py-3 outline-[--primary]  " />
                </div>
                
            </div>
        </div>
    );
};

export default UserModal;
