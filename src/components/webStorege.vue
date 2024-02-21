<template>
  <div class="webStorege">
    <!-- <button @click="setLocal">localStorege</button>
    <button @click="setSession">sessionStorege</button> -->
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "webStorege",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  created() {
    var name = "一尾流莺";
    var obj = {
      name: "warbler",
    };
    function foo() {
      console.log(this.name);
      return "success";
    }
    foo.call(obj); //=> warbler
    console.log(foo.call(obj));
  },
  methods: {
    setLocal() {
      localStorage.setItem("type", "localStorege");
    },
    setSession() {
      sessionStorage.setItem("type", "sessionStorege");
    },
  },
};
</script>

<style scoped lang="less">
</style>
