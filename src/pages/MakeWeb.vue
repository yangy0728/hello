<template>
  <van-swipe style="height: 937px" vertical indicator>
    <van-swipe-item>
      <q-img :src="require(`../assets/1.jpg`)" class="web1">
        <q-img :src="require(`../assets/矩形.jpg`)" class="web2">
          <text class="zy">专业做网站</text>
        </q-img>
        <img class="imgtext" src="../assets/freeDomain.png" />
        <van-button round type="warning" class="buttona" size="large">
          马上体验 免费注册
        </van-button>
      </q-img>
    </van-swipe-item>
    <van-swipe-item>
      <q-img :src="require(`../assets/2.jpg`)" class="web1">
        <img class="imgtext2" src="../assets/bt-1.png" />
        <text class="wz">电脑网站+手机网站+微信网站</text>
        <text class="wz2">一个账户三个网站,三站合一全拥有</text>
        <van-button round type="warning" class="buttona2" size="large">
          免费拥有>
        </van-button>
      </q-img>
    </van-swipe-item>
    <van-swipe-item>
      <q-img :src="require(`../assets/3.jpg`)" class="web1">
        <img class="imgtext3" src="../assets/bt-2.png" />
        <text class="build">随时建，随时改</text>
        <text class="build2">自由功能拖拽模块+成品模板网站更改</text>
        <van-button round type="warning" class="buttona3" size="large">
          免费搭建>
        </van-button>
      </q-img>
    </van-swipe-item>
    <van-swipe-item>
      <q-img :src="require(`../assets/4.jpg`)" class="web1">
        <img class="imgtext4" src="../assets/bt-3.png" />
        <van-button round type="warning" class="buttona4" size="large">
          立即搭建>
        </van-button>
      </q-img>
    </van-swipe-item>
    <van-swipe-item>
      <div>
        <q-img :src="require(`../assets/5.jpg`)" class="web1">
          <img class="imgtext5" src="../assets/bt-4.png" />
          <text class="wz">您只管专注订单管理</text>
          <text class="wz2">我们为您的网站保驾护航</text>
          <van-button round type="warning" class="buttona2" size="large">
            免费拥有>
          </van-button>
        </q-img>
      </div>
    </van-swipe-item>
    <van-swipe-item>
      <div>
        <q-img :src="require(`../assets/6.jpg`)" class="web1">
          <img class="imgtext6" src="../assets/bt-5.png" />
          <text class="build">搜索一下就能找到你</text>
          <text class="hlw2">互联网时代，我们助你全网营销</text>
          <van-button round type="warning" class="buttona5" size="large">
            免费拥有>
          </van-button>
        </q-img>
      </div>
    </van-swipe-item>
  </van-swipe>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "VantBar",
  data() {
    // const active=defineComponent ('home');
    return {};
  },
  methods: {},
});
</script>
<style>
.hlw2 {
  font-size: 30px;
  color: rgb(210, 209, 209);
  position: absolute;
  top: 480px;
  right: 560px;
}
.build2 {
  font-size: 30px;
  color: rgb(210, 209, 209);
  position: absolute;
  top: 480px;
  right: 400px;
}
.build {
  font-size: 40px;
  color: rgb(74, 74, 74);
  position: absolute;
  top: 400px;
  right: 620px;
}
.wz2 {
  font-size: 30px;
  color: rgb(210, 209, 209);
  position: absolute;
  top: 480px;
  left: 400px;
}
.wz {
  font-size: 40px;
  color: rgb(74, 74, 74);
  position: absolute;
  top: 400px;
  left: 400px;
}
.imgtext2 {
  height: 100px;
  width: 600px;
  margin-top: 60px;
  margin-left: 590px;
}
.imgtext3 {
  height: 100px;
  width: 600px;
  margin-top: 60px;
  margin-left: 700px;
}
.imgtext4 {
  height: 100px;
  width: 600px;
  margin-top: 60px;
  margin-left: 700px;
}
.imgtext5 {
  height: 100px;
  width: 600px;
  margin-top: 60px;
  margin-left: 700px;
}
.imgtext6 {
  height: 100px;
  width: 600px;
  margin-top: 60px;
  margin-left: 700px;
}
.buttona {
  position: absolute;
  top: 580px;
  left: 100px;
  width: 280px;
}
.buttona2 {
  position: absolute;
  top: 580px;
  left: 400px;
  width: 280px;
}
.buttona3 {
  position: absolute;
  top: 580px;
  right: 620px;
  width: 280px;
}
.buttona4 {
  position: absolute;
  top: 820px;
  left: 800px;
  width: 280px;
}
.buttona5 {
  position: absolute;
  top: 580px;
  right: 700px;
  width: 280px;
}
.imgtext {
  height: 200px;
  width: 700px;
  margin-top: 357px;
  margin-left: 100px;
}
.zy {
  font-size: 25px;
  color: rgb(222, 222, 222);
  position: absolute;
  top: 25px;
  left: 80px;
}
.web2 {
  height: 100px;
  width: 300px;
  margin-left: 100px;
  position: relative;
}
.web1 {
  height: 937px;
}
</style>
