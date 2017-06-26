<style>
</style>

<template>
    <div>
        <h3>Animate.css动画</h3>
        <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
            <div v-show="todh" transition='myh1'>
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
            todh:true
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


