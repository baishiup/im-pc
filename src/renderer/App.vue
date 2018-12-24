<template>
  <div id="app">
    <Navigation
      class="nav"
      v-model="index"
    ></Navigation>
    <div class="container">
      <Talk v-show="index == 0"></Talk>
      <Friend v-show="index == 1"></Friend>
      <Application v-show="index == 2"></Application>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";

import Talk from "./view/Talk";
import Friend from "./view/Friend";
import Application from "./view/Application";

export default {
  name: "im-pc",
  components: {
    Navigation,
    Talk,
    Friend,
    Application
  },
  data() {
    return {
      index: 0
    };
  }
};
</script>
<style lang="less" scoped>
#app {
  display: flex;
  .nav {
    width: 70px;
  }
  .container {
    flex: 1;
    height: 100%;
  }
}
</style>

