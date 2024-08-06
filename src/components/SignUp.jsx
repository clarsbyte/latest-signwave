import auth from '../firebase/firebase'
import { useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
  } from "firebase/auth";export default function SignUp(){
    const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [username, setUsername] = useState("");

        const handleSignUp = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((authUser) => {
            signInWithEmailAndPassword(auth, email, password).then(
            updateProfile(auth.currentUser, {
            displayName: username,
          })
        );
      })
      .catch((err) => {
        alert(err);
      });
  };
    return (
        
        <div className="rounded-xl w-2/5 flex-1 absolute h-2/4 bg-dark items-center left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 ">
            <form action="" className='flex-1 flex-row m-auto items-center content-center'>
                <h2 className="text-white text-3xl flex-1 font-mono font-bold text-center">Sign Up</h2>
                <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email} className='flex w-2/4 h-fit m-auto items-center content-center'
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="email"
        placeholder="Username"
        value={username} className='flex w-2/4 h-fit m-auto'
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password} className='flex w-2/4 h-fit m-auto'
      />
      <button className='flex m-auto items-center content-center text-center' onClick={handleSignUp}>Sign up</button>
            </form>
        </div>
    )
}

