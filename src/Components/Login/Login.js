import React, { useEffect, useState } from 'react';
import './Login.css';
import auth from '../../Utilities/firebase.init';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';
import { errorMsg } from '../../Utilities/Popup Msg/errorMsg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading, error] = useAuthState(auth);


    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                errorMsg(errorMessage);
                // console.log(error);
            });
    }

    const navigate = useNavigate();
    useEffect(()=>{
        if(user?.email){
            navigate('/adminDashboard');
        }
    },[user])

    return (
        <div className='login-div'>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="" placeholder='Email' id="" onBlur={e => setEmail(e.target.value)} />
                <input type="password" name="" id="" placeholder='Password' onBlur={e => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;