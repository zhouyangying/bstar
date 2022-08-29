<template>
  <div style="width: 100%; height: 812px">
    <div class="header">
      <div class="header-tab" style="position: sticky;top: 0;z-index:10000">
        <div class="left-arrow">
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.21033 18C8.99349 18 8.77666 17.9215 8.61982 17.7674L0.198943 9.45973C-0.0663144 9.19758 -0.0663144 8.8025 0.198943 8.54035L8.61982 0.232695C8.91244 -0.0553036 9.41033 -0.0774573 9.73453 0.174542C10.0608 0.42931 10.0903 0.865923 9.80085 1.15208L1.84522 9.00004L9.80085 16.848C10.0903 17.1342 10.0608 17.5708 9.73453 17.8255C9.58401 17.9428 9.3977 18 9.21033 18Z"
              fill="#757575"
            />
          </svg>
        </div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="search-icon"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.3403 11.2544C8.26194 13.0734 5.12929 12.991 3.14672 11.0084C1.07788 8.93959 1.07788 5.62018 3.14672 3.55134C5.21524 1.48283 8.53465 1.48283 10.6035 3.55167C12.5185 5.46668 12.6606 8.45471 11.029 10.5289L14.0784 13.5783C14.2737 13.7735 14.2737 14.0901 14.0784 14.2854C13.8831 14.4806 13.5666 14.4806 13.3713 14.2854L10.3403 11.2544ZM9.90117 10.3026C11.5783 8.62554 11.578 5.93397 9.90117 4.25714C8.2238 2.57977 5.53251 2.57977 3.85541 4.25687C2.17804 5.93424 2.17804 8.62554 3.85541 10.3029C5.53224 11.9797 8.2238 11.98 9.90117 10.3026Z"
            fill="#CCCCCC"
          />
        </svg>

        <input type="text" class="middle-input" style="text-indent: 30px" />
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="delete"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8ZM10.1282 5.16851C10.3234 4.97325 10.64 4.97325 10.8353 5.16851C11.0306 5.36378 11.0306 5.68036 10.8353 5.87562L8.71397 7.99694L10.8353 10.1183C11.0306 10.3135 11.0306 10.6301 10.8353 10.8254C10.64 11.0206 10.3234 11.0206 10.1282 10.8254L8.00686 8.70405L5.88554 10.8254C5.69028 11.0206 5.3737 11.0206 5.17843 10.8254C4.98317 10.6301 4.98317 10.3135 5.17843 10.1183L7.29975 7.99694L5.17843 5.87562C4.98317 5.68036 4.98317 5.36378 5.17843 5.16852C5.3737 4.97325 5.69028 4.97325 5.88554 5.16852L8.00686 7.28984L10.1282 5.16851Z"
            fill="black"
            fill-opacity="0.2"
          />
        </svg>

        <div class="right-tab">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 1.75C1.864 1.75 1.75 1.864 1.75 2V6C1.75 6.136 1.864 6.25 2 6.25H6C6.136 6.25 6.25 6.136 6.25 6V2C6.25 1.864 6.136 1.75 6 1.75H2ZM6 7.75H2C1.035 7.75 0.25 6.965 0.25 6V2C0.25 1.035 1.035 0.25 2 0.25H6C6.965 0.25 7.75 1.035 7.75 2V6C7.75 6.965 6.965 7.75 6 7.75Z"
              fill="#9499A0"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 11.75C1.864 11.75 1.75 11.864 1.75 12V16C1.75 16.136 1.864 16.25 2 16.25H6C6.136 16.25 6.25 16.136 6.25 16V12C6.25 11.864 6.136 11.75 6 11.75H2ZM6 17.75H2C1.035 17.75 0.25 16.965 0.25 16V12C0.25 11.035 1.035 10.25 2 10.25H6C6.965 10.25 7.75 11.035 7.75 12V16C7.75 16.965 6.965 17.75 6 17.75Z"
              fill="#9499A0"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 6.75H10C9.586 6.75 9.25 6.414 9.25 6C9.25 5.586 9.586 5.25 10 5.25H17C17.414 5.25 17.75 5.586 17.75 6C17.75 6.414 17.414 6.75 17 6.75"
              fill="#9499A0"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 2.75H10C9.586 2.75 9.25 2.414 9.25 2C9.25 1.586 9.586 1.25 10 1.25H17C17.414 1.25 17.75 1.586 17.75 2C17.75 2.414 17.414 2.75 17 2.75"
              fill="#9499A0"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 16.75H10C9.586 16.75 9.25 16.414 9.25 16C9.25 15.586 9.586 15.25 10 15.25H17C17.414 15.25 17.75 15.586 17.75 16C17.75 16.414 17.414 16.75 17 16.75"
              fill="#9499A0"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 12.75H10C9.586 12.75 9.25 12.414 9.25 12C9.25 11.586 9.586 11.25 10 11.25H17C17.414 11.25 17.75 11.586 17.75 12C17.75 12.414 17.414 12.75 17 12.75"
              fill="#9499A0"
            />
          </svg>
        </div>
      </div>
      <div class="nav">
        <div class="nav-goods">商品</div>
        <div class="nav-show">展览演出(30)</div>
        <div class="nav-advance">抢先看</div>
      </div>
      <div class="movie-show">
        <div class="moviebg">
          <img src="../assets/movie.png" alt="" class="movie-photo" />
        </div>
        <div class="movie-title">漫威（Marvel）</div>
        <button class="movie-button">订阅</button>
        <div class="movie-subscribe">订阅后，第一时间知道商品上新</div>
        <div class="movie-subnumber">5384订阅</div>
      </div>
    </div>
    <div class="grid">
      <div class="gird-multiple">综合</div>
      <svg
        width="7"
        height="4"
        viewBox="0 0 7 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="mul-arrow"
      >
        <path d="M3.5 4L7 -1.49012e-08H0L3.5 4Z" fill="#9499A0" />
      </svg>
      <div class="gird-price">价格</div>
      <svg
        width="7"
        height="4"
        viewBox="0 0 7 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="price-uparrow"
      >
        <path d="M3.5 0L7 4H0L3.5 0Z" fill="#FF6699" />
      </svg>
      <svg
        width="7"
        height="4"
        viewBox="0 0 7 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="price-downarrow"
      >
        <path d="M3.5 4L7 0H0L3.5 4Z" fill="#C9CCD0" />
      </svg>
      <div class="gird-new">新品</div>
      <div class="gird-allGoods">全部商品</div>
      <svg
        width="7"
        height="4"
        viewBox="0 0 7 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="all-arrow"
      >
        <path d="M3.5 4L7 0H0L3.5 4Z" fill="#9499A0" />
      </svg>
      <svg
        width="1"
        height="16"
        viewBox="0 0 1 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="vertical-line"
      >
        <rect width="1" height="16" fill="#C4C4C4" />
      </svg>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="gird-filter"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.45483 10.0265L6.54574 10.572V6C6.54574 5.87564 6.58828 5.75564 6.66465 5.65855L10.3192 1.09091H1.68137L5.33592 5.65855C5.41228 5.75564 5.45483 5.87564 5.45483 6V10.0265ZM7.09123 12C7.00723 12 6.92432 11.9804 6.84687 11.9422L4.66505 10.8513C4.48069 10.7585 4.36396 10.5698 4.36396 10.3636V6.19091L0.119233 0.885818C-0.011676 0.722182 -0.036767 0.498545 0.0537785 0.308727C0.145415 0.12 0.336324 0 0.545779 0H11.4549C11.6643 0 11.8552 0.12 11.9469 0.308727C12.0374 0.498545 12.0123 0.722182 11.8814 0.885818L7.63669 6.19091V11.4545C7.63669 11.6422 7.53851 11.8189 7.37814 11.9182C7.29087 11.9716 7.19051 12 7.09123 12Z"
          fill="#9499A0"
        />
      </svg>
    </div>
    <div class="frame">
      <div class="frame-goods">919本命好物节</div>
      <div class="frame-box">星光宝盒</div>
    </div>
    <div class="sprites">
      <div class="sprites-1">
        <div class="sprites-rectangle">
          <img src="../assets/goods1.png" alt="" class="sprites-goods1" />
        </div>
        <div class="content">中动玩具 漫威 钢铁侠MK7成品模型</div>
        <div class="goods-love">手办喜爱度No.5</div>
        <div class="goods-icon" style="top: 248px">¥</div>
        <div class="goods-price" style="top: 244px">119.7</div>
        <div class="goods-want" style="top: 248px">109人想要</div>
      </div>
      <div class="sprites-2">
        <div class="sprites-rectangle">
          <img src="../assets/goods2.png" alt="" class="sprites-goods2" />
        </div>
        <div class="content">寿屋 ARTFX+ 漫威 毒液 革新版 手办</div>
        <div class="goods-icon">¥</div>
        <div class="goods-price">142.06</div>
        <div class="goods-want">2577人想要</div>
      </div>
      <div class="sprites-3">
        <div class="sprites-rectangle">
          <img src="../assets/goods3.png" alt="" class="sprites-goods3" />
        </div>
        <div class="content">中动玩具 漫威 发光钢铁侠MK3 成品模型</div>
        <div class="goods-icon">¥</div>
        <div class="goods-price">88</div>
        <div class="goods-want">2577人想要</div>
      </div>
      <div class="sprites-4">
        <div class="sprites-rectangle">
          <img src="../assets/goods4.png" alt="" class="sprites-goods4" />
        </div>
        <div class="content" style="">中动玩具 漫威 钢铁侠MK7成品模型</div>
        <div class="goods-icon">¥</div>
        <div class="goods-price">199</div>
        <div class="goods-want">2577人想要</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  width: 357px;
  height: 283px;
  background: #ffff;
  position: absolute;
}
.header-tab {
  background: #ffff;
  width: 357px;
  top: 44px;
  height: 44px;
  position: absolute;
  left: 0;
  display: flex;
}
.left-arrow {
  position: absolute;
  left: 18px;
  right: 347px;
  top: 13px;
  bottom: 13px;
  width: 10px;
  height: 18px;
  float: left;
}

