<template>
    <div>
        <h1>Todo List</h1>
        <Todo :todos="todolist"/>
    </div>
</template>

<script>
// 用 @ 可以直接进入要找的文件夹，不需要用 ../ 只类的方式
import Todo from "@/components/Todo.vue";
export default {
    data(){
        return{
            todolist:["Walk the dog", "Go for a ride"]
        };
    },
    components: {
        Todo
    }
};
</script>
