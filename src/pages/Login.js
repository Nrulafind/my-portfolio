import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../firebase';
import { useNavigate, useNavigated } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const q = query(collection(db, "admins"), where("email", "==", email));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                alert('Akses Ditolak, anda bukan administrator')
                return;
            }
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/admin');
        } catch (error) {
            alert(error.message);
        }
    };


    return (
        <div className='login-container'>
            <h1>Login</h1>
            <input
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;