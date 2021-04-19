import React, { useState } from 'react'
import './Sidebar.css';
import {AiOutlineAppstoreAdd, AiOutlinePlus} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import AddFlower from '../AddFlower/AddFlower';
import Manage from '../ManageFlower/Manage';
const Sidebar = () => {
    const [action, setAction] = useState({
        manage:true,
        add:false
    })

    // for manage
    const manageHandler = () => {
        setAction({
            manage:true,
            add:false
        })
    }

    // for add

    const addHandler = () => {
        setAction({
            manage:false,
            add:true
        })
    }
    return (
        <>
            <section className="sidebar-main-area">

                <div className="sidebar-left-main-part">
                    <h1>Flowers Vision</h1>

                    <div onClick = {manageHandler} className={action.manage ? 'action-flex bg':'action-flex'}>
                        <AiOutlineAppstoreAdd className='action-icon'/>
                        <p>Manage Flowers</p>
                    </div>
                    <div onClick={addHandler} className={action.add ? 'action-flex bg':'action-flex'}>
                        <AiOutlinePlus className='action-icon'/>
                        <p>Add Flower</p>
                    </div>
                    
                </div>

                <div className="all-info-part">
                    <div className="appbar">
                        <h2> {action.add ? 'Add Flower': 'Manage Flowers'} </h2>
                        <Link className='book-link' to='/'><button className='search-btn'>Go to home</button></Link>
                    </div>
                    
                    <div className="info-main-part-here">
                        {
                            action.manage ? (
                                <Manage/>
                            ):(
                                <div className="">
                                    <AddFlower/>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section> 

             
        </>
    )
}

export default Sidebar
