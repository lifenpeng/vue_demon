const axios = require('axios');
import local from '../common/localStorage';

let setting = process.env.NODE_ENV === 'development'?'/api/':'/';

const post = function(url,data){
    return new Promise(function(resolve,reject){
        axios.post(setting+url,data).then(function(res){
            resolve(res);
        }).catch(function(err){
            reject(err);
        })
    })
}

axios.interceptors.request.use(function(config){
    if(config.method=='post'){
        config.data.token = local.get().token;
    }
    return config;
},function(error){
    console.error(error);
})

axios.interceptors.response.use(function(res){
    if(res.status==200&&res.data.status){
        return res.data;
    }else{
        return Promise.reject(res.data.message);
    }
},function(err){
    return Promise.reject(err);
})


export default post;
