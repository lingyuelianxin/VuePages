<template>
  <div class="home">
    <!-- <popover />
    <tabs /> -->
    <!-- <child :faterToChild="faterToChildData" @childToFather="getChildData" />
    {{childToFatherData}} -->
    <!-- <xgSelect /> -->
    <!-- <xgDatePicker/> -->
    <!-- <exportExcel/> -->
    <!-- ---{{searchText}} -->
    <!-- <webStorege v-model="searchText"/> -->
    <h1 @click="onSubmit">防抖</h1>
    <h1 @click="onSubmit1">节流</h1>
    <!-- <slotTemp>
      <template v-slot:topSlot>topSlot</template>
      <template v-slot:leftSlot="slotLeftFather"><div>{{slotLeftFather.slotChild.userName}}</div></template>
      <template v-slot:rightSlot="{slotChild}">{{slotChild.userPassword}}</template>  //解构插槽
    </slotTemp> -->
  </div>
</template>

<script>
// import tabs from '../components/tabs.vue'
// import popover from '../components/popover.vue'
// import child from '../components/child.vue'
// import xgSelect from '../components/xgSelect.vue'
// import xgDatePicker from '../components/xgDatePicker.vue'
// import exportExcel from '../components/exportExcel.vue'
import { debounce, throttle, flatten, deepClone , newfunction } from "./utils";
// import webStorege from "../components/webStorege.vue";
// import slotTemp from '../components/slot.vue'
export default {
  name: "Home",
  // components: {tabs,popover},
  // components:{child},
  // components:{xgSelect,xgDatePicker},
  // components:{exportExcel},
  // components:{slotTemp},
  // components: { webStorege },
  data(){
    return{
      // faterToChildData:'父传子',
      // childToFatherData:''
      searchText: "",
    };
  },
  created() {
    newfunction()
    let person = { name: "lili", age: 18 };
    let person3 = { ...person, name: "jack", add: "男" ,age:70}; // 克隆并修改
    console.log(person3); //{name: "jack", age: 70,add: "男"}
    // let arr = ["lisa", "json"];
    // let arrObj = [
    //   { id: 1, name: "lisa" },
    //   { id: 2, name: "json" },
    // ];
    // console.log(arrObj.find((x) => x.id === 1));
    // console.log(arrObj.filter((x) => x.id === 1));
    // var arr = [1, 3, 5, 7, 9];
    // var id = 5;
    // try {
    //   arr.forEach(function (curItem, i) {
    //     if (curItem === 1) return;
    //     console.log(curItem);
    //     if (curItem === id) {
    //       throw Error(); //满足条件，跳出循环
    //     }
    //   });
    // } catch (e) {}
    // let obj={id:1,name:'lisa'}
    // let arr1 = arr.slice(0)
    // let arr2 = [...arr]
    // let arr3 = arr.concat()
    // let arr4 = Object.assign([],arr)
    // console.log(arr.join(';'))
    // arr[1]='jsonmi'
    // console.log(arr,arr1,arr2,arr3,arr4)
    // let arrObj1 = arrObj.slice(0)
    // let arrObj2 = [...arrObj]
    // arrObj.pop()
    // console.log(arrObj,arrObj1,arrObj2)
    // 数组去重
    // let arr=[1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4]
    // let arr = [{id:1,name:'lisa'},{id:2,name:'json'},{id:1,name:'lisa'}]
    // var obj={}
    // var newArr=[]
    // for (let i = 0; i < arr.length; i++) {
    //   console.log(obj,arr[i],obj[arr[i]])
    //     if (!obj[arr[i].id]) {
    //         obj[arr[i].id] = 1
    //         newArr.push(arr[i])
    //     }
    // }
    // console.log(newArr);
    // 结果是[1, 2, 3, 5, 6, 7, 4]
    // for in 循环遍历键名 常遍历对象
    // for(let k in arr){
    //   console.log('key',k)//0,1
    //   console.log('value',arr[k])//lisa,json
    // }
    // for(let k in arrObj){
    //   console.log('key',k) // 0,1
    //   console.log('item',arrObj[k]) //{id:1,name:'lisa'},{id:2,name:'json'}
    // }
    // for(let k in obj){
    //   console.log('key',k)//id,name
    //   console.log('value',obj[k])//1,lisa
    // }
    // for of 循环遍历键值
    // for(let i of arrObj){
    //   console.log('item',i) //{id:1,name:'lisa'},{id:2,name:'json'}
    // }
    // arrObj.forEach((k,i)=>{
    //   console.log('key',k)//0,1
    //   console.log('item',i) //{id:1,name:'lisa'},{id:2,name:'json'}
    // })

    // console.log([1, 2, [3, [4, 5]]].flat(),[1, 2, [3, [4, 5]]].flat(2),[1, 2, [3, [4, 5]]].flat(Infinity))
    // console.log(flatten([1, 2, [3, [4, 5]]]))
    // console.log(deepClone([1]))
  },
  methods: {
    // getChildData:function(val){
    //   console.log(val)
    //   this.childToFatherData = val
    // }
    onSubmit: debounce(() => {
      console.log(`测试防抖`);
    }, 1000),
    onSubmit1: throttle(() => {
      console.log(`测试节流`);
    }, 1000),
  },
};
</script>
<style lang="less" scoped>

</style>
