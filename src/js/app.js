// 项目入口文件
import Vue from 'vue'
import AppContainer from '../containers/AppContainer.vue'

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

const app =new Vue({
    render:h=>h(EventContainer)
}).$mount("#app")
