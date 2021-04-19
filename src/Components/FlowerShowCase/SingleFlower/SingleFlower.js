import React from 'react'
import { Link } from 'react-router-dom';
import './SingleFlower.css';
const SingleFlower = ({flower}) => {
    return (
        <>
            <div className="single-book-card">
                <div className="img-card">
                    <img src={flower.img} alt="book"/>
                </div>

                <h2>{flower.name}</h2>

                <div className="single-book-price-flex">
                    <h1>${flower.price}</h1>
                    <Link style={{textDecoration:'none'}} to={`/checkout/${flower._id}`}><button className="search-btn">Buy Now</button></Link>
                </div>
            </div>  
        </>
    )
}

export default SingleFlower
