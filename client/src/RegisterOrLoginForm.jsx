import axios from 'axios';
import React, { useContext, useState } from 'react'
import {UserContext} from './UserContext'
function RegisterOrLoginForm() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [isLoginOrRegister,setIsLoginOrRegister]= useState('login');
    const {setUsername:setLoggedInUsername,setId}= useContext(UserContext);
    const handleSubmit =async (e)=>{
        e.preventDefault();
        const url = isLoginOrRegister =='register'?'register':'login';
        console.log(username,password);
     const {data}=await axios.post(url,{username,password});
     setLoggedInUsername(username);
     setId(data.id)
   }
  return (
    <div className='bg-blue-200 h-screen flex items-center'>
        <form className='w-64 mx-auto' onSubmit={handleSubmit}>
            <input type='text' value={username}  onChange={((e)=> setUsername(e.target.value))}placeholder='Username' className='block w-full p-2 m-4 border'></input>
            <input type='password'value={password}  onChange={((e)=> setPassword(e.target.value))} placeholder='Password' className='block w-full p-2 m-4 border'></input>
            <button className='bg-blue-500 text-white block w-full p-2 m-4 mt-2'>  {isLoginOrRegister === 'register' ? 'Register' : 'Login'}</button>
            <div className="text-center mt-2">
          {isLoginOrRegister === 'register' && (
            <div>
              Already a member?
              <button className="ml-1" onClick={() => setIsLoginOrRegister('login')}>
                Login here
              </button>
            </div>
          )}
          {isLoginOrRegister === 'login' && (
            <div>
              Dont have an account?
              <button className="ml-1" onClick={() => setIsLoginOrRegister('register')}>
                Register
              </button>
            </div>
          )}
        </div>
        </form>
    </div>

  )
}

export default RegisterOrLoginForm;