<template>
    <div @click='click'>
        home
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name:'home',
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