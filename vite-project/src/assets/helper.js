import axios from "axios"

class APIHelper{
    constructor () {
        this.baseURl = 'http://127.0.0.1:8000/api'
    }

    get(endpoint, params){
        try{
            axios.get(`${this.baseURl}/${endpoint}`, params).then((response) => {
                return response
            }).catch((err) => {
                return `${err}`
            })
        }
        catch(err){
            throw 500; 
        }
    }

    post(endpoint, data, error){
        try{
            axios.post(`${this.baseURl}/${endpoint}`, data).then((response) => {
                return response
            }).catch((err) => {
                return `${err}`
            })
        }
        catch(err){
            throw 500; 
        }
    }
}

export default APIHelper