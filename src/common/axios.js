const axios = require('axios');

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(function(config){
    console.log(config);
    if(config.method=='post'){
        config.data.token = '1111111';
    }
    return config;
},function(error){
    console.error(error);
})

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

export default post;
