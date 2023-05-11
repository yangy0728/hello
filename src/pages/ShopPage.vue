<template>
  <div></div>
  <div class="column entires">
    <div class="row daos">
      <van-icon name="ellipsis" color="black" class="icon1" size="25" />
      <div class="xian"></div>
      <van-icon name="stop-circle-o" size="18px" class="icon2" />
    </div>
    <div class="t">
      <text class="textm">麦麦商城</text>
    </div>
    <div class="a22 row">
      <van-swipe :autoplay="3000" class="lb">
        <van-swipe-item v-for="image in images" :key="image">
          <img :src="image" class="img1" />
        </van-swipe-item>
      </van-swipe>
      <div class="column">
        <div class="zf1">
          <div class="column">
            <text class="textz1">积分好礼</text>
            <q-img :src="require(`../assets/积分.jpg`)" class="qimg3"></q-img>
          </div>
          <van-icon name="play" color="red" class="jt1" />
          <q-img :src="require(`../assets/好礼.jpg`)" class="qimg1"></q-img>
        </div>
        <div class="zf2">
          <div class="column">
            <text class="textz2">积分兑换</text>
            <q-img :src="require(`../assets/积点.jpg`)" class="qimg3"></q-img>
          </div>
          <van-icon name="play" color="gold" class="jt2" />
          <q-img :src="require(`../assets/兑换.jpg`)" class="qimg2"></q-img>
        </div>
      </div>
    </div>
    <div class="column">
      <text class="b">爆品推荐</text>
      <div class="row bb">
        <div class="column">
          <q-img :src="require(`../assets/早餐卡.jpg`)" class="imgb1"></q-img>
          <text class="textb1">早餐卡</text>
        </div>
        <div class="column">
          <q-img :src="require(`../assets/礼品卡.jpg`)" class="imgb1"></q-img>
          <text class="textb2">礼品卡￥50</text>
        </div>
        <div class="column">
          <q-img :src="require(`../assets/b.jpg`)" class="imgb1"></q-img>
          <text class="textb3">麦当劳+B站联合会</text>
        </div>
        <div class="column">
          <q-img :src="require(`../assets/礼品卡2.jpg`)" class="imgb1"></q-img>
          <text class="textb4">礼品卡￥100(赠中</text>
        </div>
      </div>
      <div class="b2">
        <div class="row">
          <div class="textb21">麦有礼</div>
          <div class="textb22">送一份美味心意</div>
          <div class="jx">
            <text class="textb23">挑选更多</text>
            <van-icon name="play" color="rgb(206, 165, 47)" size="8px" />
          </div>
        </div>
        <van-swipe-cell>
          <div class="row j">
            <div class="xjx1">
              <q-img
                :src="require(`../assets/礼品50.jpg`)"
                class="imgx1"
              ></q-img>
              <text class="xtext1">礼品卡￥50</text>
              <text class="right1">➜</text>
            </div>
            <div class="xjx1">
              <q-img
                :src="require(`../assets/礼品100.jpg`)"
                class="imgx1"
              ></q-img>
              <text class="xtext2">礼品卡￥100</text>
              <text class="right2">➜</text>
            </div>
            <div class="xjx2">
              <q-img
                :src="require(`../assets/麦旋风.jpg`)"
                class="imgx1"
              ></q-img>
              <text class="xtext3">送TA甜蜜麦旋风</text>
              <text class="right3">➜</text>
            </div>
          </div>
          <template #right>
            <div class="row j">
              <div class="xjx2">
                <q-img
                  :src="require(`../assets/炸鸡.jpg`)"
                  class="imgx1"
                ></q-img>
                <text class="xtext4">送TA炸鸡自由</text>
                <text class="right4">➜</text>
              </div>
              <div class="xjx2">
                <q-img
                  :src="require(`../assets/早餐.jpg`)"
                  class="imgx1"
                ></q-img>
                <text class="xtext5">送TA早餐吃饱吃</text>
                <text class="right5">➜</text>
              </div>
              <div class="xjx3">
                <div class="xtext6">查</div>
                <text class="xtext6">看</text>
                <text class="xtext6">更</text>
                <text class="xtext6">多</text>
              </div>
            </div>
          </template>
        </van-swipe-cell>
      </div>
    </div>
    <div>
      <text class="text33">为你精选</text
      ><van-list
        v-model="loading"
        :finished="finished"
        finished-text="到底了"
        @load="onLoad"
      >
        <div class="goodItem" v-for="item in list" :key="item.id">
          <div class="row img">
            <q-img class="good-image" :src="item.image" />
            <q-img class="good-image" :src="item.image1" />
            <div class="column">
              <div class="row title">
                <q-item-label class="e">{{ item.title }}</q-item-label>
                <div class="e12">{{ item.title1 }}</div>
              </div>
              <div class="aa row">
                <q-item-label class="e1">{{ item.price }}</q-item-label>
                <q-img :src="require(`../assets/按钮.jpg`)" class="an"></q-img>
                <div class="aa1 row">
                  <q-item-label class="e1">{{ item.price1 }}</q-item-label>
                  <q-img
                    :src="require(`../assets/按钮.jpg`)"
                    class="an1"
                  ></q-img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </van-list>
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
import axios from "axios";
import { BASE_URL } from "../constant/network";

export default defineComponent({
  name: "SettingPage",
  data() {
    return {
      loading: false,
      finished: false,
      list: [],
      page_size: 10,
      total: 10,
      active: 2,
      start: require(`../assets/首页.jpg`),
      jiangl: require(`../assets/奖励.jpg`),
      shop: require(`../assets/商城2.jpg`),
      my: require(`../assets/我.jpg`),
      images: [
        "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/photo_db/2023/03/20/202303201546109051/202303201546109051_640_480.jpg?&rand=0827",
        "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/photo_db/2022/12/19/202212191554325988/202212191554325988_640_480.jpg?&rand=0827",
        "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/photo_db/2022/12/19/202212191642447739/202212191642447739_640_480.jpg?&rand=0827",
        "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/photo_db/2022/11/30/202211301631289908/202211301631289908_640_480.jpg?&rand=0827",
      ],
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        this.loading = false;
        if (this.list.length >= this.total) {
          this.finished = true;
        }
      }, 1000);
    },
  },
  mounted() {
    axios.get(BASE_URL + "/jx").then((data) => {
      this.list = data.data;
    });
  },
});
</script>
<style>
.t {
  margin-top: 10px;
}
.xtext6 {
  font-size: 10px;
  color: rgb(206, 172, 38);
  margin-left: 10px;
  margin-top: 5px;
}
.xjx3 {
  background-color: white;
  border-radius: 10px;
  width: 30px;
  height: 90px;
  margin-right: 10px;
}
.aa1 {
  position: absolute;
  right: 0;
}
.aa {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-left: 10px;
}
.img {
  display: flex;
  justify-content: space-between;
}
.an {
  height: 20px;
  width: 20px;
}
.an1 {
  height: 20px;
  width: 20px;
  margin-right: 10px;
}
.e1 {
  font-size: 16px;
  font-weight: bold;
  color: red;
  margin-right: 125px;
}
.e12 {
  font-size: 18px;
  font-weight: bold;
  margin-top: 7px;
  position: absolute;
  right: 0;
  margin-right: 25px;
}
.e {
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
  margin-top: 10px;
}
.good-image {
  border-radius: 10px;
  height: 250px;
  width: 180px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
.text33 {
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
}
.xjx2 {
  background-color: white;
  border-radius: 10px;
  width: 110px;
  height: 90px;
  margin-right: 10px;
  position: relative;
}
.j {
  display: flex;
  justify-content: space-between;
}
.right5 {
  color: rgb(176, 207, 70);
  position: absolute;
  right: 0;
  margin-right: 5px;
}
.xtext5 {
  font-size: 10px;
  color: rgb(176, 207, 70);
  margin-left: 5px;
}
.right4 {
  color: rgb(206, 172, 38);
  position: absolute;
  right: 0;
  margin-right: 5px;
}
.xtext4 {
  font-size: 10px;
  color: rgb(206, 172, 38);
  margin-left: 5px;
}
.xtext3 {
  font-size: 10px;
  color: rgb(80, 178, 207);
  margin-left: 5px;
}
.right3 {
  color: rgb(80, 178, 207);
  position: absolute;
  right: 0;
  margin-right: 5px;
}
.right2 {
  color: rgb(189, 67, 54);
  position: absolute;
  right: 0;
  margin-right: 5px;
}
.xtext2 {
  font-size: 10px;
  color: rgb(189, 67, 54);
  margin-left: 5px;
}
.right1 {
  color: rgb(206, 165, 47);
  position: absolute;
  right: 0;
  margin-right: 5px;
}
.xtext1 {
  font-size: 10px;
  color: rgb(206, 165, 47);
  margin-left: 5px;
}
.imgx1 {
  height: 60px;
  width: 106px;
  border-radius: 10px;
  margin-left: 2px;
  margin-bottom: 5px;
}
.xjx1 {
  background-color: white;
  border-radius: 10px;
  width: 110px;
  height: 90px;
  margin-left: 10px;
  position: relative;
}
.textb23 {
  color: rgb(206, 165, 47);
  margin-left: 10px;
  font-weight: bold;
  font-size: 12px;
}
.jx {
  border-radius: 10px;
  height: 20px;
  width: 80px;
  background-color: white;
  position: absolute;
  right: 0;
  margin-right: 20px;
  margin-top: 10px;
}
.textb22 {
  font-size: 16px;
  color: rgb(207, 171, 85);
  margin-top: 12px;
}
.textb21 {
  font-weight: bold;
  font-size: 20px;
  margin: 10px;
  color: rgb(209, 167, 21);
}
.b2 {
  background-color: rgb(247, 238, 209);
  height: 150px;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 35px;
  margin-bottom: 20px;
}
.bb {
  display: flex;
  justify-content: space-between;
}
.textb4 {
  margin-top: 5px;
  margin-left: 5px;
  font-size: 12px;
}
.textb3 {
  margin-top: 5px;
  margin-left: 5px;
  font-size: 12px;
}
.textb2 {
  margin-top: 5px;
  margin-left: 20px;
  font-size: 12px;
}
.textb1 {
  margin-top: 5px;
  margin-left: 30px;
  font-size: 12px;
}
.imgb1 {
  height: 80px;
  width: 80px;
  margin-left: 10px;
}
.b {
  font-weight: bold;
  font-size: 20px;
  margin-left: 10px;
}
.qimg3 {
  margin-left: 10px;
}
.jt2 {
  margin-top: 25px;
  margin-right: 12px;
}
.qimg2 {
  width: 60px;
  height: 74px;
  margin-top: 15px;
  margin-right: 10px;
}
.textz2 {
  font-weight: bold;
  font-size: 16px;
  margin-top: 20px;
  margin-left: 10px;
}
.jt1 {
  margin-top: 25px;
  margin-right: 12px;
}
.textz1 {
  font-weight: bold;
  font-size: 16px;
  margin-top: 20px;
  margin-left: 10px;
}
.qimg1 {
  width: 60px;
  height: 70px;
  margin-top: 10px;
  margin-right: 10px;
}
.a22 {
  margin-top: 25px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.lb {
  width: 200px;
  border-radius: 10px;
  margin-left: 10px;
}
.zf1 {
  height: 88px;
  width: 170px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: white;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  margin-right: 8px;
  box-shadow: 5px 5px 10px 10px rgb(248, 248, 248);
}
.zf2 {
  background-color: white;
  height: 88px;
  width: 170px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: 5px 5px 10px 10px rgb(248, 248, 248);
}
.img1 {
  height: 200px;
  width: 200px;
  box-shadow: 5px 5px 10px 10px rgb(248, 248, 248);
}
.textm {
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
}
.xian {
  height: 16px;
  width: 2px;
  background-color: rgb(146, 167, 186);
  margin-top: 4px;
}
.daos {
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
.entires {
  position: relative;
}
.text {
  color: gray;
}
</style>
