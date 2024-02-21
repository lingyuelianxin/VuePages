<template>
  <div class="xgDatePicker">
    <el-date-picker
     ref="picker"
      v-model="value1"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      @focus="handleFocus"
    >
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: "xgDatePicker",
  props: {},
  data() {
    return {
      value1: "",
    };
  },
  created() {
  },
  methods: {
    handleFocus(){
      this.datePickerFocus()
    },
    datePickerFocus() {
      // 简单写个判断避免重复创建
      if (!this.insertButton) {
        this.$nextTick(() => {
          // 获得要插入的目标dom 这一步要靠控制台筛选元素自己去找到位置进行筛选，每个组件都不同
          const targetElRight = document.querySelector(".is-right");
          console.log(1,document.querySelector("is-right"))

          // 创建清空按钮 可以自定义类跟样式
          const btnBox = document.createElement("div");
          const btnCancel = document.createElement("div");
          const btnApply = document.createElement("div");
          btnBox.setAttribute("style","display: flex !important;justify-content: end !important;")
          btnCancel.setAttribute("style","background: #FFFFFF;border-radius: 4px;padding: 12px 16px;color: #8B8B96;font-size: 12px;border: 1px solid #8B8B96")
          btnApply.setAttribute("style","apply")
          btnCancel.innerHTML = "Cancel"
          btnApply.innerHTML = "Apply";

          // 把清空按钮插入目标dom的前面
          targetElRight.insertBefore(btnBox, targetElRight.children[2]);
          btnBox.insertBefore(btnCancel,btnBox.children[0])
          btnBox.insertBefore(btnApply,btnBox.children[1])
          // 避免重复创建标记
          this.insertButton = true;

          // 监听按钮点击事件 这里是点击了把值清空
          btnCancel.onclick = () => {
              console.log("cancel")
          };
          btnApply.onclick = () => {
              console.log("btnApply")
          };
        });
      }
    },
  },
};
</script>

<style scoped lang="less">
.xgDatePicker {
  color: black;
}
//   /deep/ .el-input__icon:after{
//       content:'\e78e'
//   }
// 日期样式
// .el-range-editor--small.el-input__inner {
//   height: 30px;
//   padding: 3px 0px;
// }
/deep/.el-date-editor .el-range-separator {
  color: #979797 !important;
  width: 8%;
  font-size: 12px;
}
/deep/ .el-date-editor .el-range__icon {
  position: absolute;
  right: 5px;
  top: 1px;
  color: #c0c4cc;
}
/deep/.el-date-editor--daterange.el-input__inner {
  width: 338px;
}
/deep/.el-range-editor--small .el-range-input {
  font-size: 12px;
}
.btnBox{
    display: flex !important;
    justify-content: end !important;
}
.cancel{
    background: #FFFFFF !important;
    border-radius: 4px !important;
    padding: 12px 16px !important;
    color: #8B8B96 !important;
    font-size: 12px !important;
    border: 1px solid #8B8B96 !important;
}
.apply{
    background: #055DDB;
    border: 1px solid #055DDB;
    border-radius: 4px;
    padding: 12px 16px;
    color: #FFFFFF;
    font-size: 12px;
}
</style>
