// import { useDispatch, useSelector } from "react-redux";
// import { FiTrash } from "react-icons/fi";
// import { handleRemove } from "../reducers/cart";

// const ShoppingCart = () => {
//     const { carts } = useSelector((state) => state.cart);
//     const dispatch = useDispatch();
    
//     return (
//         <>
//             {carts.map((item) => {
//                 const itemTotal = (item.amount * item.price).toFixed(2);

//                 return (
//                     <div key={item.id} className="grid grid-cols-[2fr_1fr_1fr_1fr] mt-[12px] bg-[--bg] items-center ">
//                         <div className="flex gap-4 items-center">
//                             <img src={item.image_url} alt="" className="w-[80px] h-[80px] " />
//                             <span>
//                                 <span className="block text-[18px] capitalize font-medium mb-[6px] ">
//                                     {item.common_name}
//                                 </span>
//                                 <span className="text-[#A5A5A5]">
//                                     SKU:
//                                     <span className="text-[--text]">
//                                         {item.id}
//                                     </span>
//                                 </span>
//                             </span>
//                         </div>

//                         <p className="text-[20px] text-[--text] font-medium ">
//                             ${item.price}.00
//                         </p>

//                         <div>
//                             <span className="flex gap-[14px] items-center">
//                                 <span className="text-white cursor-pointer hover:opacity-70 bg-[--primary] px-[14px] text-[18px] py-[6px] rounded-full font-bold">
//                                     -
//                                 </span>
//                                 <span className="text-[20px]"> {item.amount} </span>
//                                 <span className="text-white cursor-pointer hover:opacity-70 bg-[--primary] px-[13px] text-[18px] py-[6px] rounded-full font-bold">
//                                     +
//                                 </span>
//                             </span>
//                         </div>

//                         <div className="flex items-center justify-between pr-[26px] ">
//                             <p className="text-[18px] font-bold text-[--primary]">
//                                 ${itemTotal}
//                             </p>
//                             <FiTrash
//                                 onClick={() => dispatch(handleRemove(item.id)) }
//                                 className="text-[28px] text-[--text] cursor-pointer"
//                             ></FiTrash>

//                         </div>
//                     </div>
//                 );
//             })}
//         </>
//     );
// };

// export default ShoppingCart;
