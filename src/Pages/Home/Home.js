import React from 'react'
import FlowerShowCase from '../../Components/FlowerShowCase/FlowerShowCase'
import Navbar from '../../Components/Navbar/Navbar'

const Home = () => {
    return (
        <>
             <section className="home-area">
                <Navbar/>
                <FlowerShowCase/>
            </section>   
        </>
    )
}

export default Home
