import React from 'react'
import Categories from './Categories'
import MainContent from './MainContent'

const MainSection = () => {
  return (
    <div className=' grid grid-cols-[1fr_3fr] gap-[50px] ' >
        <Categories/>
        <MainContent/>
  
    </div>
  )
}

export default MainSection