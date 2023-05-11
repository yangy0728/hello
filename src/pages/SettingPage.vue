<template>
<router-view />

<van-tabbar v-model="active" route>
  <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item replace to="/search" icon="search">搜索</van-tabbar-item>
</van-tabbar>

</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SettingPage",
  data() {
  
    return {
    active:1
    };
  },
  methods: {
  
  },
});
</script>