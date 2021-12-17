import axios from 'axios'

const origin = process.env.origin

const setHeader = (token)=>{
    return {
      headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ token,
                'X-Content-Type-Options': 'nosniff'
                
              }
    }
}

const API = {};

API.signin = async (data) => {
    
    return await axios.post(`${origin}/users/login`, data, setHeader());
}

API.signup = async (data) => {
    return await axios.post(`${origin}/users/register`, data, setHeader());
}

API.token = async (token) => {
    return await axios.get(`${origin}/auth`, setHeader(token))
}

API.getAll = async (token) => {
    return await axios.get(`${origin}/find`, setHeader(token))
}

API.db = async (token, data) => {
    return await axios.post(`${origin}/add/db`, data, setHeader(token))
}

API.download = async (token, data) => {
    return await axios.post(`${origin}/find/download`, data, setHeader(token))
}


API.upload = async (token, data) => {
    const Header = (token)=>{
        return {
          headers:{
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer '+ token
                  }
        }
    }
    console.log(data)
    return axios.post(`${origin}/add`, data, Header(token))
}




export default API;