let local = {
    set(obj){
        localStorage.setItem('user_info',JSON.stringify(obj));
    },
    get(){
        return JSON.parse(localStorage.getItem('user_info'));
    },
    clearn(){
        localStorage.setItem('user_info',JSON.stringify({}));
    }
}

export default local;