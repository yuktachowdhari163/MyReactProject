import { useNavigate } from "react-router-dom"
import { addToCart } from "../features/cartSlice"
import { useDispatch } from "react-redux"


export default function ProductCard({ product }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <div className="">
            <div className="card  border-2 border-warning shadow p-3 mb-5 rounded-4" style={{ width: "18rem" }}>
                <img onClick={() => navigate(`/products/${product.id}`)} src={product.thumbnail} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "contain" }} />
                <div className="card-body ">
                    <h5 className="card-title" style={{ height: "48px", overflow: " hidden" }} >{product.title}</h5>
                    <p className="card-text mb-4">₹ {product.price}</p>
                    <div className="d-grid gap-2 col-11 mx-auto ">
                        <button onClick={() => dispatch(addToCart(product))} className="btn btn-outline-primary ">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}