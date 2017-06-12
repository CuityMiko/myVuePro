// 项目入口文件
import Vue from 'vue'
import AppContainer from '../containers/AppContainer.vue'

const app =new Vue({
    render:h=>h(AppContainer)
}).$mount("#app")