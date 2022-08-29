<template>
  <div class="ask-replay">
    <div class="up-container">
      <div class="up-left">
        <div class="up-photo">
          <img src="../assets/up-photo.png" class="up-head-photo" />
        </div>
        <div class="up-title">
          <div class="up-name">小周真不喝粥</div>
          <div class="up-fans">粉丝：2 文章：3</div>
        </div>
      </div>
      <div class="up-right">+ 关注</div>
    </div>
    <div>
      <label>
        <span>{{ todo.title }}</span>
      </label>
    </div>
    <div class="repaly-container">
      <div class="replay">评论</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyItem",
  //声明接收todo对象
  props: ["todo", "checkTodo", "deleteTodo"],
};
</script>

<style scoped>
.ask-replay {
  width: 500px;
  background: #fff;
  padding: 20px 40px 20px;
  margin: 10px 40px 10px;
  flex-wrap: nowrap;
  border-radius: 5px;
}
.up-container {
  display: flex;
  justify-content: space-between;
  height: 44px;
}
.up-left {
  display: flex;
  height: 32px;
}
.up-photo {
  width: 32px;
  height: 32px;
}
.up-head-photo {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.up-title {
  margin-left: 10px;
}
.up-name {
  color: #212121;
  font-size: 10px;
}
.up-fans {
  color: #999;
  line-height: 20px;
}
.up-right {
  width: 100px;
  height: 30px;
  background: #00a1d6;
  color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.replay {
  width: 60px;
  height: 20px;
  background: #00a1d6;
  color: #fff;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.repaly-container{
  width: 100%;
  margin: 10px 5px 0px 0px;
  display: flex;
  justify-content: flex-end;
}
</style>
