import image1 from "../assets/images/01.jpg";
import image2 from "../assets/images/02.jpg";
import image3 from "../assets/images/03.jpg";
import image4 from "../assets/images/04.jpg";
import BlogCart from "../ui/BlogCart";

const Blogs = () => {
    return (
        <div className="mb-[100px] " >
            <div className="mb-[35px] ">
                <h1 className=" text-center text-[--second] text-[35px] font-bold mb-[15px] ">
                    Our Blog Posts
                </h1>
                <p className="text-[--text] text-[20px] text-center ">
                    We are an online plant shop offering a wide range of cheap
                    and trendy plants.{" "}
                </p>
            </div>
            <div className="grid grid-cols-4 gap-[44px] ">
                <BlogCart
                    image={image1}
                    title={" Cactus & Succulent Care Tips"}
                    content={
                        "Cacti are succulents are easy care plants for any home or patio."
                    }
                />
                <BlogCart
                    image={image2}
                    title={" Top 10 Succulents for Your Home"}
                    content={
                        "Cacti are succulents are easy care plants for any home or patio."
                    }
                />
                <BlogCart
                    image={image3}
                    title={" Cacti & Succulent Care Tips"}
                    content={
                        "Cacti are succulents are easy care plants for any home or patio."
                    }
                />
                <BlogCart
                    image={image4}
                    title={" Best Houseplants Room by Room"}
                    content={
                        "Cacti are succulents are easy care plants for any home or patio."
                    }
                />
            </div>
        </div>
    );
};

export default Blogs;
