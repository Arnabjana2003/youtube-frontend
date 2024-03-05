import axios from 'axios'

class LikeApi{
    likeVideo = async(videoId)=>{
        try{
            return await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/like/likevideo`,{
                videoId
            })
        }catch(err){
            console.log(err);
            throw err;
        }
    }
}

const likeApi = new LikeApi()
export default likeApi