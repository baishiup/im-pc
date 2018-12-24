<template>
  <div id="Talk">
    <ul class="list">
      <!-- <TalkItem
        v-for="(it,i) in 60"
        :key="i"
        :class="{'active':index == i}"
        @click.native="index=i"
      >{{i}}</TalkItem> -->
      <li
        v-for="it in 60"
        :key="it"
        :class="{'active':index == it}"
        @click="handldTalk(it)"
      >{{it}}</li>
    </ul>
    <div class="container">
      <Message></Message>
      <Txt></Txt>
    </div>
  </div>
</template>
<script>
import Message from "./Message";
import Txt from "./Txt";
export default {
  name: "Talk",
  components: {
    Message,
    Txt
  },
  data() {
    return {
      index: ""
    };
  },
  methods: {
    handldTalk(it) {
      this.index = it;
    }
  }
};
</script>
<style lang="less" scoped>
@import url("./index.less");
</style>
