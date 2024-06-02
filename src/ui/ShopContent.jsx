import { useState } from 'react'

const ShopContent = () => {
    const [desc, setDesc] = useState(true);
  return (
    <div className="mb-[127px] ">
    <div className="flex gap-[30px] border-b ">
        <p
            onClick={() => setDesc(true)}
            className={` ${
                desc
                    ? " border-[--primary] text-[--primary]"
                    : "border-white "
            }  duration-300 cursor-pointer text-[18px] font-bold border-b-[3px]  pb-[12px] `}
        >
            Product Description
        </p>
        <p
            onClick={() => setDesc(false)}
            className={` ${
                desc
                    ? "border-white"
                    : " border-[--primary] text-[--primary] "
            } duration-300 cursor-pointer text-[18px] font-bold border-b-[3px] pb-[12px] `}
        >
            Reviews (19)
        </p>
    </div>
    {desc ? (
        <div>
            <p className="mb-[18px] text-[--text] leading-[170%] mt-[18px] ">
                The ceramic cylinder planters come with a wooden
                stand to help elevate your plants off the ground.
                The ceramic cylinder planters come with a wooden
                stand to help elevate your plants off the ground.
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nam fringilla augue nec est tristique auctor.
                Donec non est at libero vulputate rutrum. Morbi
                ornare lectus quis justo gravida semper. Nulla
                tellus mi, vulputate adipiscing cursus eu, suscipit
                id nulla. <br /> <br /> Pellentesque aliquet, sem
                eget laoreet ultrices, ipsum metus feugiat sem, quis
                fermentum turpis eros eget velit. Donec ac tempus
                ante. Fusce ultricies massa massa. Fusce aliquam,
                purus eget sagittis vulputate, sapien libero
                hendrerit est, sed commodo augue nisi non neque.
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed tempor, lorem et placerat vestibulum,
                metus nisi posuere nisl, in accumsan elit odio quis
                mi. Cras neque metus, consequat et blandit et,
                luctus a nunc. Etiam gravida vehicula tellus, in
                imperdiet ligula euismod eget. The ceramic cylinder
                planters come with a wooden stand to help elevate
                your plants off the ground.
            </p>
            <p className="font-bold text-[18px] leading-[170%] ">
                Living Room:
            </p>
            <p className="mb-[18px] text-[--text] leading-[170%] ">
                The ceramic cylinder planters come with a wooden
                stand to help elevate your plants off the ground.
                The ceramic cylinder planters come with a wooden
                stand to help elevate your plants off the ground.
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.The ceramic cylinder planters come with a
                wooden stand to help elevate your plants off the
                ground. The ceramic cylinder planters come with a
                wooden stand to help elevate your plants off the
                ground. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
            </p>
            <p className="font-bold text-[18px] leading-[170%] ">
                Dining Room:
            </p>
            <p className="mb-[18px] text-[--text] leading-[170%] ">
                The benefits of houseplants are endless. In addition
                to cleaning the air of harmful toxins, they can help
                to improve your mood, reduce stress and provide you
                with better sleep. Fill every room of your home with
                houseplants and their restorative qualities will
                improve your life.
            </p>
            <p className="font-bold text-[18px] leading-[170%] ">
                Office:
            </p>
            <p className="mb-[18px] text-[--text] leading-[170%] ">
                The ceramic cylinder planters come with a wooden
                stand to help elevate your plants off the ground.
                The ceramic cylinder planters come with a wooden
                stand to help elevate your plants off the ground.
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
            </p>
        </div>
    ) : (
        <div>
            <p className="font-bold text-[18px] mt-[18px] leading-[170%] ">
                Reviews:
            </p>
            <p className="mb-[18px] text-[--text] leading-[170%] ">
                The ceramic cylinder planters come with a wooden
                stand to help elevate your plants off the ground.
                The ceramic cylinder planters come with a wooden
                stand to help elevate your plants off the ground.
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
            </p>
            <p className="font-bold text-[18px] leading-[170%] ">
                Reviews:
            </p>
            <p className="mb-[18px] text-[--text] leading-[170%] ">
                The ceramic cylinder planters come with a wooden
                stand to help elevate your plants off the ground.
                The ceramic cylinder planters come with a wooden
                stand to help elevate your plants off the ground.
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
            </p>
            <p className="font-bold text-[18px] leading-[170%] ">
                Reviews:
            </p>
            <p className="mb-[18px] text-[--text] leading-[170%] ">
                The ceramic cylinder planters come with a wooden
                stand to help elevate your plants off the ground.
                The ceramic cylinder planters come with a wooden
                stand to help elevate your plants off the ground.
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
            </p>
        </div>
    )}
</div>
  )
}

export default ShopContent