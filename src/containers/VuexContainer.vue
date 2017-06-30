<style>

</style>

<template>
    <div>
        <h3>{{title}}</h3>
        <el-row>
            <el-col :span="2">
                <el-button icon="plus" type="success" @click="plus"></el-button>
            </el-col>
            <el-col :span="1">
                <strong>{{num}}({{isodd}})</strong>
            </el-col>
            <el-col :span="2">
                <el-button icon="minus" type="warning" @click="minus"></el-button>
            </el-col>
            <el-col :span="2">
                <el-button type="info" @click="evenodd">偶数+奇数-</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
// mapActions:管理所有事件的行为
// mapActions:获取数据(等同于this.$store.state.data)
import {mapActions,mapGetters} from 'vuex'
export default {
    data(){
        return {
            title:'Vuex使用'
        }
    },
    // methods:{
    //     toplus(){ // 加
    //         this.num++;
    //     },
    //     tominus(){ // 减
    //         this.num--;
    //     }
    // },
    methods:mapActions([
        'plus',
        'minus',
        'evenodd'
    ]),
    computed:mapGetters([
        'num',
        'isodd'
    ])
}
</script>


