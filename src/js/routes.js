import AppContainer from '../containers/AppContainer.vue'
import HomeContainer from '../containers/HomeContainer.vue'
import MovieContainer from '../containers/MovieContainer.vue'
import MovieListContainer from '../containers/MovieListContainer.vue'
import MovieDetailContainer from '../containers/MovieDetailContainer.vue'
// import AboutContainer from '../containers/AboutContainer.vue'
// 实现页面加载的时候异步加载文件
const AboutContainer = r => require.ensure([], () => r(require('../containers/AboutContainer.vue')), 'about')
import NoFindContainer from '../containers/NoFindContainer.vue'
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default[
    {
        path:'/home',
        component:HomeContainer,
        components:{
            default: HomeContainer,
            header: HeaderComponent,
            footer: FooterComponent
        }
    },
    {
        path:'/movie',component:MovieContainer,
        beforeEnter: (to, from, next) => { // 单个路由的导航钩子
            next();
        },
        children:[
            {path:'',component:MovieListContainer}, // 设置默认页面
            {path:':type/:page/:q',component:MovieListContainer},
            {path:'detail/:id',component:MovieDetailContainer}
        ]
    },
    {path:'/about/:name*',component:AboutContainer},
    {path:'/',redirect:'/home'}, // 如果路由为/的时候跳转到/home路由
    {path:'*',component:NoFindContainer} // 此配置要放在最下面，如果没有匹配到路由则404
]