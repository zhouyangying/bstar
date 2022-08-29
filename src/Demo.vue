<template>
  <div>
    <div class="ask-container-box">
      <div class="ask-container">
        <div class="ask-container-content">
          <div class="title-container">
            <h1 style="font-size: 28px">我是标题</h1>
            <div class="title-info">
              <span style="margin-right: 10px">时间</span>
              <span style="margin-right: 10px">回答</span>
              <span style="margin-right: 10px"
                >评论：{{ this.todos.length }}</span
              >
              <span style="margin-right: 10px">阅读</span>
            </div>
            <div class="ask-button">
              <div class="ask-button-see">关注回答</div>
              <div class="ask-button-write" @click="writeAsk">写个回答吧</div>
              <div class="ask-button-invite">邀请回答</div>
            </div>
            <div v-if="showWriteInput" class="ask-button-write-input">
              <MyHeader
                :addTodo="addTodo"
                :todos="todos"
                :close="close"
              ></MyHeader>
              <div class="input-button" @click="close">关闭</div>
            </div>
          </div>
          <div class="up-container">
            <div class="up-left">
              <div class="up-photo">
                <img src="./assets/up-photo.png" class="up-head-photo" />
              </div>
              <div class="up-title">
                <div class="up-name">小周真不喝粥</div>
                <div class="up-fans">粉丝：2 文章：3</div>
              </div>
            </div>
            <div class="up-right">+ 关注</div>
          </div>
          <div class="title-line"></div>
          <div class="ask-info">
            <!-- <img
            src="//uat-i0.hdslb.com/bfs/openplatform/202108/Serqi4wG1628756980375.png@400h_70q_progressive.jpg"
          /> -->
          </div>
          <div class="title-line"></div>
        </div>
      </div>
      <MyList :todos="todos"></MyList>
      <Modal :modals="modals"></Modal>
      <div v-show="show" class="totop" @click="btnToTop">回到顶部</div>
    </div>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
export default {
  name: "Demo",
  components: { Modal, MyHeader, MyList },
  data() {
    return {
      show: true,
      content: "",
      todos: [
        { id: "1", title: "摸鱼无罪" },
        { id: "2", title: "躺平万岁" },
        { id: "3", title: "2233" },
      ],
      showWriteInput: false,
      modals: { title: "这是标题", body: "这是文本", type: "0" },
    };
  },
  methods: {
    handleScroll() {
      // console.log(this.scrollingElement.scrollY)
      this.show =(document.documentElement.scrollTop || document.body.scrollTop) > 300;
      console.log(this.show);
    },
    writeAsk() {
      this.showWriteInput = true;
    },
    close() {
      this.showWriteInput = false;
    },
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    btnToTop() {
      var timer = setInterval(function () {
        let osTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + ispeed;
        this.isTop = true;
        console.log(document.documentElement.scrollTop);
        console.log(document.body.scrollTop);
        if (osTop === 0) {
          clearInterval(timer);
        }
      }, 10);
    },
  },
};
</script>

<style scoped>
.ask-container-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #9999991c;
  width: 100%;
  height: 100%;
}
.ask-container {
  width: 500px;
  display: flex;
  background: #fff;
  padding: 10px 40px 40px;
  margin: 30px 40px 0px;
  border-radius: 5px;
}
.title-line {
  height: 1px;
  width: 100%;
  background: hsla(0, 0%, 59.2%, 0.21);
}
.ask-other {
  width: 500px;
  background: #fff;
  padding: 30px 40px 40px;
  margin: 10px 40px 10px;
  flex-wrap: nowrap;
  border-radius: 5px;
}
.ask-replay {
  width: 500px;
  background: #fff;
  padding: 30px 40px 40px;
  margin: 10px 40px 10px;
  flex-wrap: nowrap;
  border-radius: 5px;
}
.ask-container-content {
  width: 100%;
  margin-bottom: 16px;
}
.ask-info {
  margin-top: 20px;
  margin-bottom: 20px;
}
.ask-button {
  display: flex;
  margin: 10px 0 10px 0;
}
.ask-button-see {
  width: 60px;
  height: 20px;
  background: #00a1d6;
  color: #fff;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
}
.ask-button-write {
  width: 60px;
  height: 20px;
  background: #00a1d6;
  color: #fff;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
}
.ask-button-write-input {
  margin: 0 0 16px 0;
}
.input-button {
  width: 60px;
  height: 20px;
  border-radius: 2px;
  background-color: #00a1d6;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0 0 0;
}
.ask-button-invite {
  width: 60px;
  height: 20px;
  background: #00a1d6;
  color: #fff;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.write-input {
  width: 100%;
  height: 200px;
  border-style: solid;
  border-color: #00a1d6;
  border-radius: 2px;
  align-items: flex-start;
}
.title-info {
  color: #999;
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
.hidden {
  display: none;
}
.totop {
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  width: 60px;
  height: 20px;
  background: #00a1d6;
  color: #fff;
  border-radius: 2px;
  display: flex;
  margin-left: 85%;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 25px;
}

.footer {
  width: 10px;
  height: 30px;
  background: #fff;
  position: fixed;
}
</style>