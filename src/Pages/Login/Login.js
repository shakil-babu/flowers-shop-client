import React, { useContext } from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config.js';
import Navbar from '../../Components/Navbar/Navbar';
import icon from '../../images/icons/google.png';
import './Login.css';
import { UserContext } from '../../App.js';
import { useHistory, useLocation } from 'react-router';

const Login = () => {

    // userInfo
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    // firebase intialize
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    // google sign in
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email} 
            setLoggedInUser(signedInUser);
            history.replace(from);
            // ...
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    return (
        <>
            <Navbar/>
            <section className="login-main-area">
                <button onClick={handleGoogleSignIn} className="continue-with-google">
                    <img src={icon} alt="icon"/>
                    <h4>Continue with Google</h4>

                </button>
            </section>   
        </>
    )
}

export default Login
