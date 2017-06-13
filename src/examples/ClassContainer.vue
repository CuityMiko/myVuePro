<style>
    .open{
        color: green;
        font-weight: bold;
    }
    .close{
        color: red;
        font-size: 15px;
    }
</style>

<template>
    <div>
        <p :class="{open:isOpen,close:!isOpen}">{{isOpen?'开启':'关闭'}}</p>
        <p>
            <button @click="OprtOC">{{OorCtxt}}</button>
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isOpen:false,
            OorCtxt:'开启'
        }
    },
    methods:{
        OprtOC(){
            this.isOpen=!this.isOpen;
            if(this.isOpen)
                this.OorCtxt='关闭'
            else
                this.OorCtxt='开启'
        }
    }
}
</script>
