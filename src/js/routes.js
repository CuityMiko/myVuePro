import AppContainer from '../containers/AppContainer.vue'
import HomeContainer from '../containers/HomeContainer.vue'
import MovieContainer from '../containers/MovieContainer.vue'
import MovieDetailContainer from '../containers/MovieDetailContainer.vue'
import AboutContainer from '../containers/AboutContainer.vue'
import NoFindContainer from '../containers/NoFindContainer.vue'

export default[
    {path:'/home',component:HomeContainer},
    {path:'/movie',component:MovieContainer},
    {path:'/moviedetail/:id',component:MovieDetailContainer},
    {path:'/about',component:AboutContainer},
    {path:'/',redirect:'/home'}, // 如果路由为/的时候跳转到/home路由
    {path:'*',component:NoFindContainer} // 此配置要放在最下面，如果没有匹配到路由则404
]