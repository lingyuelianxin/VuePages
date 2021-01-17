<template>
  <div class="tabs">
    <div class="tabsWrap">
      <div
        v-for="(item, index) in tabs"
        :key="index"
        :class="cur == index ? 'groupsBox' : 'shopsBox'"
        @click="changeTabs(index)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="showBox" v-show="cur == 0">Shops</div>
    <div class="showBox" v-show="cur == 1">Shops Groups</div>
  </div>
</template>

<script>
export default {
  name: "tabs",
  props: {},
  data() {
    return {
      cur: 0,
      tabs: [{ name: "Shops" }, { name: "Shops Groups" }],
    };
  },
  methods: {
    changeTabs(index) {
      console.log(index);
      this.cur = index;
    },
  },
};
</script>

<style scoped lang="less">
.tabsWrap {
  display: flex;
  width: 280px;
  height: 38px;
  background: #c4c4c4;
  border-radius: 8px;
}
.shopsBox {
  width: 140px;
  height: 38px;
  border-radius: 8px;
  color: #44444f;
  line-height: 38px;
}
.groupsBox {
  width: 140px;
  height: 38px;
  border-radius: 8px;
  background: #0062ff;
  color: white;
  line-height: 38px;
}
.showBox {
  width: 300px;
  height: 300px;
  border: 1px solid red;
  color: black;
  margin-top: 20px;
}
</style>
