<template>
    <div @click='click'>
        home
        <router-view></router-view>
    </div>
</template>

<script>

import api from '../api/login_api';

export default {
    name:'home',
    created:()=>{
        api.login({
            username:'lifenpeng',
            password:'1170275451'
        }).then((res)=>{
            console.log(res);
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