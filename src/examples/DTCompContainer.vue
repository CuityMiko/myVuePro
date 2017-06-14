<style>

</style>

<template>
    <div>
        切换组件：
        <select v-model="selval">
            <option value="home">home</option>
            <option value="index">index</option>
            <option value="about">about</option>
        </select>
        <hr/>
        <components v-bind:is="selval"></components>
    </div>
</template>

<script>
import AComponent from '../components/AComponent.vue'
import BComponent from '../components/BComponent.vue'
import CComponent from '../components/CComponent.vue'
export default {
    data(){
        return{
            selval:'home'
        }
    },
    components:{
        "home":AComponent,
        "index":BComponent,
        "about":CComponent
    },
    methods:{
        
    }
}
</script>
