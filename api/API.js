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

API.signin = async (data) => {
    
    return await axios.post(`${origin}/users/signin`, data, setHeader());
}

API.signup = async (data) => {
    return await axios.post(`${origin}/users/signup`, data, setHeader());
}

API.token = async (token) => {
    return await axios.get(`${origin}/auth`, setHeader(token))
}

API.getAll = async (token) => {
    return await axios.get(`${origin}/find`, setHeader(token))
}

API.upload = async (token, data) => {
    return axios.post(`${origin}/add`,data, setHeader(token))
}




export default API;