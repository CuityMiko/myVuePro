<style>
    body{
        margin: 0px;
    }
    a{
        text-decoration:none;
    }
    .footer{
        border: 1px solid #D3D3D3;
        background-color: #D3D3D3;
        width:100%; 
        position:relative; 
        left:0; 
        bottom:0;
        height: 50px;
        display: flex;
        justify-content:center;
        align-items:Center; 
    }
</style>

<template>
    <div >
        <el-menu default-active="1" theme="dark" style="text-align: center" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-row>
                <el-col :span="12" :offset="7">
                    <el-menu-item index="1">
                        <router-link to="/home">首 页</router-link>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <router-link to="/about">关于我们</router-link>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <el-input
                            placeholder="搜索..."
                            icon="search"
                            v-model="search"
                            size="samll"
                            :on-icon-click="tosearch">
                        </el-input>
                    </el-menu-item>
                </el-col>
            </el-row>
        </el-menu>
        <el-row>
            <el-col :span="3">
                <el-menu default-active="1-2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-menu"></i>电影列表</template>
                        <el-menu-item-group>
                            <!--<template slot="title">电影榜单</template>-->
                            <el-menu-item index="1-1"><i class="el-icon-time"></i>
                                <router-link to='/movie/in_theaters'>正在热映</router-link>
                            </el-menu-item>
                            <el-menu-item index="1-2"><i class="el-icon-upload"></i>
                                <router-link to='/movie/coming_soon'>即将上映</router-link>
                            </el-menu-item>
                            <el-menu-item index="1-3"><i class="el-icon-star-on"></i>
                                <router-link to='/movie/top250'>TOP250</router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <!--<el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>-->
                </el-menu>
            </el-col>
            <el-col :span="19" :offset="1">
                <!--中间内容部分-->
                <router-view></router-view>
            </el-col>
        </el-row>
        <footer class="footer">
            <div>© 2017 GitHub, Inc.</div>
        </footer>
    </div>
</template>

<script>
export default {
    data(){
        return{
            activeIndex:1,
            search:''
        }
    },
    methods: {
      handleSelect(key, keyPath) {

      },
      tosearch(){
          console.log(this.search)
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
