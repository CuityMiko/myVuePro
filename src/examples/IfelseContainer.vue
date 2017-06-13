<style>

</style>

<template>
    <div>
        <div v-if="num==1">
            <h1>字体大小</h1>
            <p>h1好多文字...</p>
            <div>h1字体这么大...</div>
        </div>
        <div v-else-if="num==2">
            <h2>字体大小</h2>
            <p>h2好多文字...</p>
            <div>h2字体这么大...</div>
        </div>
        <div v-else-if="num==3">
            <h3>字体大小</h3>
            <p>h3好多文字...</p>
            <div>h3字体这么大...</div>
        </div>
        <div v-else-if="num==4">
            <h4>字体大小</h4>
            <p>h4好多文字...</p>
            <div>h4字体这么大...</div>
        </div>
        <div v-else-if="num==5">
            <h5>字体大小</h5>
            <p>h5好多文字...</p>
            <div>h5字体这么大...</div>
        </div>
        <div v-else>
            <div>默认字体大小</div>
            <p>默认好多文字...</p>
            <div>默认字体这么大...</div>
        </div>
        <p>
            <input type="number" v-model="num">
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            num:0
        }
    }
}
</script>
