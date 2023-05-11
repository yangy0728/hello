<!-- <template>
  <div class="column b">
    <div class="b1">
      <div class="row">
        <text class="order-number-text">35466</text>
        <div class="order-number-icon-1">取餐码</div>
        <div class="order-number-icon-2">支付宝小程序</div>
      </div>
      <div class="text-2">您的订单已完成，欢迎你再来</div>
      <div class="row qr-code-c">
        <div class="coulmn">
          <div class="col1">北京建金餐厅福利群</div>
          <br />
          <div class="col11"><li>会员日福利抢先领</li></div>
          <div class="col111"><li>福利官每日实力宠粉</li></div>
          <br />
          <div class="col1111">长按保存，微信内扫一扫加群</div>
        </div>
        <div class="col2"></div>
      </div>
      <div class="row activity-c">
        <div class="colum">
          <div class="row">
            <div class="act1">麦乐送</div>
            <div class="act11">大挑战</div>
          </div>
          <div class="row">
            <div class="act2">获取600元赢大奖</div>
            <div class="act22">GO</div>
          </div>
        </div>
        <div class="act3"></div>
      </div>

      <div class="column order-datil-c">
        <text class="da1" style="align-self: flex-start"
          >北京麦当劳建金餐厅</text
        >
        <div class="row c">
          <div class="row">
            <div class="da2222" style="align-self: flex-start"></div>
            <div class="column">
              <text class="da2"> 双层吉士汉堡超值搭配 </text>
              <text class="da221">1 X 随心配双层吉士</text>
              <text class="da22">1 X 随心配中零度可乐</text>
              <text class="da222">1份</text>
            </div>
          </div>
          <text class="da3" style="align-self: flex-start">￥12 </text>
          <div class="row">
            <div class="da2222" style="align-self: flex-start"></div>
            <div class="column">
              <text class="da2"> 双层吉士汉堡超值搭配 </text>
              <text class="da221">1 X 随心配双层吉士</text>
              <text class="da22">1 X 随心配中零度可乐</text>
              <text class="da222">1份</text>
            </div>
          </div>

          <text class="da31">￥12</text>
        </div>
      </div>

      <div class="row a">
        <div class="a1">···</div>
        <div class="a2">联系客服</div>
        <div class="a3">开发票</div>
        <div class="a4">再来一单</div>
      </div>
      <div class="d"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "MainLayout",
});
</script>
<style>
.b1 {
  height: 214px;
  background-size: 100% 100%;
  background-image: url(5.jpg);
}
.d {
  height: 100px;
  margin-right: 20px;
  margin-left: 20px;
  border-radius: 10px;
  background-color: white;
}
.c {
  justify-content: space-between;
}
.a4 {
  font-size: 14px;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 10px;
  width: 100px;
  height: 30px;
  padding-top: 5px;
  background-color: rgb(255, 199, 57);
  border-radius: 20px;
  padding-left: 14px;
  padding-right: 10px;
  text-align: center;
}
.a3 {
  font-size: 14px;
  margin-left: 10px;
  margin-top: 10px;
  width: 100px;
  height: 30px;
  padding-top: 5px;
  background-color: white;
  border-radius: 20px;
  padding-left: 25px;
  padding-right: 10px;
  border: solid black 1px;
}
.a2 {
  font-size: 14px;
  margin-left: 10px;
  margin-top: 10px;
  width: 100px;
  height: 30px;
  padding-top: 5px;
  background-color: white;
  border-radius: 20px;
  padding-left: 14px;
  padding-right: 10px;
  border: solid black 1px;
  text-align: center;
}
.a1 {
  font-size: 35px;
  color: gray;
  margin-left: 10px;
  /* padding-top: 5px; */
  height: 50px;
}
.a {
  width: 100%;
  height: 50px;
  background-color: ghostwhite;
  justify-content: space-between;
  flex-direction: row;
  position: fixed;
  bottom: 0;
}
.da4 {
  width: 60px;
  height: 60px;
  margin-left: 10px;
  margin-top: 10px;
  background-size: 100% 100%;
  /* display: flex; */
  background-image: url("4.jpg");
}
.da31 {
  font-weight: bold;
  font-size: 10px;
  margin-top: 90px;
  margin-right: 10px;
}
.da3 {
  font-weight: bold;
  font-size: 10px;
  margin-top: 88px;
  margin-right: 10px;
}
.da1 {
  font-weight: bold;
  font-size: 16px;
  padding-left: 27px;
  padding-top: 10px;
}
.da2 {
  font-weight: bold;
  font-size: 16px;
  margin-left: 10px;
  padding-top: 17px;
}
.da221 {
  font-size: 10px;
  color: gray;
  margin-left: 2px;
  padding-top: 6px;
}

