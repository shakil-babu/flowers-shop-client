import React, {useContext, useState } from 'react'
import {AiOutlineAlignRight} from 'react-icons/ai';
import {GiCrossedSabres} from 'react-icons/gi';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
const Navbar = () => {
    const [isbar, setIsbar] = useState(true);

    const toggleBar = () => {
        setIsbar(!isbar);
    }

    const activeDesign = {
        color:'#363958',
        borderBottom:'2px solid #363958'
    }

    // from context
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const signOut = () => {
      setLoggedInUser({});
  }

    return (
        <>
            <nav className="nav-main-area">
                <div className="container">
                <div className="nav-flex">
                    <Link style={{textDecoration:'none'}} to='/'><h3>Flowers Vision</h3></Link>

                    <div className="nav-items Nav-Items">
                        <NavLink activeStyle={activeDesign} exact className='nav-link' to='/'>Home</NavLink>
                        <NavLink activeStyle={activeDesign} className='nav-link' to='/orders'>Orders</NavLink>
                        <NavLink activeStyle={activeDesign} className='nav-link' to='/admin'>Admin</NavLink>
                        <NavLink activeStyle={activeDesign} className='nav-link' to='/deals'>Deals</NavLink>
                        {loggedInUser.email ? (
                            <button onClick={signOut} className="logout">
                                Sign out
                            </button>
                        ) : (
                            <NavLink style={{textDecoration:'none'}}  className='login-btn' to='/login'>Login</NavLink>
                        )}
                         {loggedInUser.name && <h5 style={{marginLeft:'5px'}}>{loggedInUser.name}</h5>}
                    </div>

                    <div className="nav-bar-and-cross">
                        {
                            isbar ? <li><AiOutlineAlignRight onClick={toggleBar} className='nav-item-icon'/></li> : <li><GiCrossedSabres  onClick={toggleBar}className='nav-item-icon'/></li>
                        }
                        
                    </div>
                </div>

                    {!isbar && <div className="nav-items mobile-nav">
                        <NavLink activeStyle={activeDesign} exact className='nav-link' to='/'>Home</NavLink>
                        <NavLink activeStyle={activeDesign} className='nav-link' to='/orders'>Orders</NavLink>
                        <NavLink activeStyle={activeDesign} className='nav-link' to='/admin'>Admin</NavLink>
                        <NavLink activeStyle={activeDesign} className='nav-link' to='/deals'>Deals</NavLink>
                        {loggedInUser.email ? (
                            <button onClick={signOut} className="logout">
                                Sign out
                            </button>
                        ) : (
                            <NavLink style={{textDecoration:'none'}}  className='login-btn' to='/login'>Login</NavLink>
                        )}
                         {loggedInUser.name && <h5 style={{marginLeft:'5px'}}>{loggedInUser.name}</h5>}
                    </div>}
                </div>
            </nav>   
        </>
    )
}

export default Navbar
