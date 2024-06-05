import React from "react";
import { FaHeart, FaUserAlt } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { TbScan } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleActive } from "../reducers/cart";
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/clerk-react";

const MobileHeader = () => {
    const { active } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    return (
        <div className="bg-white w-full h-[94px] text-center mx-auto">
            <ul className="grid grid-cols-5 place-content-center h-full justify-center items-center">
                <Link to={"/"}>
                    <li
                        onClick={() => dispatch(handleActive(0))}
                        className={` ${
                            active == 0
                                ? "text-[--primary] scale-110 "
                                : "text-[--text] "
                        } flex cursor-pointer justify-center text-[24px] `}
                    >
                        <GoHomeFill />
                    </li>
                </Link>

                <Link to={"/shop"}>
                    <li
                        onClick={() => dispatch(handleActive(1))}
                        className={` ${
                            active == 1
                                ? "text-[--primary] scale-110 "
                                : "text-[--text] "
                        } flex cursor-pointer justify-center text-[24px]`}
                    >
                        <FaHeart />
                    </li>
                </Link>

                <Link>
                    <li
                        className={`flex cursor-pointer justify-center text-[24px] text-[--text] rounded-full py-2 px-8  mt-[-80px] `}
                    >
                        <span className="bg-[--primary] p-[21px] rounded-full ">
                            <TbScan className="text-white text-[40px] " />{" "}
                        </span>
                    </li>
                </Link>

                <Link to={"/shop/cart"}>
                    <li
                        onClick={() => dispatch(handleActive(2))}
                        className={` ${
                            active == 2
                                ? "text-[--primary] scale-110 "
                                : "text-[--text] "
                        }flex cursor-pointer justify-center text-[24px]  `}
                    >
                        <PiShoppingCartSimpleFill />
                    </li>
                </Link>

                <Link to={"/user"}>
                    <header>
                        <SignedOut>
                            <SignInButton>
                                <li
                                    onClick={() => dispatch(handleActive(3))}
                                    className={` ${
                                        active == 3
                                            ? "text-[--primary] scale-110 "
                                            : "text-[--text] "
                                    } flex cursor-pointer justify-center text-[24px]  `}
                                >
                                    <FaUserAlt />
                                </li>
                            </SignInButton>
                        </SignedOut>

                        <SignedIn>
                            <li
                                onClick={() => dispatch(handleActive(3))}
                                className={` ${
                                    active == 3
                                        ? "text-[--primary] scale-110 "
                                        : "text-[--text] "
                                } flex cursor-pointer relative justify-center text-[24px]  `}
                            >
                                <FaUserAlt />
                                <span className=" absolute hidden ">
                                    {" "}
                                    <UserButton></UserButton>
                                </span>
                            </li>
                        </SignedIn>
                    </header>
                </Link>
            </ul>
        </div>
    );
};

export default MobileHeader;
