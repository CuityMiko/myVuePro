<style>
    .childc{
        display: flex;
        flex-direction: row;
        height: 100%;
        justify-content: center;
        align-content: center;
    }
</style>

<template>
    <div class="childc">
        <el-date-picker
        v-model="date"
        align="left"
        type="date"
        placeholder="选择日期"
        format="yyyy年MM月dd日"
        :picker-options="pickerOptions"
        >
        </el-date-picker>
        <el-button @click="sendpdata">告诉父级日期</el-button>
    </div>
</template>

<script>
import dateformat from 'date-format'
export default {
    data(){
        return {
            date:'',
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                }
            },
        }
    },
    methods:{
        sendpdata(){
            // console.log(dateformat("yyyy年MM月dd日",this.date));
            //console.log(new Date())
            this.$root.bus.$emit('cdata',dateformat('yyyy-MM-dd',this.date));
        }
    }
}
</script>


