import React, { useState, useEffect } from "react"
import axios from "axios"
import ProductCard from "../components/ProductCard"
import Navbar from "../components/Navbar"

export default function Product({search}) {
  const [data, setData] = useState([])
  


  const getData = async () => {
      const response = await axios.get("https://dummyjson.com/products")
      setData(response.data.products)
    } 

  useEffect(() => {
    getData()
  }, [])
if (!data) return <p >Loading...</p>
  const filteredData = data.filter((item) =>{
    return item.title.toLowerCase().includes(search.toLowerCase())
})

  

  return (
    <div className="container ">
      {/* <Navbar search={search} setSearch={setSearch}/> */}

      <div className="row ">
        {
          filteredData.map((item) => (
            <div className="col-md-3 mb-4" key={item.id}>
              <ProductCard product={item} />
            </div>
          ))
        
        }
      </div>
    </div>
  )
}