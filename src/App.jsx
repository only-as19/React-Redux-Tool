import { useEffect } from "react"
import { Navbar, CartContainer,Modal } from "./components"
import { useSelector, useDispatch } from "react-redux"
import { totalAmount } from "./features/cart/cartSlice"
const App = () => {
  const {cartItems} = useSelector(state=> state.cart)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(totalAmount())
  },[cartItems])
  return (
    <div className=''>
      <Modal />
      <Navbar />
      <CartContainer/>
    </div>
  )
}

export default App
 