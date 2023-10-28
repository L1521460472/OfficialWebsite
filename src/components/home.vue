<!--
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lijiancong
 * @Date: 2022-08-10 18:18:24
 * @LastEditors: lijiancong
 * @LastEditTime: 2023-10-28 16:56:13
-->
<script setup>
import { ref } from 'vue'

const count = ref(100)
</script>

<template>
  <div class="main">
    <img src="../assets/位图.png" alt="">
    <div class="main-text">幻数，让你随时随地自动化重复性任务</div>
  </div>
  <div class="footer">
    <!-- <div class="fleft">
      <p>业务咨询：17722522568</p>
      <p>公司地址：广州市海珠区鼎新路108号安越楼24层</p>
    </div> -->
    <span> Copyright © 2023 深圳选作科技有限公司 粤ICP备2023103183号</span>
  </div>
</template>

<style scoped>
.main {
  position: relative;
  width: 100%;
  height: calc(100vh - 150px);
  /* background: url(../assets/位图.png) center; */
}
.main img{
  display: block;
  width: 100%;
  height: 100%;
}
.main-text{
  width: 100%;
  height: 200px;
  line-height: 200px;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  color: #fff;
  font-size: 50px;
  letter-spacing: 20px;
  font-weight: 600;
}
.footer{
  width: 100%;
  height: 60px;
  position: relative;
  background-color: #020408;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
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