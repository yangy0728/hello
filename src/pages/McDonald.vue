<template>
    <div class="page">
        <div class="header">
            <div class="back-icon-c">
                <q-img class="back-icon" />
                <text class="back-text">麦乐送</text>
            </div>
            <div>
                <q-img class="shopping-cart-icon "/>
                <q-img class="more-icon"/>
            </div>
        </div>
        <div class="tab-view">
            <div class="tab">
                <div class="bottom-line" />
                <text class="tab-text">促销产品&热卖</text>
            </div>
            <div class="v-line" />
            <div class="tab">
                <text class="tab-text">主食</text>
            </div>
            <div class="tab">
                <text class="tab-text">小食</text>
            </div>
        </div>

        <q-list class="goods-list" bordered separator>
            <q-item class="goodItem" v-for="item in goodsList" :key="item.id">
                <q-img class="goods-image" :src="item.image" />
                <div class="column">
                    <text>{{ item.title }}</text>
                    <text>￥{{ item.price }}起</text>
                </div>
            </q-item>
      </q-list>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'
import { BASE_URL } from '../constant/network'

export default defineComponent({
  name: 'McDonald',
  data () {
    return {
      goodsList: []
    }
  },
  methods: {

  },
  mounted () {
    // axios({
    //   method: 'get', // post put
    //   url: 'http://localhost:3000/posts'
    // }).then((res) => {
    //   console.log(res)
    // })
    axios.get(BASE_URL + '/mcdonalds').then(
      (data) => {
        this.goodsList = data.data
      }
    )

    // 创建新的商品
    // axios.post(BASE_URL + '/mcdonalds', {
    //   id: 4,
    //   image: 'https://pic.ntimg.cn/file/20201201/12703668_091228303084_2.jpg',
    //   title: '汉堡000',
    //   price: 6.00

    // }).then(
    //   (res) => {

    //   }
    // )

    // 修改商品信息
    axios.put(BASE_URL + '/mcdonalds/4', {
      image: 'https://pic.ntimg.cn/file/20201201/12703668_091228303084_2.jpg',
      title: '汉堡123',
      price: 16.00

    }).then(
      (res) => {

      }
    )
  }
})
</script>

<style scoped>
    .page {
        display: flex;
        flex-direction: column;
    }
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgb(221, 0, 0);
        width: 100%;
        height: 60px;
    }

    .back-icon {
        width: 32px;
        height: 32px;
        background: grey;
        margin: 8px;
    }
    .back-text {
        color: white;
        font-size: 22px;
    }
    .shopping-cart-icon {
        width: 32px;
        height: 32px;
        background: grey;
        margin: 20px;
    }
    .more-icon {
        width: 6px;
        height: 32px;
        background: grey;
        margin: 30px;
    }

    .back-icon-c {
        display: flex;
        align-items: center;
    }
    .tab-view {
        display: flex;
        align-items: center;
        background: rgb(169, 0, 0);
        width: 100%;
        height: 60px;
    }
    .tab {
        height: 100%;
        position: relative;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .tab-text {
        color: white;
        font-size: 16px;
        font-weight: bold;
    }
    .v-line {
        width: 1px;
        height: 28px;
        background: white;
    }
    .bottom-line {
        position: absolute;
        width: 100%;
        height: 6px;
        background: red;
        bottom: 0;
    }
    .goodItem {
        display: flex;

    }
    .goods-image {
        width: 72px;
        height: 72px;
    }
</style>
