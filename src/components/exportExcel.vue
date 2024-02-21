// vue中的代码
<template>
  <button class="hello" @click="exportExcel">export</button>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      anchorTable: [
        {
          classBook: "",
          className: "",
          endTime: "",
          errorDescribe: "教师账号已注册",
          organName: "",
          startTime: "",
          studentName: "",
          studentNo: "",
          teacherName: "fghfdh",
          teacherOrgan: "苏州新东方",
          teacherPhone: "13245455345",
        },
        {
          classBook: "",
          className: "",
          endTime: "",
          errorDescribe: "教师账号已注册",
          organName: "",
          startTime: "",
          studentName: "",
          studentNo: "",
          teacherName: "fghfdh",
          teacherOrgan: "苏州新东方",
          teacherPhone: "13245455345",
        },
        {
          classBook: "",
          className: "",
          endTime: "",
          errorDescribe: "教师账号已注册",
          organName: "",
          startTime: "",
          studentName: "",
          studentNo: "",
          teacherName: "fghfdh",
          teacherOrgan: "苏州新东方",
          teacherPhone: "13245455345",
        },
        {
          classBook: "",
          className: "",
          endTime: "",
          errorDescribe: "教师账号已注册",
          organName: "",
          startTime: "",
          studentName: "",
          studentNo: "",
          teacherName: "xcvbxv",
          teacherOrgan: "苏州新东方",
          teacherPhone: "13453455355",
        },
      ],
    };
  },
  mounted() {
  },
  methods: {
    exportExcel() {
      import("@/vendor/excelOut").then((excel) => {
        const tHeader = ["船名", "船长", "货种", "载重吨", "净吨"]; //表头
        const title = ["锚地船舶", "", "", "", ""]; //标题
        //表头对应字段
        const filterVal = [
          "errorDescribe",
          "teacherName",
          "teacherOrgan",
          "teacherPhone",
          "organName",
        ];
        const list = this.anchorTable;
        const data = this.formatJson(filterVal, list);
        data.map((item) => {
          // console.log(item)
          item.map((i, index) => {
            if (!i) {
              item[index] = "";
            }
          });
        });
        const merges = ["A1:E1"]; //合并单元格
        excel.export_json_to_excel({
          title: title,
          header: tHeader,
          data,
          merges,
          filename: "锚地船舶",
          autoWidth: true,
          bookType: "xlsx",
          myRowFont: "2",
        });
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) => filterVal.map((j) => v[j]));
    },

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>