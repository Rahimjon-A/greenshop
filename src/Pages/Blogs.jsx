import Contact from "../components/Contact";
import image1 from "../assets/images/01.jpg";
import image2 from "../assets/images/02.jpg";
import image3 from "../assets/images/03.jpg";
import image4 from "../assets/images/04.jpg";

const Blogs = () => {
    return (
        <div className={`min-h-[100vh] flex flex-col  justify-between  `}>
            <div>
                <div className="mb-[30px] md:mb-[100px]">
                    <div className="mb-[35px] mt-[80px] ">
                        <h1 className="text-center text-[--second] text-[35px] font-bold mb-[15px]">
                            Our Blog Posts
                        </h1>
                        <p className="text-[--text] text-[20px] text-center">
                            We are an online plant shop offering a wide range of
                            cheap and trendy plants.
                        </p>
                    </div>
                    <div className="space-y-[44px] md:px-[80px] ">
                        <section className="grid grid-cols-1 lg:grid-cols-2 md:flex-row items-center space-y-[20px] md:space-y-0 md:space-x-[20px]">
                            <img
                                src={image1}
                                alt="Cactus & Succulent Care Tips"
                                className="w-full md:w-[600px] "
                            />
                            <div className="flex flex-col justify-center">
                                <h2 className="text-[--second] text-[30px] mt-[15px] font-bold mb-[10px]">
                                    Cactus & Succulent Care Tips
                                </h2>
                                <p className="text-[--text] text-[18px]">
                                    Cacti are succulents are easy care plants
                                    for any home or patio.
                                </p>
                                <p className="text-[--text] text-[16px] mt-[10px]">
                                    Learn the best tips and tricks for keeping
                                    your cacti and succulents healthy and
                                    thriving in any environment.
                                </p>
                                <span className="text-[18px] mt-[15px] font-semibold block ">
                                    Information:{" "}
                                </span>
                                <p className="text-[--text] ">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Temporibus enim, itaque
                                    atque consequuntur quia deserunt possimus
                                    magni provident rem earum alias ex doloribus
                                    labore, quod, eaque veniam. Mollitia
                                    repudiandae velit magni cum cupiditate
                                    molestias laborum quam ea omnis hic, totam
                                    rem saepe ipsum dolor, dicta at expedita
                                    accusamus a laudantium temporibus quis!
                                    Soluta quis, doloremque aliquam et ex illo
                                    minima.
                                </p>
                            </div>
                        </section>

                        <section className="grid grid-cols-1 lg:grid-cols-2  items-center space-y-[20px] md:space-y-0 md:space-x-[20px]">
                            <div className="flex flex-col mt-[15px] order-2 lg:order-1 justify-center">
                                <h2 className="text-[--second] text-[30px] font-bold mb-[10px]">
                                    Top 10 Succulents for Your Home
                                </h2>
                                <p className="text-[--text] text-[18px]">
                                    Discover the top 10 succulents that are
                                    perfect for any home decor.
                                </p>
                                <p className="text-[--text] text-[16px] mt-[10px]">
                                    From easy-care plants to beautiful and
                                    exotic varieties, find the best succulents
                                    to enhance your living space.
                                </p>
                                <span className="text-[18px] mt-[15px] font-semibold block ">
                                    Information:{" "}
                                </span>
                                <p className="text-[--text] ">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Temporibus enim, itaque
                                    atque consequuntur quia deserunt possimus
                                    magni provident rem earum alias ex doloribus
                                    labore, quod, eaque veniam. Mollitia
                                    repudiandae velit magni cum cupiditate
                                    molestias laborum quam ea omnis hic, totam
                                    rem saepe ipsum dolor, dicta at expedita
                                    accusamus a laudantium temporibus quis!
                                    Soluta quis, doloremque aliquam et ex illo
                                    minima.
                                </p>
                            </div>

                            <img
                                src={image2}
                                alt="Top 10 Succulents for Your Home"
                                className="w-full  order-1 lg:order-2 md:w-[600px]"
                            />
                        </section>

                        <section className="grid grid-cols-1 lg:grid-cols-2 items-center space-y-[20px] md:space-y-0 md:space-x-[20px]">
                            <img
                                src={image3}
                                alt="Cacti & Succulent Care Tips"
                                className="w-full md:w-[600px]"
                            />
                            <div className="flex flex-col  justify-center">
                                <h2 className="text-[--second] mt-[15px] text-[30px] font-bold mb-[10px]">
                                    Cacti & Succulent Care Tips
                                </h2>
                                <p className="text-[--text] text-[18px]">
                                    Cacti are succulents are easy care plants
                                    for any home or patio.
                                </p>
                                <p className="text-[--text] text-[16px] mt-[10px]">
                                    Get expert advice on how to care for your
                                    cacti and succulents to ensure they thrive
                                    all year round.
                                </p>
                                <span className="text-[18px] mt-[15px] font-semibold block ">
                                    Information:{" "}
                                </span>
                                <p className="text-[--text] ">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Temporibus enim, itaque
                                    atque consequuntur quia deserunt possimus
                                    magni provident rem earum alias ex doloribus
                                    labore, quod, eaque veniam. Mollitia
                                    repudiandae velit magni cum cupiditate
                                    molestias laborum quam ea omnis hic, totam
                                    rem saepe ipsum dolor, dicta at expedita
                                    accusamus a laudantium temporibus quis!
                                    Soluta quis, doloremque aliquam et ex illo
                                    minima.
                                </p>
                            </div>
                        </section>

                        <section className="grid grid-cols-1 lg:grid-cols-2  items-center space-y-[20px] md:space-y-0 md:space-x-[20px]">
                            <div className="flex order-2 mt-[15px] lg:order-1 flex-col justify-center">
                                <h2 className="text-[--second] text-[30px] font-bold mb-[10px]">
                                    Best Houseplants Room by Room
                                </h2>
                                <p className="text-[--text] text-[18px]">
                                    Explore the best houseplants for every room
                                    in your home.
                                </p>
                                <p className="text-[--text] text-[16px] mt-[10px]">
                                    Find out which plants are best suited for
                                    your living room, bedroom, kitchen, and
                                    more.
                                </p>
                                <span className="text-[18px] mt-[15px] font-semibold block ">
                                    Information:{" "}
                                </span>
                                <p className="text-[--text] ">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Temporibus enim, itaque
                                    atque consequuntur quia deserunt possimus
                                    magni provident rem earum alias ex doloribus
                                    labore, quod, eaque veniam. Mollitia
                                    repudiandae velit magni cum cupiditate
                                    molestias laborum quam ea omnis hic, totam
                                    rem saepe ipsum dolor, dicta at expedita
                                    accusamus a laudantium temporibus quis!
                                    Soluta quis, doloremque aliquam et ex illo
                                    minima.
                                </p>
                            </div>
                            <img
                                src={image4}
                                alt="Best Houseplants Room by Room"
                                className="w-full order-1 lg:order-2 md:w-[600px]"
                            />
                        </section>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
};

export default Blogs;
