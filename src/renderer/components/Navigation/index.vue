<template>
  <div id="Navigation">
    <div class="pic">
      <img
        src="../../assets/img/pic.png"
        alt=""
      >
    </div>
    <ul>
      <li
        @click="change(0)"
        :class="{'active':value==0}"
      ></li>
      <li
        @click="change(1)"
        :class="{'active':value==1}"
      ></li>
      <li
        @click="change(2)"
        :class="{'active':value==2}"
      ></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Navigation",
  props: ["value"],
  methods: {
    change(index) {
      this.$emit("input", index);
    }
  }
};
</script>


<style lang="less" scoped>
@import url("./index.less");
</style>
