<style>

</style>

<template>
    <div>
        <input type="text" v-model="fname" placeholder="姓..">
        <input type="text" v-model="lname" placeholder="名..">
        <p>
            姓名：{{fullname}}
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg:'hello vue',
            fname:'zhang',
            lname:'san'
        }
    },
    methods:{

    },
    computed:{ // 计算属性,计算属性可以缓存，只有当里面的属性值变化的时候计算属性才会变化
        fullname(){
            return `${this.fname} ${this.lname}`;
        }
    }
}
</script>
