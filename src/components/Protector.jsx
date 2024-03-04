import React, { useEffect } from 'react'
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"

function Protector({authentication = false,children}) {
    const authStatus = useSelector(state=>state.auth.authStatus)
    const navigate = useNavigate()
    useEffect(()=>{
        if(authentication && !authStatus){
          navigate("/login")
        }
        else if(!authentication && authStatus) {
          navigate("/")
        }
    })
  return (
    <div>
        {children}
    </div>
  )
}

export default Protector