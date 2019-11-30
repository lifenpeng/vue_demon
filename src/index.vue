<template>
    <div>
        <div class="home">
            <Head />  
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

import Head from './components/common_head';

export default {
    name:'index',
    components:{
        Head
    },
    data:()=>{
        return {

        }
    },
    methods:{
        
    }
}
</script>

<style lang="less" scoped>
.home {
    width: 100%;
    height: 100%;
}
.main {
    width: 960px;
    height: auto;
    margin: 0 auto;
}
</style>