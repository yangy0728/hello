<template>
  <div class="q-pa-md">
    <q-btn
      style="background: pink; color: white; margin-left: 10px"
      label="返回"
      @click="kuang"
    />
    <div class="q-gutter-sm">
      <q-radio v-model="shape" val="line" label="Line" />
      <q-radio v-model="shape" val="rectangle" label="Rectangle" />
      <q-radio v-model="shape" val="ellipse" label="Ellipse" />
      <q-radio v-model="shape" val="polygon" label="Polygon" />
    </div>

    <div class="q-px-sm">
      Your selection is: <strong>{{ shape }}</strong>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FromCommponents",
  data() {
    return {
      shape: "line",
    };
  },
  methods: {
    kuang() {
      this.$router.go(-1);
    },
  },
});
</script>
