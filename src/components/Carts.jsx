import { useDispatch, useSelector} from "react-redux"
import { clearCart } from "../utils/cartSlice"
import { useNavigate } from "react-router-dom"
import { CartItem } from "./CartItem"

export const Carts=()=>{
    const dispatch=useDispatch()
    const cartItems=useSelector((store)=>store.cart.items)
    const navigate=useNavigate()

    const handleClearCart=()=>{
        dispatch(clearCart())
    }

    const handlePlaceOrder=()=>{
        dispatch(clearCart())
        navigate("/thanks")
    }

    return (
      <div className="cart-parent-container flex justify-center items-center">
        <div className="child-cart-container flex flex-col">
          <div className="item-cart-container flex flex-wrap">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
          <div className="flex justify-center items-center m-2">
            <button
              onClick={() => handleClearCart()}
              className="ml-2 p-2 bg-red-300 hover:bg-red-200 rounded-lg cursor-pointer"
            >
              Clear
            </button>
            <button
              onClick={() => handlePlaceOrder()}
              className="ml-2 p-2 bg-green-300 hover:bg-green-200 rounded-lg cursor-pointer"
            >
              Place Order
            </button>
          </div>
        </div>
        <div className="blank-space"></div>
      </div>
    );
}