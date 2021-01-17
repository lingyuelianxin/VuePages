<template>
  <div class="popover">
    <el-popover
    placement="top"
    width="200"
    trigger="click"
    popper-class="popper1"
    content="这是一段内容1。">
      <el-button slot="reference">click  激活1</el-button>
    </el-popover>
    <el-popover
    placement="top"
    width="200"
    trigger="click"
    popper-class="popper2"
    content="这是一段内容2。">
      <el-button slot="reference">click  激活2</el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "popover",
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less">
.el-popover.popper1 {
  color: #42b983;
}
.el-popover.popper2 {
  color: red;
}
</style>
