<template>
  <div style="display:flex">
    <ul class="todo-main">
      <MyItem
        v-for="todoObj in todos"
        :key="todoObj.id"
        :todo="todoObj"
        :checkTodo="checkTodo"
        :deleteTodo="deleteTodo"
      ></MyItem>
    </ul>
  </div>
</template>

<script>
import MyItem from "./MyItem";

export default {
  name: "MyList",
  components: { MyItem },
  props: ["todos"], //接收
};
</script>

<style scoped>
.todo-main {
  padding: 0;
}

</style>