.middle-input {
  margin: 0;
  padding: 0;
  border-radius: 15px;
  position: absolute;
  width: 267px;
  height: 30px;
  top: 7px;
  left: 14.4%;
  right: 14.4%;
  background: #f4f4f4;
  border: none;
  z-index: 1;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  /* identical to box height, or 100% */

  color: #212121;
}
.search-icon {
  position: absolute;
  width: 16px;
  height: 16px;
  left: 66.6px;
  right: 299.84px;
  top: 14px;
  z-index: 2;
}
.delete {
  position: absolute;
  width: 16px;
  height: 16px;
  left: 297px;
  right: 9px;
  top: 14px;
  z-index: 2;
}
.right-tab {
  position: absolute;
  width: 17.5px;
  height: 17.5px;
  top: 13.25px;
  left: 341px;
  right: 11px;
  float: right;
}
.nav {
  position: absolute;
  width: 375px;
  height: 38px;
  left: 0px;
  top: 88px;
  background: #ffffff;
  display: flex;
}
.nav-goods {
  flex-wrap: nowrap;
  position: absolute;
  width: 32px;
  height: 16px;
  left: 70px;
  right: 273px;
  top: 10px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #18191c;
  border-bottom: 4px solid #ff6699;
}
.nav-show {
  flex-wrap: nowrap;
  position: absolute;
  height: 14px;
  left: 129px;
  right: 153px;
  top: 12px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 14px;
  /* identical to box height, or 93% */
  text-align: center;
  color: #18191c;
}

