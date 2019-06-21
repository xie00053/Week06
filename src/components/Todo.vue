<template>
    <ul>
        <li v-for="(todo,index) in todos" 
        :key="index"
        @click="todoDone(index)"
        >{{todo}}</li>
    </ul>
</template>

<script>
export default {
    // 添加props方式1: 
    // props: ['todos']
    // 方法2: 给props添加条件，比如这里要求props的内容必须是array,
    props: {
        todos:{
            type: Array,
            required: true,
        }
    },

    // 在component里，parents 用props 传信息给children, 反过来 children 通过 method 将信息传送给 parent。
    methods: {
        todoDone(index) {
            console.log(index);
            // week6, $emit a child component to parent
            this.$emit("removeTodo", index)
        }
    }
}
</script>



