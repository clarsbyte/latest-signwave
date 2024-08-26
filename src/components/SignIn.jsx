import { useState } from 'react';
import {ID} from 'appwrite';
import { account } from '../appwrite/config';

  export default function SignUp(){
    const [password, setPassword] = useState()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    
    async function HandleSignUp(event){
      event.preventDefault()
      try{
        await account.create(ID.unique(), email, password, username);
      }catch(err){
        console.log(err)
      }
    }
    
    return (
        <div className='absolute bg-opacity-50 bg-black h-screen w-screen '> 
        <div className="rounded-xl shadow-xl w-2/5 flex-1 absolute h-2/4 bg-dark items-center left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 ">
            <form onSubmit={HandleSignUp} className='flex-1 flex-row m-auto my-3.5 align-middle items-center content-center '>
                <h2 className="text-white text-3xl flex-1 font-mono font-bold text-center">Sign In</h2>
                <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        name="email"
        value={email} className='flex font-DM text-white text-sm w-2/4 h-fit m-auto my-4 p-2 bg-dark border-opacity-80 border-b-2 border-white  items-center content-center'
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        name='password'
        value={password} className='flex font-DM text-white text-sm bg-dark border-b-2 border-white border-opacity-80   w-2/4 h-fit my-4 p-2 m-auto'
      />
      <button type='submit' className='flex font-rubik font-bold m-auto text-white  bg-select p-2  items-center content-center text-center' >Submit</button>
            </form>
        </div></div>
        
    )
}
