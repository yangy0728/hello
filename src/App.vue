<template>
  <router-view v-slot="{ Component }">
    <transition name="slide">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script scoped>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
<style>
.slide-enter-from {
  position: fixed;
  top: 0;
  z-index: 1;
  transform: translateX(100%);
}
.slide-enter-active {
  transition: transform 1s;
}
.slide-enter-to {
  position: fixed;
  top: 0;
  z-index: 1;
  transform: translateX(0);
}
.slide-leave-from {
  position: fixed;
  z-index: -1;
  transform: translateX(0);
}
.slide-leave-active {
  transition: transform 2s;
}
.slide-leave-to {
  position: fixed;
  z-index: -1;
  transform: translateX(-100%);
}
</style>
