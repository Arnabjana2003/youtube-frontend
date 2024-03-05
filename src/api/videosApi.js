import axios from "axios"

class VideosApi{
    getAllVideos = async ()=>{
        try {
            const allVideos = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/video/all`)
            if(!allVideos) return false;
            return allVideos.data;
        } catch (error) {
            console.log("ERROR AT VIDEOSAPI:: ",error.message);
            throw error.message
        }
    }

    playVideo = async(videoId)=>{
        try {
            const videoData = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/video/${videoId}`)
            return videoData.data;
        } catch (error) {
            console.log("ERROR AT VIDEOSAPI:: ",error.message);
            throw error
        }
    }

    getSuggestedVideos = async (channelId)=>{
        try{
            const suggestedVideos = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/video/suggestedvideos/${channelId}`)
            return suggestedVideos.data;
        }catch (error) {
            console.log("ERROR AT VIDEOSAPI:: ",error.message);
            throw error
        }
    }

    getChannelVideos = async (channelId)=>{
        try {
            const videos = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/video/getvideos/${channelId}`)
            return videos.data
        } catch (error) {
            console.log("ERROR AT VIDEOSAPI:: ",error.message);
            throw error
        }
    }
    uploadVideo = async (formData)=>{
        try {
            const videos = await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/video/upload`,formData)
            return videos.data
        } catch (error) {
            console.log("ERROR AT VIDEOSAPI:: ",error.message);
            throw error
        }
    }
    getSerchVideoSuggestion = async (query)=>{
        try {
            const lists = await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/video/searchsuggestion`,{query})
            return lists.data
        } catch (error) {
            console.log("ERROR AT VIDEOSAPI:: ",error.message);
            throw error
        }
    }
    searchVideo = async (query="demo user1")=>{
        try {
            const lists = await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/video/search?q=${query}`)
            console.log(lists.data);
            return lists.data
        } catch (error) {
            console.log("ERROR AT VIDEOSAPI:: ",error.message);
            throw error
        }
    }
}

const videosApi = new VideosApi();
export default videosApi;