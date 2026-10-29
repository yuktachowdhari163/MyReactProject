import React from "react"
import { useDispatch,useSelector } from "react-redux"
import {decreaseQty, increaseQty, removeCart} from '../features/CartSlice'



export default function Cart() {
const items = useSelector((state) => state.cart.items)
const dispatch = useDispatch();
const total = items.reduce((prev,item)=> prev + item.price * item.quantity, 0)

if(items.length === 0) {
    return<h3>Cart is empty</h3>
}

    return(
        <div className="container">
            <h2 className="text-center">Cart</h2>
            <div className="border border-2 p-4 rounded">
            {
                items.map((item) => (
                    <div key={item.id}>

                        <h4>{item.title}</h4>
                        <p>Price: {item.price}</p>
                        <p>Qty:{item.quantity}</p>

                        <div className="d-flex gap-3">
                        <button className="btn btn-success px-3" onClick={() => dispatch(increaseQty(item.id))}>+</button>
                        <button className="btn btn-warning px-3"onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                        <button className="btn btn-danger" onClick={() => dispatch(removeCart(item.id))}>Remove</button>
                        </div>
                        </div>
                      
                )
            )
            }
            <h3 className="my-4">total:${total}</h3>
        </div>
          </div>
    )
}