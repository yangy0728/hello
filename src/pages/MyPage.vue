<template>
  <q-bar dense class="bg-white text-pink"> </q-bar>
  <div class="cloumn entire">
    <div class="row daoy">
      <van-icon name="ellipsis" color="black" class="icon1" size="25" />
      <div class="xian"></div>
      <van-icon name="stop-circle-o" size="18px" class="icon2" />
    </div>
    <div class="column">
      <div class="row">
        <q-img :src="require(`../assets/头像.jpg`)" class="tx"></q-img>
        <div class="column">
          <text class="mm">麦麦</text>
          <div class="row">
            <q-img :src="require(`../assets/硬币.jpg`)" class="coin"></q-img>
            <text class="coin0">0</text>
            <van-icon name="play" color="rgb(179, 0, 20)" class="jt" />
          </div>
        </div>
        <q-img :src="require(`../assets/积分会员.jpg`)" class="huiy"></q-img>
      </div>
      <div class="a column">
        <div class="a1 row">
          <div class="column">
            <q-img :src="require(`../assets/到店券.jpg`)" class="dd"></q-img>
            <text class="ddtext">到店券</text>
            <text class="ztext">共<text class="z0">0</text>张</text>
          </div>
          <div class="column">
            <q-img :src="require(`../assets/外送券.jpg`)" class="ws"></q-img>
            <text class="wstext">外送券</text>
            <text class="ztext1">共<text class="z0">0</text>张</text>
          </div>
          <div class="column">
            <q-img :src="require(`../assets/送卡券.jpg`)" class="sk"></q-img>
            <text class="sktext">送卡券</text>
            <text class="ztext2">共<text class="z0">0</text>张</text>
          </div>
          <div class="column">
            <q-img :src="require(`../assets/兑换券.jpg`)" class="dh"></q-img>
            <text class="dhtext">兑换券</text>
            <text class="ztext3">立即兑换</text>
          </div>
        </div>
        <div class="a2">
          <div class="column card">
            <q-img :src="require(`../assets/积点卡.jpg`)" class="jd"></q-img>

            <text class="jdk">积点卡</text>
            <text class="nt">差4积点兑换中杯奶铁</text>
          </div>
          <div class="a21">
            <text class="ye">余额</text>
            <div class="row">
              <div class="q"></div>
              <div class="fk">
                <q-img :src="require(`../assets/付款.jpg`)" class="fk2"></q-img>
                <text class="fk1">付款</text>
              </div>
              <div class="mq">
                <q-img :src="require(`../assets/圆.jpg`)" class="mq1"></q-img>
                <text class="m">麦当劳钱包</text>
                <van-icon
                  name="arrow"
                  class="arrow"
                  size="16px"
                  color="rgb(72, 37, 0)"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="row a12">
          <div class="column">
            <div class="text12">我的订单</div>
            <text class="ck">查看最近的订单</text>
          </div>
          <q-img :src="require(`../assets/订单.jpg`)" class="imgd"></q-img>
          <div class="xian2"></div>
          <div class="column">
            <div class="sc">我的收藏</div>
            <text class="sc1">收藏餐厅好打卡</text>
          </div>
          <q-img :src="require(`../assets/收藏.jpg`)" class="imgd"></q-img>
        </div>
      </div>
      <div class="">
        <q-list>
          <q-item>
            <q-item-section class="d">
              发票管理
              <van-icon
                name="arrow"
                class="arrow1"
                size="16px"
                color=" rgb(213, 213, 213"
            /></q-item-section>
          </q-item>
          <q-item>
            <q-item-section class="d">
              我的地址
              <van-icon
                name="arrow"
                class="arrow1"
                size="16px"
                color=" rgb(213, 213, 213"
            /></q-item-section>
          </q-item>
          <q-item>
            <q-item-section class="d">
              投诉与建议
              <van-icon
                name="arrow"
                class="arrow1"
                size="16px"
                color=" rgb(213, 213, 213"
              />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section class="d">
              条款与规则
              <van-icon
                name="arrow"
                class="arrow1"
                size="16px"
                color=" rgb(213, 213, 213"
              />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section class="d"
              >设置
              <van-icon
                name="arrow"
                class="arrow1"
                size="16px"
                color=" rgb(213, 213, 213"
              />
            </q-item-section>
          </q-item>
        </q-list>
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
      active: 3,
      fasSignal,
      fasWifi,
      fasBatteryFull,
      start: require(`../assets/首页.jpg`),
      jiangl: require(`../assets/奖励.jpg`),
      shop: require(`../assets/商城.jpg`),
      my: require(`../assets/我的.jpg`),
    };
  },
  methods: {},
});
</script>
<style>
.arrow1 {
  position: absolute;
  right: 15px;
  top: 18px;
}
.d {
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
  margin-top: 10px;
}
.sc1 {
  font-size: 10px;
  color: grey;
  margin-left: 25px;
}
.sc {
  font-size: 16px;
  margin-top: 18px;
  margin-left: 25px;
}
.imgd {
  height: 40px;
  width: 40px;
  margin-top: 14px;
  margin-right: 10px;
}
.ck {
  font-size: 10px;
  color: grey;
  margin-left: 25px;
}
.text12 {
  font-size: 16px;
  margin-top: 18px;
  margin-left: 25px;
}
.xian2 {
  height: 45px;
  width: 2px;
  background-color: rgb(146, 167, 186);
  margin-top: 4px;
  position: absolute;
  top: 12px;
  left: 201px;
}
.a12 {
  background-color: white;
  height: 75px;
  border-radius: 10px;
  margin-top: 82px;
  margin-left: 10px;
  margin-right: 10px;
  position: relative;
  display: flex;
  justify-content: space-between;
  box-shadow: 5px 5px 10px 10px rgb(248, 248, 248);
}
.arrow {
  position: absolute;
  right: 8px;
  top: 18px;
}
.m {
  color: rgb(72, 37, 0);
  font-size: 16px;
  font-weight: bold;
  position: absolute;
  top: 14px;
  margin-left: 5px;
}

