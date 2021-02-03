import React, { useState } from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';


const Auth = () => {
    const [ showLogin, setShowLogin ] = useState(true);

    function handltToggle(){
        // if (showLogin) {
        //     setShowLogin(false);
        // } else {
        //     setShowLogin(true);
        // }

        setShowLogin(!showLogin);
    }

    return ( 
        <div>
            {showLogin === true ? <Login /> : <Signup />}
            <button onClick={handltToggle}>Click To Toggle</button>
        </div>
    );
};

export default Auth;