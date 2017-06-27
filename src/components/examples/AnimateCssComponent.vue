<style>
</style>

<template>
    <div>
        <h3>Animate.css动画</h3>
        <!--transition-group 是针对多个元素标签进行动画的，transition只能针对一个标签-->
        <input type="text" v-model.trim="search">
        <transition-group enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
            <div v-for="(stu,index) in students" :key="index">
                <h1>{{stu}}</h1>
            </div>
        </transition-group>
        <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
            <div v-show="todh">
                <h1>Animate.css</h1>
            </div>
        </transition>
        <el-button type="success" @click='donghua'>动画</el-button>
    </div>
</template>

<script>
import '../../bower_components/animate.css/animate.css'
export default {
    data(){
        return{
            todh:true,
            student:['张三','赵四','王三','赵六'],
            search:''
        }
    },
    computed:{
        students(){
            let _list=[];
            let that=this;
            that.student.forEach((item)=>{
                if(that.search.length>0 && item.indexOf(that.search)>-1){
                    _list.push(item);
                }
            });
            return _list;
        }
    },
    methods:{
        donghua(){
            this.todh=!this.todh;
        }
    } 
    // transitions:{ // 此种方式vue2.0不推荐使用，vue2.0推荐使用<transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight"></transition>的方式
    //     myh1:{
    //         enterClass:'bounceInLeft', // 进入时的动画
    //         leaveClass:'bounceOutRight'  // 离开时的动画
    //     }
    // }
}
</script>


