import React from 'react'
import Categories from './Categories'
import MainContent from './MainContent'
import SimpleCart from '../ui/SimpleCart'
import Image14 from "../assets/images/image14.svg"
import Image15 from "../assets/images/image15.svg"
import Blogs from './Blogs'
import Contact from './Contact'

const MainSection = () => {
  return (
    <>
    <div className=' grid grid-cols-[1fr_3fr] gap-[50px] mb-[96px] ' >
        <Categories/>
        <MainContent/>
    </div>
        <div className='flex justify-between items-center gap-[28px] mb-[138px] ' >
        <SimpleCart image={Image14} title={`Summer Cactus  & Succulents`} />
        <SimpleCart image={Image15} title={`Styling trends   &  much  more`} />
        </div>
        <Blogs/>
        <Contact/>
    </>
  )
}

export default MainSection