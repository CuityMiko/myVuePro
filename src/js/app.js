// 项目入口文件
import Vue from 'vue'
import AppContainer from '../containers/AppContainer.vue'

// 组件的生命周期
import LeftContainer from '../examples/LeftContainer.vue'

// 模板的使用
import TemplateContainer from '../examples/TemplateContainer.vue'

const app =new Vue({
    render:h=>h(TemplateContainer)
}).$mount("#app")
