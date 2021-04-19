import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import './Orders.css';
const Orders = () => {
    // from context
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // ordered flowers
    const [orderdFlowers, setOrderdFlowers] = useState([]);

    // fetch order info
    useEffect(() => {
        fetch('https://flowers-vision-server.herokuapp.com/ordersInfo?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrderdFlowers(data))
    }, [])
    return (
        <>
            <Navbar/>
            <section className="orders-area">
                <div className="container">
                    <div className="line-flex">
                        <div className="line"></div>
                        <h3>Hey, {loggedInUser.name}</h3>
                        <div className="line"></div>
                    </div>
                    <h3>You have {orderdFlowers.length > 0 ? orderdFlowers.length + ' Orders.' : '0 Order.'}</h3>

                <div className="orders-card-area">
                    {
                        orderdFlowers.map((item) => {
                            return (
                                <div className="order-area-card">
                                    <div className="flex-card">
                                        <div className="flex-img">
                                            <img src={item.img} alt="img"/>
                                            <div className="flex-img-info">
                                            <h5>{item.productName}</h5>
                                            <h6>Quantity: {item.quantity}</h6>
                                            </div>
                                        </div>
                                        <div className="card-info">
                                            <h4>Price: ${item.price}</h4>
                                            <h4><small>Order date: {item.orderDate.currentTime}</small></h4>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                </div>
            </section>   
        </>
    )
}

export default Orders
