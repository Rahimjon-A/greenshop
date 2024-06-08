import Contact from "../components/Contact";
import generalPlantImage from "../assets/images/plantcare4.jpg";
import image1 from "../assets/images/plantcare3.jpg";
import image2 from "../assets/images/plantcare4.jpg";
import image3 from "../assets/images/Interior.jpg";
import ShopSlider from "../components/ShopSlider"

const PlantCare = () => {
    return (
        <div className={`min-h-[100vh] flex flex-col  justify-between  `}>
            <div className="h-[90vh] w-full plantcare flex flex-col items-center justify-center ">
                <div className="text-[32px] text-center md:text-[70px] capitalize font-bold text-[--second]">
                    plants for positive workspaces
                </div>
                <p className="text-[22px] w-[70%] font-medium mx-auto text-center md:text-[32px] text-[--second] ">
                    At PlantCare we’re dedicated to helping you improve health
                    and wellbeing in your workplace through the supply and
                    maintenance of innovative planting schemes.
                </p>
            </div>

            <section className="py-12 px-[100px] ">
                <div className=" grid grid-cols-1  lg:grid-cols-3 items-center space-y-6 md:space-y-0 md:space-x-6">
                    <div>
                        <p className="text-[--text] text-[18px]">
                            Our plants are carefully selected to ensure they
                            thrive in your home environment. Whether you're a
                            novice or an experienced gardener, our plants are
                            perfect for you. Research shows that the addition of
                            even a handful of office plants can transform a
                            workspace from ordinary to extraordinary - find out
                            more about our services here:
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src={generalPlantImage}
                            alt="General Plant Image"
                            className="w-full md:w-[700px] "
                        />
                    </div>

                    <div>
                        <p className="text-[--text] text-[16px] mt-4">
                            We provide a wide variety of plants, from
                            easy-to-care-for succulents to lush houseplants that
                            can purify your indoor air. Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit. Did you know
                            that office plants have the power to transform your
                            workspace and your people? Boost the positivity,
                            productivity and focus of your team with vibrant
                            interior planting.
                        </p>
                    </div>
                </div>
            </section>

            <section className=" my-[40px] px-[60px] ">
                <h2 className="text-[--text] text-[20px] text-center font-bold mb-4">
                    We specialise in supplying and installing all things green -
                    indoor and outdoor plant displays, indoor trees and wall
                    planting, as well as offering a professional maintenance
                    service.
                </h2>

                <div className="grid grid-cols-1 mt-[40px] md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg">
                        <img
                            src={image1}
                            alt="Care Tip 1"
                            className="w-full h-48 object-cover mb-4 rounded-lg"
                        />
                        <h3 className="text-[--second] text-[25px] font-bold mb-2">
                            Watering Tips
                        </h3>
                        <p className="text-[--text] text-[16px]">
                            Proper watering is essential for plant health. Learn
                            how to determine when your plant needs water and how
                            much to give it.
                        </p>
                    </div>
                    <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg">
                        <img
                            src={image2}
                            alt="Care Tip 2"
                            className="w-full h-48 object-cover mb-4 rounded-lg"
                        />
                        <h3 className="text-[--second] text-[25px] font-bold mb-2">
                            Sunlight Requirements
                        </h3>
                        <p className="text-[--text] text-[16px]">
                            Different plants have different light needs.
                            Discover which plants thrive in bright light and
                            which prefer low light conditions.
                        </p>
                    </div>
                    <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg">
                        <img
                            src={image3}
                            alt="Care Tip 3"
                            className="w-full h-48 object-cover mb-4 rounded-lg"
                        />
                        <h3 className="text-[--second] text-[25px] font-bold mb-2">
                            Soil and Fertilizer
                        </h3>
                        <p className="text-[--text] text-[16px]">
                            Choosing the right soil and fertilizer can make a
                            big difference. Find out what type of soil and
                            fertilizer is best for your plants.
                        </p>
                    </div>
                </div>
            </section>

            <ShopSlider/>
            <Contact />
        </div>
    );
};

export default PlantCare;
