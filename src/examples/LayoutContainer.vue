<style>

</style>

<template>
    <div>
        <myslot>
            <div slot="header">
                <h3>头部导航栏</h3>
            </div>
            <div slot="footer">
                <h3>尾部状态栏</h3>
            </div>
            <template scope="props1">
                <div>
                    {{props1.title}}
                </div>
            </template>
        </myslot>
    </div>
</template>

<script>
import SlotContainer  from './SlotContainer.vue'
export default {
    data(){
        return{

        }
    },
    components:{
        "myslot":SlotContainer
    }
}
</script>