.nav-advance {
  flex-wrap: nowrap;
  position: absolute;
  height: 14px;
  width: 93px;
  left: 249px;
  right: 81px;
  top: 12px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 14px;
  /* identical to box height, or 93% */

  color: #18191c;
}
.movie-show {
  position: absolute;
  width: 343px;
  height: 62px;
  top: 132px;
  left: 16px;
  right: 16px;
  background: #f1f2f3;
  border-radius: 4px;
}
.moviebg {
  position: absolute;
  width: 50px;
  height: 50px;
  top: 6px;
  left: 6px;
  right: 287px;
  background: #942e1f;
}
.movie-photo {
  position: absolute;
  height: 38.97058868408203px;
  width: 50px;
  top: 5.88px;
  border-radius: 0px;
}
.movie-title {
  position: absolute;
  width: 101px;
  height: 14px;
  left: 64px;
  right: 178px;
  top: 14px;

  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  /* identical to box height, or 100% */
  text-align: center;

  color: #000000;
}
.movie-button {
  position: absolute;
  left: 275px;
  top: 10px;
  border: none;
  background: linear-gradient(270deg, #e84b85 0%, #ff6699 100%);
  border-radius: 100px;
  width: 56px;
  height: 24px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */
  text-align: center;

  color: #ffffff;
}
.movie-subscribe {
  position: absolute;
  left: 64px;
  top: 36px;
  width: 168px;
  height: 14px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #9499a0;
}
.movie-subnumber {
  position: absolute;
  left: 278px;
  top: 40px;
  width: 53px;
  height: 12px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  /* identical to box height, or 100% */
  text-align: right;

  color: #9499a0;
}
.grid {
  display: flex;
  padding: 0px;
  position: absolute;
  width: 357px;
  height: 38px;
  left: 0px;
  top: 201px;
  background: #ffffff;
}
.gird-multiple {
  flex-wrap: nowrap;
  position: absolute;
  width: 28px;
  height: 14px;
  top: 12px;
  left: 16px;
  right: 331px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  /* identical to box height, or 100% */
  text-align: right;

  color: #61666d;
}
.mul-arrow {
  position: absolute;
  left: 48px;
  top: 17px;
}
.price-uparrow {
  position: absolute;
  left: 123px;
  top: 14px;
}
.price-downarrow {
  position: absolute;
  left: 123px;
  top: 20px;
}
.all-arrow {
  position: absolute;
  left: 288px;
  top: 17px;
}
.vertical-line {
  position: relative;
  left: 330px;
  top: 11px;
}
.gird-new {
  flex-wrap: nowrap;
  position: absolute;
  width: 28px;
  height: 14px;
  top: 12px;
  left: 91px;
  right: 256px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  /* identical to box height, or 100% */
  text-align: right;

  color: #ff6699;
}
.gird-price {
  flex-wrap: nowrap;
  position: absolute;
  width: 28px;
  height: 14px;
  top: 12px;
  left: 165px;
right: 182px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  /* identical to box height, or 100% */
  text-align: right;

  color: #61666d;
}
.gird-allGoods {
  flex-wrap: nowrap;
  position: absolute;
  width: 56px;
  height: 14px;
  top: 12px;
  left: 228px;
right: 91px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  /* identical to box height, or 100% */
  text-align: right;
  color: #61666d;
}
.gird-filter {
  position: absolute;
  left: 347px;
  right: 15px;
  top: 13px;
}
.sprites {
  background: #f5f5f5;
  position: absolute;
  top: 283px;
  width: 100%;
  height: 516px;
  display: flex;
}
.frame {
  position: absolute;
  width: 357px;
  height: 44px;
  top: 239px;
  display: flex;
}
.frame-goods {
  flex-wrap: nowrap;
  box-sizing: border-box;
  position: absolute;
  background: #ffffff;
  border: 0.5px solid #e84b85;
  border-radius: 40px;
  left: 18px;
  top: 8px;
  width: 165.5px;
  height: 28px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  text-align: center;
  /* identical to box height, or 100% */

  color: #ff6699;
}
.frame-box {
  flex-wrap: nowrap;
  box-sizing: border-box;
  position: absolute;
  background: #ffffff;
  border: 0.5px solid #e84b85;
  border-radius: 40px;
  left: 191.5px;
  top: 8px;
  width: 165.5px;
  height: 28px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  text-align: center;
  /* identical to box height, or 100% */

  color: #ff6699;
}

.sprites-1 {
  position: absolute;
  left: 12px;
  right: 191px;
  top: 14px;
  background: #ffffff;
  border-radius: 4px;
  width: 172px;
  height: 272px;
}
.sprites-2 {
  position: absolute;
  left: 191px;
  right: 12px;
  top: 14px;
  background: #ffffff;
  border-radius: 4px;
  width: 172px;
  height: 252px;
}
.sprites-3 {
  position: absolute;
  left: 12px;
  right: 191px;
  top: 294px;
  background: #ffffff;
  border-radius: 4px;
  width: 172px;
  height: 172px;
}
.sprites-4 {
  position: absolute;
  left: 191px;
  right: 12px;
  top: 273px;
  background: #ffffff;
  border-radius: 4px;
  width: 172px;
  height: 252px;
}
.sprites-rectangle {
  width: 172px;
  height: 172px;
  position: relative;
}
.sprites-goods1 {
  width: 161px;
  height: 165px;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.sprites-goods2 {
  width: 130px;
  height: 138px;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.sprites-goods3 {
  width: 172px;
  height: 172px;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.sprites-goods4 {
  width: 147px;
  height: 156px;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.content {
  position: absolute;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  height: 36px;
  top: 180px;
  left: 10px;
  right: 10px;
  /* or 150% */

  color: #212121;
}
.goods-love {
  position: absolute;
  left: 12px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 9px;
  top: 224.5px;
  /* identical to box height, or 90% */

  color: #ff9a3e;
}
.goods-icon {
  position: absolute;
  left: 10px;
  width: 7px;
  height: 14px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 500;
  top: 228px;
  font-size: 11px;
  line-height: 14px;
  /* identical to box height, or 127% */
  color: #fb7299;
}
.goods-price {
  position: absolute;
  left: 19px;
  width: 47px;
  height: 18px;
  top: 224px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height, or 112% */
  color: #fb7299;
}
.goods-want {
  position: absolute;
  height: 12px;
  right: 10px;
  top: 228px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  /* identical to box height, or 120% */
  text-align: right;
  color: #999999;
}
.goods-pre {
  position: absolute;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  /* identical to box height, or 100% */
  left: 12px;
  top: 183.6px;
  color: #8a8a8a;
}
</style>
