<template>
  <div id="app">
    <Header />
    <transition>
      <router-view class="container" />
    </transition>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600&display=swap");
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
.container {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 0px 5px;
}
#app {
  font-family: "Josefin Sans", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate3d(-100px, 0, 0);
}
.v-enter-active,
.v-levar-active {
  transition: all 0.5s;
}
</style>
