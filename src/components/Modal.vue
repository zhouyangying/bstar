<template>
  <transition>
    <div class="container" v-if="iShow">
      <div class="title">{{ modals.title }}</div>
      <div class="body">{{ modals.body }}</div>
      <div class="modal-footer">
        <div class="modal-button" @click="close">
          <div>{{ btnText }}</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Modal",
  props: ["modals"],
  data() {
    return {
      iShow: false,
      btnText: "",
    };
  },
  mounted() {
    if (this.modals.type == 1) {
      (this.iShow = true), (this.btnText = "确定");
    }
  },
  methods: {
    close() {
      this.iShow = false;
    },
  },
};
</script>

<style scoped>
.container {
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  display: table-cell;
  top: 50%;
  left: 50%;
  vertical-align: middle;
  transform: translate(-50%, -50%);
  transition: all 0.12s linear;
  border-radius: 10px;
  background-color: #fff;
}
.title {
  text-align: center;
  margin-top: 10px;
}
.body {
  width: 160px;
  margin-top: 5px;
  margin-left: 10px;
  margin-right: 10px;
}
.modal-footer{
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-button {
  width: 60px;
  height: 25px;
  border-radius: 15px;
  background-color: pink;
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>