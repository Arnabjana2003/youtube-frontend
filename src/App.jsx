import { Outlet } from "react-router-dom"
import userApi from "./api/userApi"
import { useEffect, useState } from "react"
import {useDispatch} from "react-redux"
import {login, logout} from "./store/authSlice.js"
import Logo from "./components/Logo.jsx"
import Loader from "./components/Loader.jsx"

function App() {
  const dispatch = useDispatch()
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    userApi.getCurrentUser()
    .then((res)=>dispatch(login(res.data)))
    .catch(()=>dispatch(logout()))
    .finally(()=>setLoading(false))
  },[])
  return (
    <div className=" max-w-screen min-h-screen overflow-x-hidden">
      
    {loading?<Loader><Logo/></Loader>:<Outlet/>}
    </div>
  )
}

export default App
