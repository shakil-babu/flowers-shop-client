import React from 'react'
import {FaFacebook, FaInstagram, FaGithub} from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
    return (
        <>
            <section className="footer-area">
                <h4>&copy; Copyright by Flowers Vision</h4>
                <div className="social-icons-flex">
                    <FaFacebook className='icon'/>
                    <FaInstagram className='icon'/>
                    <FaGithub className='icon'/>
                </div>
            </section>   
        </>
    )
}

export default Footer
