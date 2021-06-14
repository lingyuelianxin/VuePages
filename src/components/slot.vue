<template>
  <div class="solt">
      <div>插槽的使用</div>
      <div class="box">
          <slot name="topSlot" /><!-- 具名插槽 -->
          <div class="flex">
              <slot v-bind:slotChild="slotData" name="leftSlot" /><!-- 作用域插槽 -->
              <slot v-bind:slotChild="slotData" name="rightSlot" /><!-- 解构插槽 -->
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "slotTemp",
  props: [],
  data() {
    return {
      slotData:{userName:'slotName',userPassword:'userPassword'}
    };
  },
  created(){
  },
  methods: {
     
  },
};
</script>

<style scoped lang="less">
.solt{
    width:600px;
    height: 400px;
    border: 1px black solid;
}
.box{
    margin-top:60px;
}
.flex{
    display: flex;
    justify-content: space-between;
}
</style>
