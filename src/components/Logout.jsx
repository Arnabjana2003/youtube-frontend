import React from 'react'
import userApi from '../api/userApi'
import { useDispatch } from 'react-redux'
import { logout } from '../store/authSlice'

function Logout() {
    const dispatch = useDispatch()
    const handleClick = async()=>{
        userApi.logout()
        .then(()=>dispatch(logout()))
        .catch(err=>console.log("Louout err:",err))
    }
  return (
    <div onClick={handleClick}>Logout</div>
  )
}

export default Logout