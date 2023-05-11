<template>
  <div class="frist"></div>
  <div class="cloumn entirej">
    <div class="row daoj">
      <van-icon name="ellipsis" color="black" class="icon1" size="25" />
      <div class="xian"></div>
      <van-icon name="stop-circle-o" size="18px" class="icon2" />
    </div>
    <div class="row">
      <van-image
        width="100"
        height="60"
        :src="require(`../assets/麦麦奖励计划.jpg`)"
        class="mqimg"
      />
      <div class="c1 column">
        <div class="row">
          <q-img :src="require(`../assets/硬币.jpg`)" class="coin"></q-img>
          <text class="coin0">0</text>
        </div>
        <text class="zd">快看看你的积分能兑换什么把~</text>
      </div>
    </div>
    <div class="yellow">
      <div class="row">
        <van-image
          round
          width="40"
          height="40"
          :src="require(`../assets/m.jpg`)"
          class="timg"
        />
        <div class="column">
          <text class="ytext">麦麦</text>
          <div class="jimg"></div>
        </div>
      </div>
      <div class="kt">
        <div class="limg"></div>
        <div class="kt1">
          立即开通
          <van-icon name="play" size="2px" color="rgb(89,65,19)" />
        </div>
      </div>
    </div>
    <div class="white">
      <div class="cc row">
        <q-img :src="require(`../assets/时钟.jpg`)" class="simg" />
        <q-img :src="require(`../assets/美味.jpg`)" class="wimg" />
      </div>
      <div class="tp">
        <div class="row jfdh">
          <div class="div1">积分兑换</div>
          <div class="row record">
            <van-image
              height="20"
              width="30"
              :src="require(`../assets/钱包.jpg`)"
              class="re"
            ></van-image>
            <text class="retext"
              >兑换记录 <van-icon name="play" size="2px" color="rgb(89,65,19)"
            /></text>
          </div>
          <van-swipe>
            <van-swipe-item>
              <q-img :src="require(`../assets/50.jpg`)" class="c50"></q-img>
            </van-swipe-item>
            <van-swipe-item>
              <q-img :src="require(`../assets/100.jpg`)" class="c50"></q-img>
            </van-swipe-item>
            <van-swipe-item>
              <q-img :src="require(`../assets/200.jpg`)" class="c50"></q-img>
            </van-swipe-item>
            <van-swipe-item>
              <q-img :src="require(`../assets/500.jpg`)" class="c50"></q-img>
            </van-swipe-item>
            <van-swipe-item>
              <q-img :src="require(`../assets/800.jpg`)" class="c50"></q-img>
            </van-swipe-item>
            <template #indicator="{ active, total }">
              <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
            </template>
          </van-swipe>
        </div>
      </div>
      <div class="cc row">
        <q-img :src="require(`../assets/福利会员卡.jpg`)" class="fimg" />
        <q-img :src="require(`../assets/权益.jpg`)" class="yimg" />
      </div>
    </div>
    <router-view />
    <van-tabbar v-model="active" active-color="black">
      <van-tabbar-item replace to="/home" :icon="start" class="text"
        >首页</van-tabbar-item
      >
      <van-tabbar-item replace to="/jiangl" :icon="jiangl" class="text"
        >奖励计划</van-tabbar-item
      >
      <van-tabbar-item replace to="/shop" :icon="shop" class="text"
        >麦麦商城</van-tabbar-item
      >
      <van-tabbar-item replace to="/my" :icon="my" class="text"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import {
  fasSignal,
  fasWifi,
  fasBatteryFull,
} from "@quasar/extras/fontawesome-v6";
export default defineComponent({
  name: "SettingPage",
  data() {
    return {
      items: [
        {
          imgSrc: require(`../assets/50.jpg`),
          imgSrc: require(`../assets/100.jpg`),
        },
      ],
      active: 1,
      fasSignal,
      fasWifi,
      fasBatteryFull,
      start: require(`../assets/首页.jpg`),
      jiangl: require(`../assets/奖励2.jpg`),
      shop: require(`../assets/商城.jpg`),
      my: require(`../assets/我.jpg`),
    };
  },
  methods: {},
});
</script>
<style>
.swiper-pagination .swiper-pagination-bullet {
  border-radius: 0px;
}
.c50 {
  margin-top: 10px;
  border-radius: 10px;
  width: 383px;
}
.div1 {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 10px;
}
.re {
  margin-top: 2px;
  margin-left: 10px;
}
.retext {
  font-size: 10px;
  margin-top: 4px;
  margin-right: 5px;
}
.jfdh {
  justify-content: space-between;
}
.record {
  background-color: rgb(253, 241, 199);
  border-radius: 10px;
  height: 27px;
  width: 120px;
  margin-right: 10px;
  margin-top: 10px;
  justify-content: space-between;
}
.tp {
  height: 400px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: white;
  margin-top: 20px;
  box-shadow: 5px 5px 10px 10px rgb(248, 248, 248);
  height: 326px;
}
.yimg {
  width: 180px;
  height: 80px;
  border-radius: 10px;
  margin-top: 15px;
}
.fimg {
  width: 180px;
  height: 80px;
  border-radius: 10px;
  margin-top: 15px;
}
.wimg {
  border-radius: 10px;
  margin-top: 15px;
  width: 180px;
  height: 150px;
}
.simg {
  border-radius: 10px;
  margin-top: 15px;
  width: 180px;
  height: 150px;
}
.cc {
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
}
.limg {
  background-image: url("~/src/assets/麦金会员.jpg");
  background-size: 100% 100%;
  height: 16px;
  width: 50px;
  position: absolute;
  right: 13px;
  top: 12px;
}
.kt1 {
  margin-left: 12px;
  margin-top: 5px;
  font-weight: bold;
}
.kt {
  height: 28px;
  width: 91px;
  border-radius: 10px;
  background-color: rgb(254, 213, 105);
  margin-right: 19px;
  margin-top: 25px;
}
.jimg {
  background-image: url("~/src/assets/jf.jpg");
  background-size: 100% 100%;
  height: 20px;
  width: 70px;
  margin-left: 8px;
}
.ytext {
  font-size: 16px;
  font-weight: bold;
  margin-top: 15px;
  margin-left: 10px;
}
.timg {
  margin-top: 15px;
  margin-left: 20px;
}
.white {
  height: 200px;
  background-color: white;
  border-radius: 10px;
}
.yellow {
  height: 80px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: rgb(255, 187, 14);
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.coin0 {
  font-size: 20px;
  font-weight: bold;
  color: rgb(179, 0, 20);
  margin-left: 5px;
  margin-top: 2px;
}
.coin {
  width: 20px;
  height: 20px;
  margin-top: 5px;
}
.c1 {
  margin-top: 10px;
  margin-left: 10px;
}
.zd {
  font-size: 12px;
}
.mqimg {
  margin-left: 10px;
}
.xian {
  height: 16px;
  width: 2px;
  background-color: rgb(146, 167, 186);
  margin-top: 4px;
}
.daoj {
  border-radius: 10px;
  height: 24px;
  width: 80px;
  background-color: rgb(158, 184, 209);
  justify-content: space-between;
  position: fixed;
  right: 0;
  margin-right: 10px;
  margin-top: 10px;
}
.icon1 {
  margin-left: 5px;
}
.icon2 {
  margin-right: 5px;
  margin-top: 2px;
}
.entirej {
  position: relative;
  background-color: rgb(246, 246, 246);
  height: 850px;
}
.frist {
  background-color: rgb(246, 246, 246);
}
.text {
  color: gray;
}
</style>
