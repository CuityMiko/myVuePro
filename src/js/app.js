// 项目入口文件
import Vue from 'vue'

// 组件的生命周期
import LeftContainer from '../examples/LeftContainer.vue'

// 模板的使用
import TemplateContainer from '../examples/TemplateContainer.vue'

// 计算属性的使用
import ComputedContainer from '../examples/ComputedContainer.vue'

// class属性的使用
import ClassContainer from '../examples/ClassContainer.vue'

// Ifelse属性的使用
import IfelseContainer from '../examples/IfelseContainer.vue'

// Event属性的使用
import EventContainer from '../examples/EventContainer.vue'

// Form属性的使用
import FormContainer from '../examples/FormContainer.vue'

// 全局注册组件（要在Vue实例化即new之前注册，该使用方式一般是用在单独的html页面中）
// Vue.component('mycomponent',{
//     template:"\
//         <div>全局自定义注册的组件</div>\
//     "
// })

// 组件的使用
import ComponentContainer from '../examples/ComponentContainer.vue'

// 父子组件的使用
import ParentContainer from '../examples/ParentContainer.vue'

// Slot的使用
import LayoutContainer from '../examples/LayoutContainer.vue'

// 动态组件
import DTCompContainer from '../examples/DTCompContainer.vue'

import AppContainer from '../containers/AppContainer.vue'
// Vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)  // 在Vue中注册VueRouter

import routes from './routes.js' // 引入路由配置文件
const router=new VueRouter({
    // mode: 'history', // 根据HTML5 History API方式将#锚点的方式变成url的方式
    routes // 将路由配置文件配置在VueRouter中，相当于routes:routes的缩写
})

const app =new Vue({
    data:{
        bus:new Vue() // 用过声明一个空的Vue实例作为中央事件总线，从而事件兄弟组件之间的通信
    },
    router, // 将配置后的VueRouter挂载到Vue根实例上，相当于router:router的缩写
    render:h=>h(AppContainer)
}).$mount("#app")
