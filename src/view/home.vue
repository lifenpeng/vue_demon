<template>
    <div @click='click'>
        home
        <router-view></router-view>
    </div>
</template>

<script>

import api from '../api/login_api';
import local from '../common/localStorage';
export default {
    name:'home',
    created:()=>{
        api.login({
            username:'lifenpeng',
            password:'1170275451'
        }).then((res)=>{
            local.set(res.data);
        })
    },
    data:()=>{
        return {

        }
    },
    methods:{
        click(){
            this.$router.push('/children');
        }
    }
}
</script>