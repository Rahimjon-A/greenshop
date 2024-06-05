import { FaSearch } from "react-icons/fa"
import filter from "../assets/icons/Filter.svg"
import { useDispatch } from "react-redux"
import { openModal } from "../reducers/cart"

const MobileNavbar = ({setModal}) => {
    const dispatch = useDispatch()
  return (
    <div className="flex gap-2 mt-[41px] container mx-auto justify-between md:hidden px-4" >
      <label onClick={() => dispatch(openModal())}  className="flex rounded-lg bg-[--bg] gap-2 px-3 shadow-sm items-center grow " >
        <FaSearch className="text-[22px] text-[#A5A5A5] " />
      <input type="text" className="w-full py-[15px] bg-inherit outline-none"  placeholder="Find your plants" />
      </label>
        <div onClick={()=> setModal(true)} className=" cursor-pointer bg-[--primary] py-3 px-5 rounded-xl grid shadow-xl place-content-center ">  <img src={filter} className="w-[22px] h-[22px] " alt="" /> </div>
    </div>
  )
}

export default MobileNavbar