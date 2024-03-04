import React from 'react'
import userApi from '../api/userApi'
import { useDispatch } from 'react-redux'
import { logout } from '../store/authSlice'

function Logout() {
    const dispatch = useDispatch()
    const handleClick = async()=>{
        userApi.logout()
        .then(()=>dispatch(logout()))
        .catch(err=>alert("Louout error:",err.response.data.error))
    }
  return (
    <div onClick={handleClick}>Logout</div>
  )
}

export default Logout