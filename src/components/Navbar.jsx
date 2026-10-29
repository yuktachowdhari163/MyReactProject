import React, { useState } from "react"
import { Link } from "react-router-dom"
import Searchbar from "./Searchbar"
import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux"

export default function Navbar({ search, setSearch }) {
  const cartItems = useSelector(state => state.cart.items);
  const totalQty = cartItems.reduce(
    (prev,item) => prev + item.quantity,
    0
  )
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">ShopSmart</a> */}
          {/* <a className="navbar-brand" href="#">ShopSmart</a> */}
            <span style={{ color: "black", fontWeight: "bold" }}>Shop</span>
            <span style={{ color: "#0d6efd", fontWeight: "bold" }}>Smart</span>
        

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>Products</Link>
              </li>
                
    

            </ul>
            <form className="d-flex " role="search">
              <input value={search} 
                onChange={(e) => setSearch(e.target.value)} className="form-control me-2" type="search" placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit"> Search </button>
            </form> */}
            <div className="flex-grow-1 mx-4">
              <Searchbar search={search} setSearch={setSearch} />
            </div>
            <Link className="position-relative" to={"/cart"}> <FaShoppingCart size={30}/>
            {
              totalQty > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{fontSize: "12px"}}>
                  {totalQty}
                </span>
              )
            }
            
            </Link>
           
          </div>
        </div>
      </nav>
    </div>
  )
}