import axios from "axios"

class VideosApi{
    getAllVideos = async ()=>{
        try {
            const allVideos = await axios.get("https://youtubebackend-one.vercel.app/api/v1/video/all")
            if(!allVideos) return false;
            return allVideos.data;
        } catch (error) {
            console.log("ERROR AT VIDEOSAPI:: ",error.message);
            throw error.message
        }
    }

    playVideo = async(videoId)=>{
        try {
            const videoData = await axios.get(`https://youtubebackend-one.vercel.app/api/v1/video/${videoId}`)
            return videoData.data;
        } catch (error) {
            console.log("ERROR AT VIDEOSAPI:: ",error.message);
            throw error
        }
    }

    getSuggestedVideos = async (channelId)=>{
        try{
            const suggestedVideos = await axios.get(`https://youtubebackend-one.vercel.app/api/v1/video/suggestedvideos/${channelId}`)
            return suggestedVideos.data;
        }catch (error) {
            console.log("ERROR AT VIDEOSAPI:: ",error.message);
            throw error
        }
    }

    getChannelVideos = async (channelId)=>{
        try {
            const videos = await axios.get(`https://youtubebackend-one.vercel.app/api/v1/video/getvideos/${channelId}`)
            return videos.data
        } catch (error) {
            console.log("ERROR AT VIDEOSAPI:: ",error.message);
            throw error
        }
    }
    uploadVideo = async (formData)=>{
        try {
            const videos = await axios.post(`https://youtubebackend-one.vercel.app/api/v1/video/uploadvideo`,formData)
            return videos.data
        } catch (error) {
            console.log("ERROR AT VIDEOSAPI:: ",error.message);
            throw error
        }
    }
}

const videosApi = new VideosApi();
export default videosApi;