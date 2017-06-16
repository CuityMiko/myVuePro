/**
 * 路由配置页面
 * 实现页面加载的时候异步加载文件
 */
const HomeContainer = r => require.ensure([], () => r(require('../containers/HomeContainer.vue')), 'home')
const MovieContainer = r => require.ensure([], () => r(require('../containers/MovieContainer.vue')), 'movie')
const MovieDetailContainer = r => require.ensure([], () => r(require('../containers/MovieDetailContainer.vue')), 'moviedetail')
const AboutContainer = r => require.ensure([], () => r(require('../containers/AboutContainer.vue')), 'about')
const NoFindContainer = r => require.ensure([], () => r(require('../containers/NoFindContainer.vue')), '404')

export default[
    {
        path:'/home',
        component:HomeContainer,
        beforeEnter: (to, from, next) => { // 单个路由的导航钩子
            next();
        }
    },
    {
        path:'/movie/:type',
        component:MovieContainer,
        // children:[
        //     {path:'detail/:id',component:MovieDetailContainer}
        // ]
    },
    {path:'/movie/detail/:id',component:MovieDetailContainer},
    {path:'/about',component:AboutContainer},
    {path:'/',redirect:'/home'}, // 如果路由为/的时候跳转到/home路由
    {path:'*',component:NoFindContainer} // 此配置要放在最下面，如果没有匹配到路由则404
]