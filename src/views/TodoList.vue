<template>
    <div>
        <h1>Todo List</h1>

        <!-- <TodoForm @newTodo="addTodo" /> 如果需要在里面加入slot的内容，需要把形式改成下面的样子
            它显示的是TodoForm.vue的 template 里的内容-->
        <TodoForm @newTodo="addTodo">
            <!-- TodoForm.vue里添加的slot，必须包含在这个 TodoForm 里面 -->
            <h2 slot="title">Add a Todo</h2>
            <p slot="desc">Your Todos will be saved</p>
            <!-- <h3>woshishui</h3> -->
        </TodoForm>

        <Todo :todos="todoList" @removeTodo="appDeleteTodo"/>
    </div>
</template>

<script>
// 用 @ 可以直接进入要找的文件夹，不需要用 ../ 只类的方式
import Todo from "@/components/Todo.vue";
import TodoForm from "@/components/TodoForm.vue";
import axios from 'axios';

export default {
    data(){
        return{
            // todoList:["Walk the dog", "Go for a ride"]
            todoList:[]
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
            axios.put(
            "https://vue-and-axios.firebaseio.com/data.json",
            this.todoList
      );
        },
        addTodo(todo){
            this.todoList.push(todo);

            // import axios to make api calls
            axios 
            // 链接到firebase，进入data.json, 加载todoList
            .put("https://xie00053-vue-and-axios.firebaseio.com/data.json", this.todoList)
            // 检测如果 .put 通过的话，运行.then
            .then(response => {
                console.log(response);
                console.log("Your data was saved status:" + response.status)
            })
            // 检测如果 .put 没有通过的话，运行.catch
            .catch(erro => {
                console.log(error);
            })
        }
    },

    // created is a life cycle hook which will run when the instance is created
    created() {
        
    // here we are making a GET request using AXIOS to get the data
    axios
      .get("https://xie00053-vue-and-axios.firebaseio.com/data.json")
      .then(response => {
        // console.log(response);
        // console.log(response.data);
        // Checking if the response has some data
        if (response.data) {
          this.todoList = response.data;
        }
      })
      .catch(error => {
        console.log("There was an error in getting data: " + error.response);
      });
  }
};
</script>

<style scoped>
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

