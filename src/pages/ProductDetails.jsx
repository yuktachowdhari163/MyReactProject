import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../features/cartSlice';
import Slider from 'react-slick';
const SlickSlider = Slider.default || Slider
export default function ProductDetails() {
    const [data, setData] = useState(null);
    const { id } = useParams();
    const disPatch = useDispatch()
    const getData = async () => {
        const response = await axios.get(`https://dummyjson.com/products/${id}`)
        setData(response.data)
    }
    useEffect(() => {
        getData()
    }, [id])

    if (!data) return <p>Loading...</p>

    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
    };
    return (
        <div className='container '>
            <div className="d-flex align-items-center" style={{ width: "100%" }}>
                <div className='slider-container  pb-4' style={{ width: "40%" }}>
                    <SlickSlider {...settings}>
                        {
                            data.images.map((item, index) => (
                                <img key={index} src={item} className="card-img-top" alt={data.title} style={{ width: "100%", objectFit: "cover", height: "300px" }} />
                            ))
                        }
                    </SlickSlider>

                </div>
                <div className="card-body w-40 p-3">
                    <h5 className="card-title fs-1 fw-bold">{data.title}</h5>
                    <p className='card-text pt-2 fs-4'> Ratings:{"⭐".repeat(Math.floor(data.rating))}</p>
                    <p className="card-text fw-bold fs-2"> ₹ {data.price}</p>
                    <hr />
                    <p className="card-text w-75"> <span className='fw-bold'>Description:</span> <br />
                        {data.description}</p>

                    <button href="#" onClick={() => disPatch(addToCart(data))} className="btn btn-primary">Add To cart</button>
                </div>
            </div>
        </div>
    )
}