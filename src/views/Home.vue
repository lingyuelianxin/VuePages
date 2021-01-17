<template>
  <div class="home">
    <!-- <popover />
    <tabs /> -->
    <!-- <child :faterToChild="faterToChildData" @childToFather="getChildData" />
    {{childToFatherData}} -->
  </div>
</template>

<script>
// import tabs from '../components/tabs.vue'
// import popover from '../components/popover.vue'
// import child from '../components/child.vue'
export default {
  name: 'Home',
  // components: {tabs,popover},
  // components:{child},
  data(){
    return{
      // faterToChildData:'父传子',
      // childToFatherData:''
    }
  },
  methods:{
    // getChildData:function(val){
    //   console.log(val)
    //   this.childToFatherData = val
    // }
  }
}
</script>
<style lang="less" scoped>
</style>
