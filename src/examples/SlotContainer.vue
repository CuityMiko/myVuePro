<style>
    .child{
        border: 1px solid #ccc;
        padding: 11px;
        margin: 11px;
    }
</style>

<template>
    <div class="child">
        <h3>Slot的使用</h3>
        <hr/>
        <div>
            <slot name="header"></slot>
        </div>
        <slot title='首页'></slot>
        <div>
            <h1>中间内容部分</h1>
        </div>
        <div>
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    props:[
        
    ],
    methods:{
        
    },
    mounted(){
        
    }
}
</script>