.da22 {
  font-size: 10px;
  color: gray;
  margin-left: 2px;
}
.da222 {
  font-weight: bold;
  font-size: 10px;
  padding-top: 6px;
  margin-left: 2px;
}
.da2222 {
  width: 60px;
  height: 60px;
  margin-left: 30px;
  margin-top: 20px;
  background-size: 100% 100%;
  /* display: flex; */
  background-image: url("3.jpg");
}
.act1 {
  font-weight: bold;
  font-size: 16px;
  padding-left: 10px;
  padding-top: 20px;
}
.act11 {
  font-weight: bold;
  padding-top: 20px;
  font-size: 16px;
  color: red;
}
.act2 {
  font-size: 4px;
  padding-left: 10px;
}
.act22 {
  font-size: 4px;
  padding-left: 10px;
  margin-left: 4px;
  height: 14px;
  margin-top: 2px;
  background-color: red;
  border-radius: 10px;
  padding-left: 8px;
  padding-right: 8px;
  color: white;
}
.act3 {
  width: 100px;
  height: 100%;
  background-size: 100% 100%;
  /* display: flex; */
  background-image: url("2.jpg");
}
.text-2 {
  padding-left: 22px;
}
.b {
  display: flex;
  flex-direction: column;
  height: 799px;
  background-color: rgb(235, 235, 235);
  position: relative;
}
.col1 {
  font-weight: bold;
  font-size: 18px;
  padding-left: 10px;
  padding-top: 20px;
}
.col11 {
  font-size: 4px;
  color: gray;
  padding-left: 10px;
}
.col111 {
  font-size: 4px;
  color: gray;
  padding-left: 10px;
}
.col1111 {
  font-size: 4px;
  color: gray;
  padding-left: 10px;
  padding-top: 10px;
}
.col2 {
  width: 120px;
  height: 120px;
  background-size: 100% 100%;
  margin-top: 20px;
  margin-right: 10px;
  /* display: flex; */
  background-image: url("1.jpg");
}
.order-number-icon-1 {
  margin-left: 10px;
  margin-top: 24px;
  padding-left: 10px;
  height: 20px;
  background-color: red;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-left: 8px;
  padding-right: 8px;
  color: white;
}
.order-number-icon-2 {
  margin-left: 10px;
  margin-top: 24px;
  padding-left: 10px;
  height: 20px;
  background-color: rgb(255, 199, 57);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-left: 8px;
  padding-right: 8px;
}
.order-number-text {
  font-size: 40px;
  font-weight: bold;
  padding-left: 20px;
}
.qr-code-c {
  background-color: white;
  height: 160px;
  /* width: 350px; */
  margin-top: 10px;
  margin-right: 20px;
  margin-left: 20px;
  border: 10px;
  border-radius: 10px;
  justify-content: space-between;
  flex-direction: row;
}
.activity-c {
  background-color: white;
  height: 80px;
  /* width: 350px; */
  margin-top: 10px;
  margin-right: 20px;
  margin-left: 20px;
  border-radius: 10px;
  justify-content: space-between;
  flex-direction: row;
}
.order-datil-c {
  background-color: white;
  /* width: 350px; */
  height: 300px;
  margin-top: 10px;
  margin-right: 20px;
  margin-left: 20px;
  border-radius: 10px;
  align-content: flex-start;
  display: flex;
}
</style> -->
<template>
  <div>
    <q-btn
      style="background: #ff0080; color: white"
      label="点击"
      @click="envelope"
    />
    <q-btn
      style="background: blue; color: white; margin-left: 10px"
      label="底部弹出"
      @click="bottom"
    />
    <q-btn
      style="background: pink; color: white; margin-left: 10px"
      label="列表"
      @click="list"
    />
    <q-btn
      style="background: palevioletred; color: white; margin-left: 10px"
      label="复选框"
      @click="kuang"
    />
    <q-btn
      style="background: palegreen; color: white; margin-left: 10px"
      label="Bar"
      @click="vant"
    />
    <q-btn
      style="background: palegreen; color: white; margin-left: 10px"
      label="set"
      @click="set"
    />
    <q-btn
      style="background: palegreen; color: white; margin-left: 10px"
      label="mai"
      @click="mai"
    />
    <q-btn
      style="background: palegreen; color: white; margin-left: 10px"
      label="e"
      @click="e"
    />
    <q-btn
      style="background: palegreen; color: white; margin-left: 10px"
      label="w"
      @click="w"
    />
    <q-btn
      style="background: palegreen; color: white; margin-left: 10px"
      label="j"
      @click="j"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",
  methods: {
    envelope() {
      this.$router.push("/red-envelpoe");
    },
    bottom() {
      this.$router.push("/bottom-sheet");
    },
    list() {
      this.$router.push("/listItem");
    },
    kuang() {
      this.$router.push("/fromcomponents");
    },
    vant() {
      this.$router.push("/vant");
    },
    set() {
      this.$router.push("/setting");
    },
    mai() {
      this.$router.push("/mai");
    },
    e() {
      this.$router.push("/Echart");
    },
    w() {
      this.$router.push("/Web");
    },
    j() {
      this.$router.push("/J");
    },
  },
});
</script>

<style>
/* .b {
  margin: 20px;
} */
</style>
