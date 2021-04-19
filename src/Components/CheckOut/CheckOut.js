import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { flowersContext, UserContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import {FaCheck} from 'react-icons/fa';
import './CheckOut.css';
import { Link } from 'react-router-dom';
const CheckOut = () => {

    const [success, setSuccess] = useState(false)

    // id
    const {id} = useParams();
    const [flowersInformation, setFlowersInformation] = useContext(flowersContext);

    // from context
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // orderInfo
    const CurDate = { currentTime: new Date().toLocaleString() };
    const findData = flowersInformation.find((item) => item._id === id);
    const [orderInfo, setOrderInfo] = useState({
        ...loggedInUser, orderDate:CurDate,
        productName:findData.name, 
        price:findData.price,
        img:findData.img,
        quantity:1

    })

    const submitHandler = () => {
        console.log(orderInfo);
        // post data to database
        fetch(`https://flowers-vision-server.herokuapp.com/addOrder`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(orderInfo),
        })
            .then((response) => response.json())
            .then((json) => {
                if(json){
                    setSuccess(true)
                }
            });
    }
    return (
        <>
            <Navbar/>
            <section className="checkout-main-area">
                <div className="container">
                    <div className="line-flex">
                        <div className="line"></div>
                        <h3>Checkout</h3>
                        <div className="line"></div>
                    </div>

                    <div className="checkout-info">
                        <div className="d-flex border">
                            <h4>Description</h4>
                            <h4>Quantity</h4>
                            <h4>Price</h4>
                        </div>

                        <div className="d-flex border">
                            <h3>{findData?.name}</h3>
                            <h3>1</h3>
                            <h3>${findData?.price}</h3>
                        </div>
                        <div className="d-flex">
                            <h2>Total</h2>
                            <h2>${findData?.price}</h2>
                        </div>
                    </div>

                    {
                        success ? (
                            <div className="flex">
                                <Link style={{textDecoration:'none'}} to ='/orders'><button className="checkout-btn">Go to Orders</button></Link>
                                <button className="orderd-btn"><FaCheck className='icon'/> Ordered</button>
                            </div>
                        ):(
                            <button onClick={submitHandler} className="checkout-btn">Checkout</button>
                        )
                    }
                </div>
            </section>   
        </>
    )
}

export default CheckOut;
