import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css';
import notFound from '../../images/icons/404.svg';
const NotFound = () => {
    return (
        <>
            <section className="notfound-area">
                <img src={notFound} alt="img"/>
                <Link className='gotohome' to='/'>Go to home</Link>
            </section>   
        </>
    )
}

export default NotFound
