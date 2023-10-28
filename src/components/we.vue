<!--
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lijiancong
 * @Date: 2022-08-10 18:18:24
 * @LastEditors: lijiancong
 * @LastEditTime: 2023-10-28 17:00:49
-->
<script setup>
import { ref } from 'vue'

const count = ref(100)
</script>

<template>
  <div class="main">
    <div class="title">
      <span style="color: #fff;font-size: 36px;font-weight: 600;margin-bottom: 10px;">幻数简介</span>
      <p style="color: #fff;">OPRPORATE VALUES </p>
    </div>
    <div class="banner">
      幻数，是一款自动化数据迁移和处理工具，无须集成、API或复杂的工作流构建器，只需几秒钟设置即可实现自动化重复性任务。

      不依赖任何程序，随时随地可以在您工作时加快重复性任务，例如消息发送、数据录入、数据填充等。
    </div>
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
  width: 100%;
  position: relative;
  height: calc(100vh - 150px);
  background: url(../assets/位图.png) center;
  overflow-y: auto;
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
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 80%;
  height: 300px;
  padding: 44px 68px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, .2);
  color: #fff;
  font-size: 24px;
  line-height: 50px;
  letter-spacing: 5.2px;
}
.footer{
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  background-color: #242A32;
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