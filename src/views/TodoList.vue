<template>
    <div>
        <h1>Todo List</h1>
        <!-- <TodoForm @newTodo="addTodo" /> 如果需要在里面加入slot的内容，需要把形式改成下面的样子
            它显示的是TodoForm.vue的 template 里的内容-->
        <TodoForm @newTodo="addTodo">
            <!-- TodoForm.vue里添加的slot，必须包含在这个 TodoForm 里面 -->
            <h2 slot="title">Add a Todo</h2>
            <p slot="desc">Your Todos will be saved</p>
            <h3>woshishui</h3>
        </TodoForm>
        <Todo :todos="todoList" @removeTodo="appDeleteTodo"/>
    </div>
</template>

<script>
// 用 @ 可以直接进入要找的文件夹，不需要用 ../ 只类的方式
import Todo from "@/components/Todo.vue";
import TodoForm from "@/components/TodoForm.vue";

export default {
    data(){
        return{
            todoList:["Walk the dog", "Go for a ride"]
        };
    },
    components: {
        Todo,
        TodoForm
    },
    methods: {
        appDeleteTodo(index) {
            // 每次删除一个list
            this.todoList.splice(index, 1);
        },
        addTodo(todo){
            this.todoList.push(todo);
        }
    }
};
</script>

<style>
ul{
    list-style: none;
    width: 50%;
    margin: 0 auto;
}

ul li {
        border-bottom:1px solid blue;
        padding:10px 0;
        margin-bottom: 10px;
    }
</style>

