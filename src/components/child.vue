<template>
  <div class="child">
      <div class="child" @click="childClick">{{faterToChild}}</div>
  </div>
</template>

<script>
export default {
  name: "child",
  props: ['faterToChild'],
  data() {
    return {
    };
  },
  created(){
  },
  methods: {
      childClick(){
          this.$emit('childToFather',"子传父")
      }
  },
};
</script>

<style scoped lang="less">
.child{
    cursor: pointer;
}
</style>