.mq1 {
  width: 30px;
  margin-left: 10px;
  margin-top: 10px;
}
.mq {
  position: absolute;
  right: 0;
  top: 20px;
  width: 150px;
  height: 50px;
  background-color: rgb(253, 214, 51);
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.fk2 {
  width: 30px;
  margin-left: 5px;
}
.fk1 {
  color: rgb(240, 196, 39);
  font-size: 16px;
  font-weight: bold;
  margin-right: 5px;
  margin-top: 5px;
}
.fk {
  height: 30px;
  width: 100px;
  background-color: rgb(115, 72, 21);
  border-radius: 10px;
  margin-top: 56px;
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
}
.q {
  width: 60px;
  height: 31px;
  background-image: url("~/src/assets/0.jpg");
  background-size: 100% 100%;
  margin-left: 20px;
  margin-top: 53px;
}
.ye {
  font-size: 16px;
  color: rgb(126, 88, 3);
  font-weight: bold;
  position: absolute;
  left: 20px;
  top: 28px;
}
.nt {
  font-size: 12px;
  color: rgb(142, 123, 177s);
}
.jdk {
  font-size: 16px;
  font-weight: bold;
  margin-left: 66px;
  color: rgb(76, 40, 14);
  margin-top: 10px;
}
.jd {
  height: 60px;
  width: 60px;
  margin-left: 10px;
  margin-top: 10px;
}
.a21 {
  background-color: rgb(255, 200, 19);
  height: 100px;
  border-radius: 10px;
  position: relative;

  box-shadow: 10px 10px rgb(248, 248, 248);
}
.card {
  background-color: rgb(235, 236, 238);
  height: 70px;
  width: 200px;
  border-radius: 10px;
  margin-top: 10px;
  margin-left: 10px;
}
.a2 {
  margin: 10px;
  border-radius: 10px;
  background-color: rgb(251, 192, 2);
  height: 100px;
  box-shadow: 5px 5px 10px 10px rgb(248, 248, 248);
}
.ztext3 {
  font-size: 12px;
  color: grey;
  margin-left: -2px;
}
.ztext2 {
  font-size: 12px;
  color: grey;
  margin-left: 5px;
}
.ztext1 {
  font-size: 12px;
  color: grey;
  margin-left: 6px;
}
.sktext {
  font-size: 16px;
  font-weight: bold;
  margin-left: -1px;
  margin-top: 5px;
}
.dhtext {
  font-size: 16px;
  font-weight: bold;
  margin-left: -3px;
  margin-top: 5px;
}
.wstext {
  font-size: 16px;
  font-weight: bold;
  margin-left: -2px;
  margin-top: 5px;
}
.ddtext {
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
  margin-top: 5px;
}
.ztext {
  font-size: 12px;
  color: grey;
  margin-left: 18px;
}
.z0 {
  font-size: 12px;
  color: red;
}
.dh {
  height: 40px;
  width: 40px;
  margin-right: 10px;
  margin-top: 20px;
}
.sk {
  height: 40px;
  width: 40px;
  margin-top: 20px;
}
.ws {
  height: 40px;
  width: 40px;
  margin-top: 20px;
}
.dd {
  height: 40px;
  width: 40px;
  margin-left: 10px;
  margin-top: 20px;
}
.a1 {
  background-color: white;
  height: 120px;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: 5px 5px 10px 10px rgb(248, 248, 248);
}
.a {
  margin-top: 10px;
}
.jt {
  margin-top: 12px;
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
.huiy {
  height: 20px;
  width: 60px;
  margin-top: 18px;
  margin-left: 5px;
}
.mm {
  font-weight: bold;
  font-size: 20px;
  margin-top: 18px;
}
.tx {
  height: 60px;
  width: 60px;
  margin: 10px;
}
.xian {
  height: 16px;
  width: 2px;
  background-color: rgb(146, 167, 186);
  margin-top: 4px;
}
.daoy {
  border-radius: 10px;
  height: 24px;
  width: 80px;
  background-color: rgb(158, 184, 209);
  justify-content: space-between;
  position: fixed;
  right: 0;
  margin-right: 10px;
}
.icon1 {
  margin-left: 5px;
}
.icon2 {
  margin-right: 5px;
  margin-top: 2px;
}
.entire {
  position: relative;
  height: 800px;
}
.text {
  color: gray;
}
</style>
