import React, { useState } from "react";
import Logo from "./Logo.jsx"
import videosApi from "../api/videosApi.js";
import { useDispatch } from "react-redux";
import {updateVideoList} from "../store/videosSlice.js"
import { useNavigate } from "react-router-dom";

function Header() {
  let prevTimeOut;
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [suggestions,setSuggestions] = useState("")
  const [showSuggestion,setShowSuggestion] = useState(false)
  const debounced = (callback,params)=>{
    setSuggestions(params.target.value)
    if(prevTimeOut) clearTimeout(prevTimeOut)
    prevTimeOut = setTimeout(callback,2000,params)
  }
  const handleSearchSuggestion = (e)=>{
    if(e.target.value == "") return setShowSuggestion(false)
    videosApi.getSerchVideoSuggestion(e.target.value)
    .then(res=>setShowSuggestion(res.data))
  }
  const handleSearch = (q)=>{
    console.log("query:",q)
    videosApi.searchVideo(q)
    .then((res)=>{
      setSuggestions(q)
      setShowSuggestion(false)
      dispatch(updateVideoList(res.data))
      navigate("/videos/result")
    })
  }
  return (
    <div className="fixed z-10">
      <header className="fixed max-w-full  flex justify-between items-center p-2 bg-white right-0 left-0 top-0 shadow-sm">
        <div className="font-bold text-red-500">
          <Logo/>
        </div>
        <div className="relative" >
          <input className=" border rounded-xl pl-1 sm:pl-2 sm:p-1 md:pl-3 md:w-[50vw] lg:w-[40vw] shadow-sm" type="text" placeholder="search" onChange={(e)=>debounced(handleSearchSuggestion,e)} value={suggestions}/>
          <button className="ml-2"></button>
          {showSuggestion && <div className="fixed md:block md:absolute right-0 left-0 top-10  bg-slate-100 shadow-md w-full h-[100vh] md:h-[40vh] overflow-y-auto md:rounded-md p-3">
            <ul className=" truncate">
              {showSuggestion.map((item,index)=>(<div key={index}><li onClick={()=>handleSearch(item.title)} className="mt-2 cursor-pointer">{item.title}</li><li onClick={()=>handleSearch(item.userName)} className="mt-2 cursor-pointer">{item.userName}</li></div>))}
            </ul>
            {!showSuggestion.length && <p className="text-center">No content found</p>}
          </div>}
        </div>
      </header>
    </div>
  );
}

export default Header;
