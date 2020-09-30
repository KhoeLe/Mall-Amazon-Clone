import axios from "axios"

const instance = axios.create({
    // baseURL:'http://localhost:5001/louisle-mall/us-central1/api' localhost to function firebase 
    baseURL:'https://us-central1-louisle-mall.cloudfunctions.net/api'
     // the API (Cloud function) URL
})
export default instance;