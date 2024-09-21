import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'; 
import { app } from '../firebase'; 
import { useDispatch } from 'react-redux';
import { signInsuccess } from '../redux/user/UserSlice';
import { useNavigate } from 'react-router-dom';
function OAuth() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider); 
            const res = await fetch('/api/auth/google',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({name:result.user.displayName,email:result.user.email,photo:result.user.photoURL}),
            })
            const data=await res.json();
            dispatch(signInsuccess(data));
            navigate('/')
        } catch (error) {
            console.log('Could not sign in with Google', error);
        }
    };

    return (
        <button
            onClick={handleGoogleClick}
            type='button'
            className='bg-red-700 p-3 text-white rounded-lg uppercase hover:opacity-95'
        >
            Continue with Google
        </button>
    );
}

export default OAuth;
