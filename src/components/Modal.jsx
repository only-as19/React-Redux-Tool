import { useDispatch } from "react-redux"
import { clearCart } from "../features/cart/cartSlice"
import {CloseModal} from "../features/Modal/modalSlice"

const Modal = () => {

  const dispatch = useDispatch()

  return (
    <aside className="bg-[rgba(0,0,0,0.75)] h-full w-full fixed top-0 left-0 z-20 flex justify-center items-center">
        <div className="bg-white rounded-lg p-5 text-center w-[90vw] max-w-[400px]">
            <h4 className="text-lg font-bold text-primary-dark">Remove all items from your shopping cart?</h4>
            <div className="flex justify-center gap-x-4 mt-4">
                <button 
                onClick={()=>
                {
                  dispatch(clearCart())
                  dispatch(CloseModal())
                }
                }
                className="uppercase font-semibold tracking-widest border-2 border-primary px-2 py-0.5 rounded-sm text-primary hover:bg-primary-light hover:text-primary-dark hover:border-primary-dark transition-color duration-200 cursor-pointer">confirm</button>
                <button 
                onClick={()=>dispatch(CloseModal())}
                className="uppercase font-semibold tracking-widest border-2 border-red-dark px-2 py-0.5 rounded-sm text-red-dark  transition-color duration-200 cursor-pointer">cancel</button>
            </div>
        </div>
    </aside>
  )
}

export default Modal
