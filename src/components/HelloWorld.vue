<!--
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lijiancong
 * @Date: 2022-08-06 14:50:54
 * @LastEditors: lijiancong
 * @LastEditTime: 2022-08-12 18:17:14
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-header :class="{headerBg:(key == '/product' || key == '/culture')}">
        <div class="logo"><img src="../assets/PowerDatas.png" alt="PowerDatas"></div>
        <div style="height: 100%;display: flex;align-items: center;">
          <Menu></Menu>
        <el-button style="margin-right: 60px;" type="primary" @click="centerDialogVisible = true">产品体验</el-button>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-dialog v-model="centerDialogVisible" title="Powerdatas数字化能力构建者" width="420px">
    <p>请留下你的联系方式，我们会尽快联系您</p>
    <el-form :model="form" label-width="80px">
      <el-form-item label="公司名称:">
        <el-input v-model="form.companyName" />
      </el-form-item>
      <el-form-item label="公司行业:">
        <el-input v-model="form.companyIndustry" />
      </el-form-item>
      <el-form-item label="客户姓名:">
        <el-input v-model="form.customerName" />
      </el-form-item>
      <el-form-item label="手机号码:">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="联系邮箱:">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="验证码:">
        <el-input v-model="form.verificationCode" />
      </el-form-item>
      <el-form-item>
        <el-button style="width: 100%;" type="primary" @click="onSubmit">提 交</el-button>
        <!-- <el-button>Cancel</el-button> -->
      </el-form-item>
    </el-form>
    <!-- <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false"
          >Confirm</el-button
        >
      </span>
    </template> -->
  </el-dialog>
  </div>
</template>
<script setup>
import { ref,reactive,onMounted,watch,getCurrentInstance } from 'vue'
import {useRouter} from 'vue-router'
import Menu from './menu.vue'
const router = useRouter()
const instance = getCurrentInstance()?.proxy;
const key = ref(null)
const form = reactive({
  companyName: '',
  companyIndustry: '',
  customerName: '',
  phone: '',
  email: '',
  verificationCode: '',
})
const centerDialogVisible = ref(false)
const onSubmit = () => {
  // console.log('submit!')
  instance.$message.success('我们已经收到您提交的信息，正在尽快为您处理.')
  centerDialogVisible.value = false
}
onMounted(() => {
  key.value = router.currentRoute.value.path
})
watch(
    () => router.currentRoute.value.path,
    (val) => {
      key.value = val
    }
  );
</script>
<style scoped>
.common-layout{
  height: 100%;
}
.el-container{
  min-height: 100%;
}
.el-header {
  height: 90px;
  padding: 0;
  background-color: #000D1B;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.el-main{
  /* height: calc(100% - 120px); */
  padding: 0;
}
.el-footer{
  position: relative;
  background-color: rgba(0, 0, 0, 1);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo{
  width: 200px;
  height: 50%;
  padding: 5px 20px;
  box-sizing: border-box;
  cursor: pointer;
  margin-left: 60px;
}
.logo img{
  width: 100%;
  height: 100%;
}
.fleft{
  position: absolute;
  top: 0;
  left: 60px;
  width: 350px;
  height: 100%;
}
.text{
  height: 30px;
  line-height: 30px;
}
.headerBg{
  background-color: #465667;
}
.footerBg{
  background-color: rgba(0, 19, 39, .8);
}
.common-layout :deep(.el-dialog) {
  border-radius: 8px !important;
}
.common-layout :deep(.el-dialog) .el-dialog__body{
  padding-top: 0 !important;
  color: #000;
}
.common-layout :deep(.el-dialog) .el-dialog__title{
  font-weight: 600;
}
.common-layout :deep(.el-form) .el-form-item__label{
  color: #000;
}
.common-layout :deep(.el-dialog) button:focus, button:focus-visible{
  outline: none;
}
</style>
