import React, { useEffect } from "react";
import PlantCare from "./Pages/PlantCare";
import Blogs from "./Pages/Blogs";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Search from "./components/Search";
import Shopping from "./Pages/Shopping";
import { useDispatch, useSelector } from "react-redux";
import { clearWarning, handleActive } from "./reducers/cart";

const App = () => {
    const navigate = useNavigate();
    const { warning, active } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        if (warning) {
            const timer = setTimeout(() => {
                dispatch(clearWarning());
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [warning]);

    useEffect(()=>{
        navigate("/");
    },[])

    return (
        <div className=" relative">
            {warning && (
                <div className=" z-10 w-[380px] fixed bg-[--primary] text-center rounded-lg font-semibold p-1 text-[16px] right-1/2 translate-x-1/2 duration-300 top-[5%] text-white transition-all ">
                    <span className="block" >Item has been added to your cart. Want more ?</span>
                    <Link to={'/shop/cart'} onClick={()=> dispatch(handleActive(1))} className="text-[--second] underline " >  Go to Shopping Cart</Link>
                </div>
            )}

            <Navbar />
            <Search />
            <div className="container px-4 mx-auto">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Cart />} />
                    <Route path="/plant-care" element={<PlantCare />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/shop/cart" element={<Shopping />} />
                    <Route path="/shop/:slug" element={<Cart />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
