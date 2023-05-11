<template>
  <div>
    <q-btn label="点击" style="background: pink; color: white" @click="opean" />
    <q-dialog v-model="alert">
      <q-card>
        <q-img src="~/assets/food.jpg"></q-img>
        <q-card-section>
          <div class="c text-h6">Cafe Basilico</div>
          <q-rating v-model="stars" :max="5" size="32px" />
          <q-btn round color="primary" icon="place" class="a"></q-btn>
          <div class="e">
            <q-icon name="place"></q-icon>
            250 ft
          </div>
          <div class="b">$・Italian, Cafe</div>
          <div class="d">
            Small plates, salads & sandwiches in an intimate setting.
          </div>
        </q-card-section>
        <q-separator />
        <q-card-section align="right">
          <q-btn flat color="primary" label="RESERVE" @click="close"></q-btn>
          <q-btn flat color="primary" round icon="event" @click="close" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DialogDemo",
  data() {
    return {
      alert: false,
      stars: 3,
    };
  },
  methods: {
    opean() {
      this.alert = true;
    },
    close() {
      this.alert = false;
    },
  },
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
