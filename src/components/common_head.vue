<template>
    <div class="nav">
        <ul>
            <li v-for="item in nav_list" @click="jump(item.router)" :key="item.name">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'common_head',
    props:{
        list:{
            type:Array,
            default:()=>([
                { name:'首页' , router:'/home' },
                { name:'演示1' , router:'/show_one' },
                { name:'演示2' , router:'/show_two' }
            ])
        }
    },
    data(){
        return {
            nav_list:this.list
        }
    },
    methods:{
        jump:function(url){
            console.log(url);
            this.$router.push({path:url});
        }
    }
}
</script>

<style lang="less" scoped>
    .nav {
        width: 960px;
        height: 60px;
        border: 1px solid #000;
        margin: 0 auto;
        ul {
            width: 100%;
            height: 60px;
            display: block;
            li {
                width: 100px;
                height: 100%;
                font-size: 16px;
                line-height: 60px;
                float: left;
                display: block;
                text-align: center;
                cursor: pointer;
            }
        }
    }
</style>