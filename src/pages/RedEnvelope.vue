<template>
  <q-btn
    style="background: pink; color: white"
    label="点击"
    @click="envelope"
  />
  <div v-if="opean" class="b coolumn" @click="close">
    <q-img class="c" src="~/src/layouts/红包.jpg" @click="stop" />
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "RedEnvelope",
  data() {
    return {
      opean: false,
    };
  },
  methods: {
    envelope() {
      this.opean = true;
    },
    close() {
      this.opean = false;
    },
    stop(event) {
      event.stopPropagation();
      this.$router.push("/");
    },
  },
});
</script>
<style scoped>
.b {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.c {
  height: 460px;
  width: 380px;
  margin: 20px;
}
</style>
