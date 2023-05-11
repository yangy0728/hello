<template>
  <div class="column box">
    <q-bar dense class="bg-black text-white">
      <div>中国联通</div>
      <div>10:00</div>

      <q-icon :name="fasWifi" />
      <q-space />
      <div>4G</div>
      <q-icon class="aa" :name="fasSignal" />
      <q-icon :name="fasBatteryFull" />
      <div>100%</div>
    </q-bar>
    <div class="a">
      <div class="row frist">
        <q-icon name="keyboard_arrow_left" class="icon1"></q-icon>
        <div class="f"></div>
        <div class="b">麦乐送</div>
        <q-icon class="d" name="shopping_cart"></q-icon>
        <div class="d1">┇</div>
      </div>
      <div class="row c">
        <text class="c1">促销产品&热卖产品</text>
        <div class="c3"></div>
        <div class="c2"></div>
        <text class="c1">主食&超值套餐</text>
        <div class="c2"></div>
        <text class="c1">小食</text>
      </div>
    </div>
    <q-list bordered separator>
      <q-item class="e2" v-for="item in items" :key="item">
        <q-q-item-section>
          <q-img class="e" :src="item.imgSrc" />
        </q-q-item-section>
        <q-item-section>
          <q-item-label class="e1">{{ item.message }}</q-item-label>
          <q-item-label class="e3" caption lines="1">{{
            item.price
          }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import axios from "axios";
import {
  fasSignal,
  fasWifi,
  fasBatteryFull,
} from "@quasar/extras/fontawesome-v6";
export default defineComponent({
  name: "ListItem",
  data() {
    return {
      items: [
        {
          imgSrc: require(`../layouts/3.jpg`),
          message: "麦趣鸡盒",
          price: "￥69.00起",
        },
        {
          imgSrc: require(`../layouts/豪情.jpg`),
          message: "豪情派对聚享餐",
          price: "￥98.00起",
        },
        {
          imgSrc: require(`../layouts/咖喱.jpg`),
          message: "麦乐家庭餐",
          price: "￥81.50起",
        },
        {
          imgSrc: require(`../layouts/咖喱2.jpg`),
          message: "咖喱猪扒麦饭卷组合",
          price: "￥26.00起",
        },
        {
          imgSrc: require(`../layouts/五色.jpg`),
          message: "五色嫩鸡麦饭卷组合",
          price: "￥24.00起",
        },
        {
          imgSrc: require(`../layouts/五色至牛.jpg`),
          message: "五色至牛麦饭卷组合",
          price: "￥26.00起",
        },
      ],
      fasSignal,
      fasWifi,
      fasBatteryFull,
    };
  },
  methods: {},
  setup() {
    axios({
      method: "get",
      url: "http://localhost:3000/posts",
    }).then((res) => {
      console.log(res);
    });
    // 2. 添加
    // 除去get请求外，函数的第二个参数都是请求体传参，是对象类型。
    axios
      .post("http://localhost:3000/posts", { title: "宝马", price: 500000 })
      .then((res) => {});
    // axios
    //   .put("http://localhost:3000/posts/10", {
    //     title: "长安奔奔",
    //     price: 36000,
    //   })
    //   .then((res) => {});
    // 3. 删除
    // axios.delete("http://localhost:3000/posts/8").then((res) => {});
  },
});
</script>
<style>
.box {
  position: relative;
}
.aa {
  margin-right: 4px;
}
.c3 {
  background-color: red;
  width: 170px;
  height: 8px;
  position: absolute;
  left: 0;
  bottom: 0;
}
.c2 {
  height: 30px;
  width: 2px;
  background-color: rgb(212, 8, 8);
  margin-top: 20px;
}
.frist {
  justify-content: space-between;
  margin-top: 15px;
}
.icon1 {
  color: white;
  font-size: 30px;
  /* margin-top: 10px; */
}
.f {
  width: 30px;
  height: 30px;
  background-size: 100% 100%;
  background-image: url("~/src/layouts/麦乐送.jpg");
  left: 24px;
  position: absolute;
}
.e3 {
  margin-left: 30px;
  padding-top: 10px;
  font-size: 16px;
}
.e2 {
  padding: 0;
}
.e1 {
  font-weight: bold;
  font-size: 18px;
  margin-left: 30px;
}
.e {
  height: 100px;
  width: 100px;
  margin-top: 8px;
  margin-bottom: 8px;
}
.a {
  background-color: #ff0000;
  height: 120px;
  position: relative;
}
.b {
  font-size: 20px;
  color: white;
  margin-right: 8pc;
}
.c {
  background-color: brown;
  height: 63px;
  margin-top: 12px;
  justify-content: space-between;
}
.d {
  color: white;
  font-size: 30px;
}
.d1 {
  margin-right: 20px;
  color: white;
  font-size: 20px;
}
.c1 {
  text-align: center;
  color: white;
  font-size: 16px;
  margin-top: 20px;
  align-self: flex-start;
  margin-left: 10px;
}
</style>
