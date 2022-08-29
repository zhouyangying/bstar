<template>
  <div id="root">
    <!-- <HelloWorld style="z-index: 11;"></HelloWorld> -->

    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo" :todos="todos" style="z-index: 20;"></MyHeader>
        <MyList
          :todos="todos"
          :checkTodo="checkTodo"
          :deleteTodo="deleteTodo"
        ></MyList>
        <MyFooter
          :todos="todos"
          :checkAllTodo="checkAllTodo"
          :clearAllTodo="clearAllTodo"
        >
        </MyFooter>
        
        
      </div>
    </div>
<button @click="btnToTop" style="width:50px;height:50px;"></button>
  </div>
  <Modal :modals="modals"></Modal>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Modal from "./components/Modal.vue"


export default {
  name: "App",
  components: {  MyHeader,MyList,MyFooter, HelloWorld, Modal,  },
  data() {
    return {
      todos: [
        { id: "1", title: "抽烟", done: true },
        { id: "2", title: "喝酒", done: false },
        { id: "3", title: "开车", done: true },
      ],
      modals:{title:"这是标题",body:"这是文本",type:"1"}
    };
  },
  methods: {
    //添加todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    btnToTop() {
       var timer = setInterval(function () {
          let osTop = document.documentElement.scrollTop || document.body.scrollTop;
          let ispeed = Math.floor(-osTop / 5);
          document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
          this.isTop = true;
          console.log(document.documentElement.scrollTop);
          console.log(document.body.scrollTop);
          if (osTop === 0) {
            clearInterval(timer);
          }
        }, 10)
    },
    //勾选或取消勾选一个todo
    checkTodo(id) {
      //遍历todo
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    //全选或全不选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    //清除所有已完成todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
};
</script>

<style>
</style>

