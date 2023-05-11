<template>
  <div>
    <q-btn
      class="b"
      style="background: #ff0080; color: white"
      label="底部弹出"
      @click="bottom"
    />
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BottomSheet",
  data() {
    return {
    };
  },
  methods: {
    bottom(){
      this.$q.bottomSheet({
        message: '底部菜单',
        actions:[
          {
        label:'菜单一',
        id:'101'
        },
        {
          label:'菜单2',
          id:'305'
        }
      ]
      })
    }
  }
});
</script>
<style>
.e {
  position: absolute;
  right: 24px;
  top: 25px;
}
.a {
  position: absolute;
  top: 0;
  right: 24px;
  transform: translateY(-50%);
}
.c {
  font-size: 20px;
}
.b {
  margin-top: 30px;
  font-size: 16px;
}
.d {
  color: rgb(194, 190, 190);
  margin-top: 5px;
  font-size: 10px;
}
.e {
  color: rgb(194, 190, 190);
}
</style>
