<template>
  <div class="xgSelect">
    <el-input
      v-popover:popover
      placeholder="请输入内容"
      suffix-icon="el-icon-search"
      v-model="input"
      @change="handleChange"
    >
    </el-input>
    <el-popover
      placement="bottom"
      trigger="manual"
      v-model="visible"
    >
    <el-tree :data="treeData" :props="defaultProps"></el-tree>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "xgSelect",
  props: {},
  data() {
    return {
      input: "",
      visible: false,
      treeData: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
    };
  },
  created() {},
  methods: {
    handleChange() {
      console.log(11111)
      this.visible = true;
    },
  },
};
</script>

<style scoped lang="less">
.xgSelect {
  color: black;
}
</style>
