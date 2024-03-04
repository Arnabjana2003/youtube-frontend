import React, { useRef, useState } from "react";
import DragAndDrop from "../components/DragAndDrop.jsx";
import UploadBar from "../components/UploadBar.jsx";
import videosApi from "../api/videosApi";
import { setUploadingStatus } from "../store/uploadingStatusSlice";
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";

function UploadVideoPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const btnRef = useRef(null)
  const [videoFile, setVideoFile] = useState(null);
  const defaultFormData = {
    title:"",
    description:"",
    isPublished:true,
    thumbnail:"",
    category:""
  }
  const [formData,setFormData] = useState(defaultFormData)
  const getFile = (file) => {
    if (!file) return;
    setVideoFile(file);
  };

  const handleUpload = (e)=>{
    e.preventDefault()
    if(!formData.category){
      alert("Select your video category")
      return;
    }
    btnRef.current.disabled = true;
    dispatch(setUploadingStatus(true))
    navigate("/")
    const form = new FormData()
    const keys = Object.keys(formData)
    const values = Object.values(formData)
    keys.forEach((key,index)=>{
      form.append(key,values[index])
    })
    form.append("videoFile",videoFile)
    
    videosApi.uploadVideo(form)
    .then(data=>{
      alert("Video is uploaded successfully")
      setFormData(defaultFormData)
    })
    .catch((err)=>{
      console.log("Video upload error:",err);
      alert("Video upload failed")
    })
    .finally(()=>{
      btnRef.current.disabled = true;
     dispatch(setUploadingStatus(false))
    })
  }
  return (
    <div className="w-full p-3">
      <UploadBar/>
      {!videoFile && (
        <div className="flex w-full h-screen justify-center items-center">
          <DragAndDrop getFile={getFile} />
        </div>
      )}
      {videoFile && <form type="POST" onSubmit={handleUpload}>
        <label className="font-semibold">Selected file: {videoFile.name}</label>

        <label htmlFor="thumbnail" className="mt-4 block font-semibold">Thumbnail</label>
        <input id="thumbnail" name="thumbnail" type="file" accept="image/*" className="w-full md:max-w-md outline-none border px-2 md:p-2 rounded-md" onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.files[0]})} required/>

        <label htmlFor="title" className="mt-4 block font-semibold">Title</label>
        <input id="title" name="title" type="text" placeholder="Video Title" className="w-full md:max-w-md outline-none border px-2 md:p-2 rounded-md" value={formData.title} onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} maxLength={20} required={true}/>

        <label htmlFor="description" className="mt-4 block font-semibold">Description</label>
        <textarea id="description" name="description" type="text" placeholder="Video description" className="w-full md:max-w-md outline-none border px-2 md:p-2 rounded-md" value={formData.description} onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} maxLength={200} rows={5} required/>

        <label className="mt-4 block font-semibold">Privacy</label>
        <label htmlFor="public">Public</label><input id="public" name="isPublished" type="radio" value={"public"} onChange={(e)=>setFormData({...formData,isPublished:true})} checked={formData["isPublished"]===true} className=""/>

        <label htmlFor="private" className="ml-5">Private</label><input id="private" name="isPublished" type="radio" value={"private"} onChange={(e)=>setFormData({...formData,isPublished:false})} checked={formData["isPublished"]===false} className=""/>

        <label htmlFor="category" className="mt-4 block font-semibold">Category</label>
        <select onChange={(e)=>setFormData({...formData,category:e.target.value})} className="border p-2 rounded-md">
          <option value={null}>Select</option>
          <option value={"entertainment"}>Entertainment</option>
          <option value={"education"}>Education</option>
          <option value={"gaming"}>Gaming</option>
          <option value={"music"}>Music</option>
          <option value={"creative"}>Creative</option>
        </select>
        <br/>
        <button type="submit" ref={btnRef} className="px-3 py-2 bg-purple-700 rounded-md block disabled:bg-purple-300">Upload</button>
        </form>}
    </div>
  );
}

export default UploadVideoPage;
