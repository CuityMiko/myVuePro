<style>

</style>

<template>
    <div>
        <ol >
            <li v-for="(todo,index) in todos">{{todo.name}}   <button :index="index" :name="todo.name" :id="todo.id" v-on:click="todelete">删除</button></li>
        </ol>
    </div>
</template>

<script>
export default {
    data(){
        return{
            todos:[
                {id:1,name:'足球'},
                {id:2,name:'篮球'},
                {id:3,name:'排球'},
                {id:4,name:'台球'},
                {id:5,name:'网球'}
            ]
        }
    },
    methods:{
        todelete(event){  
            let _index=parseInt(event.target.getAttribute("index"));
            this.todos.splice(_index,1);          
            console.log(event.target.getAttribute("id"));
            console.log(event.target.getAttribute("name"));
        }
    }
}
</script>
