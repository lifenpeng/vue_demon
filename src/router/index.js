
import VueRouter from 'vue-router';

import home from '../view/home';
import show_one from '../view/show_one';
import show_two from '../view/show_two';
import children from '../view/children_view';

const routers = [
    {
        name:'首页',
        path:'/home',
        component: home,
        children:[
            {
                name:'children',
                path:'/children',
                component:children
            }
        ]
    },
    {
        name:'演示1',
        path:'/show_one',
        component:show_one
    },
    {
         name:'演示2',
         path:'/show_two',
         component:show_two               
    },     
    {
        path:'/',
        redirect: '/home'
    }
]

// 解决两次访问相同路由地址报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
    routes: routers
});

export default router;
