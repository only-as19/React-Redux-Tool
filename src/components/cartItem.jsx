import { BiChevronDown, BiChevronUp } from "react-icons/bi"
const CartItem = ({id, img, amount, price, title}) => {
  return (
    <article>
        <img src={img} alt={title} />
        <div>
            <h2>{title}</h2>
            <p>${price}</p>
            <button>Remove</button>
        </div>
        <div>
          <button><BiChevronUp /></button>
          <span>{amount}</span>
          <button><BiChevronDown /></button>
        </div>
    </article>
  )
}

export default CartItem
