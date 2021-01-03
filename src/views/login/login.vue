<!--
 * @Author: your name
 * @Date: 2020-12-19 19:13:16
 * @LastEditTime: 2020-12-29 21:38:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywssh\src\views\login\login.vue
-->
<template>
  <div id="login">
    <section class="sign-in-page">
      <div id="container-inside">
        <div id="circle-small"></div>
        <div id="circle-medium"></div>
        <div id="circle-large"></div>
        <div id="circle-xlarge"></div>
        <div id="circle-xxlarge"></div>
      </div>

      <!-- <b-container class="container p-0"> -->
      <div class="container">
        <div class="sign-in-detail">
          <div class="sign-in-logo">
            <el-row :gutter="15">
              <el-col :span="3" :offset="8"
                ><div class="grid-content bg-purple">
                  <img src="../../assets/logo-white.png" alt="logo" /></div
              ></el-col>
              <el-col :span="5" :offset="2"
                ><div class="grid-content bg-purple">
                  <span class="logo-name"> NTestMan </span>
                </div></el-col
              >
            </el-row>
          </div>
          <div class="block">
            <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
            <el-carousel height="300px" indicator-position="outside">
              <el-carousel-item v-for="item in 4" :key="item">
                <!-- <el-card :body-style="{ padding: '0px' }"> -->
                <img
                  :src="require('../../assets/images/login/' + item + '.png')"
                />
                <!-- <h3 class="small">{{ itme }}</h3> -->
                <div style="padding: 14px;">
                  <!-- <span color="#fff">好吃的汉堡</span> -->
                  <h4 class="text-white">Manage your orders</h4>
                  <p class="text-white">
                    It is a long established fact that a reader will be
                    distracted by the readable content.
                  </p>
                  <!-- <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div> -->
                </div>
                <!-- </el-card> -->
              </el-carousel-item>
            </el-carousel>
            <!-- <Slick :option="slickOptions">
              <div class="item">
                <img
                  src="../../assets/images/login/1.png"
                  class="img-fluid mb-4"
                  alt="logo"
                />
                <h4 class="mb-1 text-white">Manage your orders</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content.
                </p>
              </div>
              <div class="item">
                <img
                  src="../../assets/images/login/2.png"
                  class="img-fluid mb-4"
                  alt="logo"
                />
                <h4 class="mb-1 text-white">Manage your orders</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content.
                </p>
              </div>
              <div class="item">
                <img
                  src="../../assets/images/login/3.png"
                  class="img-fluid mb-4"
                  alt="logo"
                />
                <h4 class="mb-1 text-white">Manage your orders</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content.
                </p>
              </div>
            </Slick> -->
          </div>
        </div>
        <div class="sign-in-from">
          <!-- <router-view /> -->
          <!-- <SignIn1 /> -->
          <div v-if="this.$route.name === 'login'">
            <SignIn1 />
          </div>
          <div v-if="this.$route.name === 'singup'"><SingUp1 /></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
