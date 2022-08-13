<!--
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lijiancong
 * @Date: 2022-08-10 18:18:24
 * @LastEditors: lijiancong
 * @LastEditTime: 2022-08-12 15:14:41
-->
<script setup>
import { ref } from 'vue'

const count = ref(100)
</script>

<template>
  <div class="main">
    <div class="title">
      <span style="color: #000;font-size: 36px;font-weight: 600;margin-bottom: 10px;">企业价值观</span>
      <p style="color: #666666;">OPRPORATE VALUES </p>
    </div>
    <div class="banner">
      <el-row :gutter="60">
        <el-col :span="8"><div class="list"><img src="../assets/客户第一.png" alt=""><div class="list-text">客户第一</div></div></el-col>
        <el-col :span="8"><div class="list"><img src="../assets/相互成就.png" alt=""><div class="list-text">相互成就</div></div></el-col>
        <el-col :span="8"><div class="list"><img src="../assets/诚信正直.png" alt=""><div class="list-text">诚信正直</div></div></el-col>
      </el-row>
      <el-row :gutter="60">
        <el-col :span="8"><div class="list"><img src="../assets/简单高效.png" alt=""><div class="list-text">简单高效</div></div></el-col>
        <el-col :span="8"><div class="list"><img src="../assets/开放创新.png" alt=""><div class="list-text">开放创新</div></div></el-col>
        <el-col :span="8"><div class="list"><img src="../assets/结果导向.png" alt=""><div class="list-text">结果导向</div></div></el-col>
      </el-row>
    </div>
  </div>
  <div class="footer">
    <div class="fleft">
      <p>业务咨询：17722522568</p>
      <p>公司地址：广州市海珠区鼎新路108号安越楼24层</p>
    </div>
    <span> © 深圳选作科技有限公司 &nbsp;&nbsp;  2013-2-21 粤ICP备13089478号</span>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  height: calc(100vh - 210px);
  background-color: #EBF3FF;
}
.title {
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
}
.banner{
  width: 100%;
  padding: 0 150px;
  box-sizing: border-box;
  /* display: flex; */
}
.el-row {
  /* width: 100%; */
  margin-bottom: 40px;
}
.list{
    /* width: 300px; */
    position: relative;
    height: 240px;
    border: 1px solid #EBF3FF;
    border-radius: 18px;
    overflow: hidden;
}
.list img{
  display: block;
  width: 100%;
  height: 100%;
}
.list-title{
  width: 360px;
  height: 100px;
  line-height: 100px;
  color: #2384F7;
  font-size: 36px;
  border-bottom: 2px solid #2384F7;
  margin-bottom: 30px;
}
.list-text{
  width: 250px;
  height: 60px;
  line-height: 60px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  color: #fff;
  font-size: 46px;
  letter-spacing: 8px;
  text-align: center;
}
.footer{
  width: 100%;
  height: 120px;
  position: relative;
  background-color: #242A32;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 36px;
  box-sizing: border-box;
}
.fleft{
  position: absolute;
  top: 0;
  left: 60px;
  width: 350px;
  height: 100%;
  padding-top: 10px;
  box-sizing: border-box;
}
</style>