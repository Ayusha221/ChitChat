import React, { useContext } from 'react'
import RegisterOrLoginForm from './RegisterOrLoginForm'
import { UserContext } from './UserContext'
import Chat from './Chat';

function Routes() {
    const {username,id} =useContext(UserContext);
    if(username)return <Chat/>
  return (
   <RegisterOrLoginForm></RegisterOrLoginForm>
  )
}

export default Routes