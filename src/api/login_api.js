import post from '../common/axios';

export default {
    login(data){
        return post('login',data)
    }
}
