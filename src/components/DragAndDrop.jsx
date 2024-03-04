import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function DragAndDrop({getFile}) {
    const isUploading = useSelector(state=>state.uploadingStatus.isUploading)
    const chooseFile = ()=>{
        const input = document.querySelector("#inputFile")
        input.click()
    }
    const handleFileChange = (e)=>{
        console.log(e.target.files[0].type);
        if(e.target.files[0].type == "video/mp4" || e.target.files[0].type == "video/webm"){
            getFile(e.target.files[0])
        }else{
            alert("Choose a Mp4 video")
        }
    }
  return (
    <div className='relative m-3 p-3 rounded-lg bg-slate-100 h-40 md:h-72 w-[90vw] md:w-1/2 overflow-hidden flex justify-center items-center shadow-lg'>

        <div className='flex flex-col items-center'>
            Drag and Drop the video


           <button className='px-3 py-2 bg-purple-700 disabled:bg-purple-300 rounded-md mt-3 font-semibold text-white' onClick={chooseFile} disabled={isUploading}>Select Video</button>
            <input accept='video/*' onChange={handleFileChange} id='inputFile' className='hidden' type='file'/>
        </div>
    </div>
  )
}

export default DragAndDrop