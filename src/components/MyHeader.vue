<template>
  <div class="todo-header">
    <input
      type="text"
      v-model="title"
      @keyup.enter="add"
      class="write-input"
    />
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  data() {
    return {
      title: "",
    };
  },
  props: ["addTodo", "todos"],
  //接收从App传递过来的addTodo
  methods: {
    add() {
      //校验数据
      const uid = (this.todos.length + 1).toString();
      if (!this.title.trim()) {
        return alert("输入不能为空");
      }
      //将用户输入生成一个对象
      const todoObj = { id: uid, title: this.title};
      //将新生成的对象传给App
      this.addTodo(todoObj);
      this.title = "";
      this.close();
    },
  },
};
</script>

<style scoped>
.write-input {
  width: 100%;
  height: 50px;
  border: 1px solid #00a1d6;
  border-radius: 2px;
  align-items: flex-start;
}
</style>