// import "element-ui/lib/theme-chalk/index.css";
// import Silck from "../../components/silder/silck.vue";
import SignIn1 from "./SingIn1.vue";
import SingUp1 from "./SingUp1.vue";
export default {
  name: "login",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    SignIn1,
    // eslint-disable-next-line vue/no-unused-components
    SingUp1,
  },
  data() {
    return {
      // login_temp: true,
      pic_list: ["/static/img/1.png", "/static/img/2.png", "/static/img/3.png"],
      slickOptions: {
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 1,
        dots: true,
        fade: true,
        speed: 300,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
      },
    };
  },
  created() {},
  mounted() {
    // if (this.$route.name === "singup") {
    //   this.login_temp = false;
    // } else {
    //   this.login_temp = true;
    // }
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.sign-in-page {
  height: 100vh;
  background: #50b5ff;
}

.container {
  position: absolute;
  top: 0;
  left: 25%;
  right: 0;
  bottom: 0;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  width: 65%;
  height: 100%;
  // padding-left: 30%;
}
.sign-in-detail {
  padding-top: 15%;
  width: 50%;
  height: 100%;
  margin: 0;
}

.sign-in-from {
  padding-top: 10%;
  background-color: #fff;
  width: 50%;
  height: 100vh;
}
.sign-in-logo {
  // display: inline-block;

  // float: left;
  // display: inline;
  // margin: 5px;
  // left: 25%;
  // justify-content: center;
  width: 100%;
}
.el-row {
  // padding-top: 10%;
  left: 10%;
}

.sign-in-logo img {
  height: 50px;

  // width: 50px;
}
.logo-name {
  font-size: 45px;
  word-spacing: 3px;
  color: #fff;
  // text-align: center;
  margin-bottom: 15px;
  // vertical-align: middle;
  // margin-bottom: 15px;
  // display: inline-block;
  // width: 100%;
}
.text-white {
  color: #fff;
}

.block {
  padding-top: 8%;
  width: 80%;
  // height: 80%;
  background-color: transparent;
}

.el-carousel__item h3 {
  // color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  height: inherit;
  margin: 0;
  background-color: transparent;
}
.el-carousel__item img {
  margin: 0;
  padding: 0;
  max-width: 100%;
  height: auto;
  display: block;
  background-color: transparent;
}
.sign-in-page {
  background: #00adef;
  background: -moz-linear-gradient(-45deg, #00adef 0%, #0076e5 100%);
  background: -webkit-linear-gradient(-45deg, #00adef 0%, #0076e5 100%);
  background: linear-gradient(135deg, #00adef 0%, #0076e5 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00adef', endColorstr='#0076e5', GradientType=1);
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  margin: 0px auto;
  padding: 0px auto;
}
#container-inside {
  position: relative;
  min-width: 960px;
  max-width: 1280px;
  height: auto;
  min-height: 100%;
  margin: 0px auto;
  padding: 0px auto;
  overflow: visible;
}
#circle-small {
  -webkit-animation: circle-small-scale 3s ease-in-out infinite alternate;
  animation: circle-small-scale 3s ease-in-out infinite alternate;
  animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
  animation-delay: 0s;
  position: absolute;
  top: 200px;
  left: -150px;
  background: #fff;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  opacity: 0.4;
}
#circle-medium {
  -webkit-animation: circle-small-scale 3s ease-in-out infinite alternate;
  animation: circle-small-scale 3s ease-in-out infinite alternate;
  animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
  animation-delay: 0.3s;
  position: absolute;
  top: 50px;
  left: -300px;
  background: #fff;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  opacity: 0.3;
}
#circle-large {
  -webkit-animation: circle-small-scale 3s ease-in-out infinite alternate;
  animation: circle-small-scale 3s ease-in-out infinite alternate;
  animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
  animation-delay: 0.6s;
  position: absolute;
  top: -100px;
  left: -450px;
  background: #fff;
  width: 900px;
  height: 900px;
  border-radius: 50%;
  opacity: 0.2;
}
#circle-xlarge {
  -webkit-animation: circle-small-scale 3s ease-in-out infinite alternate;
  animation: circle-small-scale 3s ease-in-out infinite alternate;
  animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
  animation-delay: 0.9s;
  position: absolute;
  top: -250px;
  left: -600px;
  background: #fff;
  width: 1200px;
  height: 1200px;
  border-radius: 50%;
  opacity: 0.1;
}
#circle-xxlarge {
  -webkit-animation: circle-small-scale 3s ease-in-out infinite alternate;
  animation: circle-small-scale 3s ease-in-out infinite alternate;
  animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
  animation-delay: 1.2s;
  position: absolute;
  top: -400px;
  left: -750px;
  background: #fff;
  width: 1500px;
  height: 1500px;
  border-radius: 50%;
  opacity: 0.05;
}

@-webkit-keyframes circle-small-scale {
  0% {
    -webkit-transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.1);
  }
}
@keyframes circle-small-scale {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}
@import url("../../../node_modules/element-ui/lib/theme-chalk/index.css");
// @import url("../../styles/pagestyles/login.scss");
// @import url("../../../node_modules/element-ui/lib/theme-chalk/index.css");
</style>
