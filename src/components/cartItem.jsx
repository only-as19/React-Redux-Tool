import { useDispatch } from "react-redux"
import { removeItem, increaseItem, decreaseItem } from "../features/cart/cartSlice"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
const CartItem = ({id, img, amount, price, title}) => {
  const dispatch = useDispatch()
  return (
    <article className="flex justify-between my-8">
        <img
        className="h-20 w-20 object-cover"
        src={img}
        alt={title} />
        <div className="mr-auto ml-4">
            <h4 className="text-primary-dark text-lg font-semibold">{title}</h4>
            <p className="text-primary-light">${price}</p>
            <button
            onClick={()=> dispatch(removeItem(id))}
            className="lowercase font-semibold text-sm tracking-widest text-primary cursor-pointer">Remove</button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button className="cursor-pointer"
          onClick={()=>{ dispatch(increaseItem({id}))}}>
            <BiChevronUp size={25} className="text-primary"/>
          </button>
          <span className="text-lg">{amount}</span>
          <button
          
          onClick={()=>{ 
            if(amount === 1){
            dispatch(removeItem(id))
            return
          }
            dispatch(decreaseItem({id}))}}
          className="cursor-pointer">
            <BiChevronDown size={25} className="text-primary"/>
          </button>
        </div>
    </article>
  )
}

export default CartItem
