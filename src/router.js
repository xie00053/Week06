import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import TodoList from "./views/TodoList.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  // 这里的routes为array，每个object是一个页面
  routes: [
    { 
      // 这里的path和name可以定义为任何名字，
      path: "/",
      name: "home",
      component: Home
    },
    { 
      // 使用 alias 给 about 页面定义了两个 path， 两者都可以用。
      path: "/about",
      name: "about",
      component:About,
      alias:'/company-info'
    },

    { 
      //如果用户收藏的是path “/about-us”,但是在app里更改了path 为 “about”，那么下面的方法能够让用户重新链接到页面。
      path:"/about-us",
      redirect: {
        name:'about'
      }
    },

    { 
      path: "/todo-list",
      name: "todo-list",
      component:TodoList,
    },


  ]
});
