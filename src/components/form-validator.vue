<template>
  <div class="formValidator">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
    >
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="ruleForm.userName"></el-input>
      </el-form-item>
        <el-form-item label="密码" prop="passWord">
        <el-input v-model="ruleForm.passWord"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="passWordAgain">
        <el-input v-model="ruleForm.passWordAgain"></el-input>
      </el-form-item>

      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="美食线上活动" name="type"></el-checkbox>
        <el-checkbox label="地推活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "formValidator",
  props: {},
  data() {
    // 包含特殊字符的函数
    const checkSpecificKey = str => {
      var specialKey =
        "[`~!#$^&*()=|{}':;',\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘'";
      for (var i = 0; i < str.length; i++) {
        if (specialKey.indexOf(str.substr(i, 1)) != -1) {
          return false;
        }
      }
      return true;
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 3 || value.length > 6) {
        callback(new Error("密码长度3-6位"));
      } else if (!checkSpecificKey(value)) {
        callback(new Error("密码不能包含特殊字符"));
      } else {
        callback();
      }
      };
    var validatePassAgain = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if(value !== this.ruleForm.passWord) {
          callback(new Error('两次输入密码不一致!'));
      } else {
          callback();
      }
      };
    return {
      ruleForm: {
          userName:'',
          passWord:'',
          passWordAgain:'',
          type:[]
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        passWord:[
            {required:true,trigger:'blur',validator:validatePass}
        ],
        passWordAgain:[
            {required:true,trigger:'blur',validator:validatePassAgain}
        ],
        type:[
            {type:"array",required:true,message:"至少选择一个",trigger:"change"}
        ]
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less">
.formValidator{
    width: 600px;
}
</style>
