import axios from "axios"

class UserApi{
    register = async (data)=>{
        try {
            const response = await axios.post("https://youtubebackend-one.vercel.app/api/v1/user/register",data)
            console.log(response.data);
        } catch (error) {
            console.log(error);
            throw error
        }
    }
    login = async(data)=>{
        try {
            const response = await axios.post("https://youtubebackend-one.vercel.app/api/v1/user/login",data)
            return response.data
        } catch (error) {
            console.log(error);
            throw error
        }
    }
    getCurrentUser = async()=>{
        try{
            const res = await axios.post("https://youtubebackend-one.vercel.app/api/v1/user/currentuser")
            return res.data
        }catch(error){
            console.log(error)
            throw error
        }
    }
    logout = async()=>{
        try{
            const res = await axios.post("https://youtubebackend-one.vercel.app/api/v1/user/logout")
            return res.data
        }catch(error){
            throw error
        }
    }

    getChannelInfo = async(channelId)=>{
        try {
            const info = await axios.get(`https://youtubebackend-one.vercel.app/api/v1/user/channel/${channelId}`)
            return info.data
        } catch (error) {
            throw error
        }
    }
}
const userApi = new UserApi()
export default userApi