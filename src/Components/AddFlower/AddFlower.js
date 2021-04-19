import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './AddFlower.css';
const AddFlower = () => {
    // flower data from form
    const [flowerDetails, setFlowerDetails] = useState({
        name:'',
        price:'',
        img:''
    })

    // success
    const [success, setSuccess] = useState(false);

    // input blur handler
    const InputBlurHandler = (event) => {
        setFlowerDetails({
            ...flowerDetails,
            [event.target.name]: event.target.value 
        })
    }

   // img handler
   const imgHandler = (event) => {
        const imgData = new FormData();
        imgData.set('key', 'f37421e34678774c38000dc0a5b30021');
        imgData.append('image', event.target.files[0])
        console.log(event.target.files[0]);

        // fetch
        axios.post('https://api.imgbb.com/1/upload', 
        imgData)
        .then(function (response) {
        setFlowerDetails({...flowerDetails, img:response.data.data.display_url})
        console.log(response.data.data.display_url);
        })
        .catch(function (error) {
        console.log(error);
        });

    }
    
    // form submit handler 
    const submitHandler = (event) => {
        event.preventDefault();

        const flowersInfo = {
            name:flowerDetails.name,
            price:flowerDetails.price,
            img:flowerDetails.img
        }

        // post data to database
        fetch(`https://flowers-vision-server.herokuapp.com/addFlowers`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(flowersInfo),
        })
            .then((response) => response.json())
            .then((json) => {
                if(json){
                    setSuccess(true)
                }
            });

            setFlowerDetails({name:'', price:'', img:''})

    }

 useEffect(() => {
    setTimeout(() => {
        setSuccess(false)
    }, 5000);   
 })

    return (
        <>
            <div className="add-flower-area">
                <form onSubmit={submitHandler}>
                    <input onChange={InputBlurHandler} type="text" placeholder='Flower name' name='name' value={flowerDetails.name} />
                    <div className="input-flex">
                        <input onChange={InputBlurHandler} type="number" placeholder='Flower price' name='price' value={flowerDetails.price} />
                        <div className="upload">
                            <p>Upload Flower cover photo</p>
                            <input onChange={imgHandler} type="file" name='img' />
                        </div>
                    </div>
                    {
                        flowerDetails.img ? <button  type='submit' className='save-btn blue'>Save</button> : <button disabled type='submit' className='save-btn gray'>Disabled</button>
                    }
                </form>
                {
                    success && <h4 style={{color:'green'}}>Successfully Inserted!</h4>
                }
            </div>   
        </>
    )
}

export default AddFlower
