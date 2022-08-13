<!--
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lijiancong
 * @Date: 2022-08-10 18:18:24
 * @LastEditors: lijiancong
 * @LastEditTime: 2022-08-12 09:23:59
-->
<script setup>
import { ref } from 'vue'

const count = ref(100)
</script>

<template>
  <div class="main">
    <div class="title">
      <span style="color: #fff;font-size: 36px;font-weight: 600;margin-bottom: 10px;">选作科技简介</span>
      <p style="color: #fff;">OPRPORATE VALUES </p>
    </div>
    <div class="banner">
        致景科技成立于2013年12月，是领先的纺织产业互联网企业，国家高新技术企业。旗下拥有“百布”、“全布”、“天工”、“飞梭智纺”、“致景金条”、“致景智慧仓物流园”、“致景纺织智造园”等业务板块，致力于通过大数据、云计算、物联网等新一代信息技术，全面打通纺织服装行业的信息流、物流和资金流，帮助行业实现协同化、柔性化、智能化的升级，构建纺织服装纵向一体化的数智化综合服务平台。
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
  position: relative;
  height: calc(100vh - 210px);
  background: url(../assets/位图.png) center;
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
  height: 400px;
  padding: 74px 68px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, .2);
  color: #fff;
  font-size: 24px;
  line-height: 50px;
  letter-spacing: 5.2px;
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