<template>
  <!-- <q-bar dense class="bg-white text-pink"> </q-bar> -->
  <div class="cloumn entire">
    <div>
      <div class="row heng">
        <van-button
          round
          color="black"
          to="index"
          size="mini"
          :icon="maij"
          class="li"
        >
          立即开通</van-button
        >
        <div class="row daoh">
          <van-icon name="ellipsis" color="black" class="icon1" size="25" />
          <div class="xian"></div>
          <van-icon name="stop-circle-o" size="18px" class="icon2" />
        </div>
      </div>
      <div class="van-ellipsis">
        <van-icon name="points" size="20px" class="icon3" />
        0| "麦麦会员奖励计划"20积分抽好礼~>
      </div>
    </div>
    <div class="z">
      <div class="p">
        <text class="text1">麦乐送</text>
        <text class="text3">到店取餐</text>
      </div>
      <div class="p">
        <text class="text2">0元霸王餐</text>
        <text class="text4">潮辣食尚来袭</text>
      </div>
    </div>
    <div class="row anniu">
      <div class="column sweet">
        <van-image
          width="50px"
          height="50px"
          :src="require(`../assets/甜品.jpg`)"
        />
        <div>甜品站</div>
      </div>
      <div class="column">
        <van-image
          width="50px"
          height="50px"
          :src="require(`../assets/咖啡.jpg`)"
        />
        <div>麦咖啡</div>
      </div>
      <div class="column">
        <van-image
          width="50px"
          height="50px"
          :src="require(`../assets/会员.jpg`)"
        />
        <div>会员日</div>
      </div>
      <div class="column happy">
        <van-image
          width="50px"
          height="50px"
          :src="require(`../assets/乐园.jpg`)"
        />
        <div>亲子乐园</div>
      </div>
    </div>
    <div class="dt">
      <div class="dtw1">
        <q-icon name="place" color="red" size="20px" />
        <text>广州番禺西环路得来速餐厅</text>
      </div>
      <div class="dtw2"><text>⇌</text> <text>切换</text></div>
    </div>
    <div>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <q-item class="goodItem" v-for="item in list" :key="item.id">
          <q-img class="goods-image" :src="item.image" />
        </q-item>
      </van-list>
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
</template>
<script>
import { defineComponent } from "vue";
import axios from "axios";
import { BASE_URL } from "../constant/network";
import {
  fasSignal,
  fasWifi,
  fasBatteryFull,
} from "@quasar/extras/fontawesome-v6";
export default defineComponent({
  name: "SettingPage",
  data() {
    return {
      loading: false,
      finished: false,
      list: [],
      page_size: 11,
      total: 11,
      active: 0,
      fasSignal,
      fasWifi,
      fasBatteryFull,
      start: require(`../assets/首页2.jpg`),
      jiangl: require(`../assets/奖励.jpg`),
      shop: require(`../assets/商城.jpg`),
      my: require(`../assets/我.jpg`),
      maij: require(`../assets/麦.jpg`),
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
    axios.get(BASE_URL + "/mcdonalds").then((data) => {
      this.list = data.data;
    });
  },
});
</script>
<style>
.goods-image {
  border-radius: 10px;
}
.dtw2 {
  margin-top: 5px;
  margin-right: 10px;
}
.dtw1 {
  margin-top: 5px;
  margin-left: 10px;
}
.dt {
  display: flex;
  justify-content: space-between;
  background-color: rgb(225, 226, 226);
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
  height: 34px;
  border-radius: 10px;
  margin-bottom: 10px;
}
.sweet {
  margin-left: 20px;
}
.happy {
  margin-right: 20px;
}
.anniu {
  justify-content: space-between;
  margin-top: 20px;
}
.p {
  display: flex;
  justify-content: space-between;
}
.text3 {
  color: white;
  font-size: 24px;
  margin-right: 57px;
  margin-top: 11px;
  font-weight: bold;
}
.text4 {
  color: white;
  margin-right: 68px;
  font-size: 1px;
}
.text1 {
  color: white;
  font-size: 24px;
  margin-left: 64px;
  margin-top: 10px;
  font-weight: bold;
}
.text2 {
  color: white;
  margin-left: 70px;
  font-size: 1px;
}
.icon3 {
  margin-left: 10px;
}
.z {
  height: 100px;
  height: 200px;
  background-color: rgb(37, 97, 149);
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;
  position: relative;
  background-image: url("~/src/assets/麦当.png");
  background-size: 100% 100%;
}
.li {
  margin-left: 10px;
}
.heng {
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
}
.icon1 {
  margin-left: 5px;
}
.icon2 {
  margin-right: 5px;
  margin-top: 2px;
}
.xian {
  height: 16px;
  width: 2px;
  background-color: rgb(146, 167, 186);
  margin-top: 4px;
}
.daoh {
  border-radius: 10px;
  height: 24px;
  width: 80px;
  background-color: rgb(158, 184, 209);
  justify-content: space-between;
  margin-right: 10px;
}
.entire {
  position: relative;
}
.text {
  color: gray;
}
</style>
