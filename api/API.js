import axios from 'axios'
const origin = "https://utility-backend-app.herokuapp.com"
/* const origin = "http://localhost:4000" */

const setHeader = (token)=>{
    return {
      headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ token
              }
    }
}

const API = {};

API.updateProfile = async (data, token)=>{
    return await axios.post(`${origin}/update/profile`, data, setHeader(token));
}

API.addTip = async (data, token)=>{
    return await axios.post(`${origin}/add/tips`, data, setHeader(token));
}

API.findProfile = async (token)=>{
    return await axios.get(`${origin}/find/profile`, setHeader(token));
}

API.findTip = async (token)=>{
    return await axios.get(`${origin}/find/tips`, setHeader(token));
}

API.signin = async (data) => {
    
    return await axios.post(`${origin}/users/signin`, data, setHeader());
}

API.signup = async (data) => {
    return await axios.post(`${origin}/users/signup`, data, setHeader());
}

API.token = async (token) => {
    return await axios.get(`${origin}/auth`, setHeader(token))
}

API.occupation = async (data, token) => {
    return await axios.post(`${origin}/update/profile/occupation`, data, setHeader(token))
}

API.status = async (data, token) => {    return await axios.post(`${origin}/update/profile/status`, data, setHeader(token))
}

API.stripe = async (token) => {
    return await axios.get(`${origin}/stripe`, setHeader(token))
}

API.stripeupdate = async (data, token) => {
    return await axios.post(`${origin}/stripe/update`, data, setHeader(token))
}

API.stripeadd = async (data, token) => {
    return await axios.post(`${origin}/stripe/add`, data, setHeader(token))
}

API.addPost = async (data, token) => {
    return await axios.post(`${origin}/add/post`, data, setHeader(token))
}

API.findPost = async (token) => {
    return await axios.get(`${origin}/find/post`, setHeader(token))
}

API.specialProfile = async (data, token) => {
    return await axios.post(`${origin}/find/special`, data, setHeader(token))
}

API.specialTips = async (data, token) => {
    return await axios.post(`${origin}/find/special/tips`, data, setHeader(token))
}

API.deletePost = async (data, token) => {
    return await axios.post(`${origin}/delete/post`, data, setHeader(token))
}

API.updateFirst = async (data, token) => {
    return await axios.post(`${origin}/update/first`, data, setHeader(token))
}

API.uploadPic = async (data, token) => {

    return await axios.post(`${origin}/upload`, data, setHeader(token))
}

API.updatePic = async (data, token) => {
    return await axios.post(`${origin}/update/pic`, data, setHeader(token))
}




export default API;