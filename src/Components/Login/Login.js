import React, { useState } from 'react' ;
import './Login.css' ; 
import auth from '../../Utilities/firebase.init';

const Login = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault() ; 
        console.log(email, password) ;
    }

    console.log(auth.currentUser);
    
    return (
        <div className='login-div'>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="" placeholder='Email' id="" onBlur={e => setEmail(e.target.value)}/>
                <input type="password" name="" id="" placeholder='Password' onBlur={e => setPassword(e.target.value)}/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;