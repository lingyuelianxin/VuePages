<template>
  <div class="home">
    <!-- <popover />
    <tabs /> -->
    <!-- <child :faterToChild="faterToChildData" @childToFather="getChildData" />
    {{childToFatherData}} -->
    <slotTemp>
      <template v-slot:topSlot>topSlot</template>
      <template v-slot:leftSlot="slotLeftFather"><div>{{slotLeftFather.slotChild.userName}}</div></template>
      <template v-slot:rightSlot="{slotChild}">{{slotChild.userPassword}}</template><!-- 解构插槽 -->
    </slotTemp>
  </div>
</template>

<script>
// import tabs from '../components/tabs.vue'
// import popover from '../components/popover.vue'
// import child from '../components/child.vue'
import slotTemp from '../components/slot.vue'
export default {
  name: 'Home',
  // components: {tabs,popover},
  // components:{child},
  components:{slotTemp},
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
