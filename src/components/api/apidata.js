import axios from "axios"


//var url = "http://192.168.0.107:3000"

var url = "https://" + window.location.hostname + "/api"

export default axios.create({
    baseURL: `${url}`,
    headers: {
        'Accept': "application/json",

    },

});





