<template>
  <div id="app">
    <div id="nav">
      <!-- 
      方法1: 通过 “name” 链接router里的数据,如果改变path的名字也不会有影响。
      <router-link :to="{name:'home'}">Home</router-link>
      <router-link :to="{name:'about'}About</router-link> -->
      
      <!-- 方法2: 通过“path” router-link 指示"to" router找到 path, 然后通过 “router-view” 显示-->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/todo-list">Todo List</router-link>
    </div>
    <!-- 用于在vue中显示router代码 -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
