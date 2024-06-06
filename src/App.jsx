import React, { useEffect, useState } from "react";
import PlantCare from "./Pages/PlantCare";
import Blogs from "./Pages/Blogs";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Search from "./components/Search";
import Shopping from "./Pages/Shopping";
import Checkout from "./Pages/Checkout.";
import User from "./Pages/User";
import { useDispatch, useSelector } from "react-redux";
import { clearWarning, handleActive } from "./reducers/cart";
import MobileNavbar from "./components/MobileNavbar";
import MobileHeader from "./components/MobileHeader";
import MobileCotegories from "./components/MobileCotegories";
import ScrollTop from "./components/UpToTop";

const App = () => {
    const navigate = useNavigate();
    const { warning } = useSelector((state) => state.cart);
    const dispatch = useDispatch();



    useEffect(() => {
        if (warning) {
            const timer = setTimeout(() => {
                dispatch(clearWarning());
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [warning]);

    useEffect(() => {
        navigate("/");
    }, []);

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        country: "default",
        city: "",
        street: "",
        state: "default",
        zip: "",
        email: "",
        phone: "",
    });

    const [errors, setErrors] = useState({});
    const [order, setOrder] = useState(false);
    const [ modal, setModal] = useState(false)
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstname) newErrors.firstname = "First name is required";
        if (!formData.lastname) newErrors.lastname = "Last name is required";
        if (formData.country === "default")
            newErrors.country = "Country is required";
        if (!formData.city) newErrors.city = "City is required";
        if (!formData.street) newErrors.street = "Street address is required";
        if (formData.state === "default") newErrors.state = "State is required";
        if (!formData.zip) newErrors.zip = "Zip code is required";
        if (!formData.email) newErrors.email = "Email address is required";
        if (!formData.phone) newErrors.phone = "Phone number is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            setOrder(true);
            setErrors({});
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className=" relative">
            {warning && (
                <div className=" z-10 w-[380px] fixed bg-[--primary] text-center rounded-lg font-semibold p-1 text-[16px] right-1/2 translate-x-1/2 duration-300 top-[5%] text-white transition-all ">
                    <span className="block">
                        Item has been added to your cart. Want more ?
                    </span>
                    <Link
                        to={"/shop/cart"}
                        onClick={() => dispatch(handleActive(1))}
                        className="text-[--second] underline "
                    >
                        Go to Shopping Cart
                    </Link>
                </div>
            )}
            <ScrollTop/>
            <Navbar />
            <MobileNavbar setModal={setModal} />
            <MobileCotegories setModal={setModal} modal={modal} />
            <Search />
            <div className="container px-4 mx-auto">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Cart />} />
                    <Route path="/plant-care" element={<PlantCare />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/shop/cart" element={<Shopping />} />
                    <Route
                        path="/shop/checkout"
                        element={
                            <Checkout
                                formData={formData}
                                handleInputChange={handleInputChange}
                                handleSubmit={handleSubmit}
                                errors={errors}
                                order={order}
                                setOrder={setOrder}
                            />
                        }
                    />
                    <Route path="/user" element={<User 
                    formData={formData}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    order={order}
                    />} />
                    <Route path="/shop/:slug" element={<Cart />} />
                </Routes>
            </div>
                <div className=" md:hidden fixed bottom-[-2px] w-full z-30" >
                <MobileHeader/>
                </div>
        </div>
    );
};

export default App;
