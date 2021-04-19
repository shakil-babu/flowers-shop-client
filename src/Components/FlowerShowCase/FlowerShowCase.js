import React, { useContext, useEffect, useState } from 'react'
import './FlowerShowCase.css';
import {FiSearch} from 'react-icons/fi';
import SingleFlower from './SingleFlower/SingleFlower';
import { flowersContext } from '../../App';
import spin from '../../images/icons/spinner.svg';
const FlowerShowCase = () => {
    const [flowersInformation, setFlowersInformation] = useContext(flowersContext);
    const [spinner , setSpinner] = useState(true);

    const fetchFlowers = () => {
        fetch('https://flowers-vision-server.herokuapp.com/flowersInfo')
        .then(res => res.json())
        .then(data => {
            setFlowersInformation(data)
            setSpinner(false)
        })
    }

    useEffect(() => {
        fetchFlowers();
    }, [])


    return (
        <>
            <section className="flower-showcase-main-area">
                <div className="container">
                    <div className="search-main-area">
                        <div className="input-and-icon">
                        <FiSearch className='search-icon'/>
                        <input type="text" placeholder='Search Flower'/>
                        </div>
                        <button className='search-btn'>Search</button>
                    </div>



                    {
                        spinner ? (
                            <div className="spinner-area">
                                <img src={spin} alt="img"/>
                            </div>
                        ):(
                           
                             <div className="flower-grid-layout">
                                {
                                    flowersInformation.map((flower) => <SingleFlower key={flower._id}  flower={flower} />)
                                }
                             </div>
                        )
                    }
                </div>
            </section>   
        </>
    )
}

export default FlowerShowCase
