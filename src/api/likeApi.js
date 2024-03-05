import axios from 'axios'

class LikeApi{
    likeVideo = async(videoId)=>{
        try{
            return await axios.post(`https://youtubebackend-one.vercel.app/api/v1/like/likevideo`,{
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