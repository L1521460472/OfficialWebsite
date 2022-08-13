<!--
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lijiancong
 * @Date: 2022-08-10 18:18:24
 * @LastEditors: lijiancong
 * @LastEditTime: 2022-08-12 09:23:07
-->
<template>
  <div class="main">
    <div class="title">
      <span style="color: #000;font-size: 36px;font-weight: 600;margin-bottom: 10px;">产品简介</span>
      <p style="color: #666666;">PRODUCT BRIEF</p>
    </div>
    <div class="banner">
      <div class="banner-left">
        <div class="list">
          <img src="../assets/位图(3).png" alt="">
          <div class="list-title">Powerdatas数据分析</div>
          <div class="list-text">数字化底座产品，跨平台整合全渠道客户数据，输出精准客户洞察，指导营销决策并高实时性地支撑用户运营，实现企业数据资产的高效变现与增值，让您快速成为数智化转型的践行者</div>
        </div>
        <div class="list">
          <img src="../assets/位图(1).png" alt="">
          <div class="list-title">Powerdatas数据采集</div>
          <div class="list-text">提供埋点数据采集能力。并针对埋点数据展开分析与洞察，获得一体化全链路数据完成采集并分析的体验，助力广告投放。</div>
        </div>
      </div>
      <div class="banner-right">
        <div class="list">
          <img src="../assets/位图(2).png" alt="">
          <div class="list-title">Powerdatas智能营销</div>
          <div class="list-text">MA流程自动化的客户全生命周期管理，让营销部门面对数以亿计的客户/会员群体，真正拥有了精细化运营和增长的核心力量。</div>
        </div>
        <div class="list">
          <img src="../assets/位图4.png" alt="">
          <div class="list-title">Powerdatas客群画像</div>
          <div class="list-text">对多堆度海量用户数据进行整理和分析后形成的精准用户洞察。我们都知道客户究竟是什么样的人，完整还原每一位真实客户。</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="fleft">
        <p>业务咨询：17722522568</p>
        <p>公司地址：广州市海珠区鼎新路108号安越楼24层</p>
      </div>
      <span> © 深圳选作科技有限公司 &nbsp;&nbsp;  2013-2-21 粤ICP备13089478号</span>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const count = ref(100)
</script>
<style scoped>
.main {
  width: 100%;
  /* height: calc(100vh - 120px); */
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
  display: flex;
}
.banner-left{
  width: 50%;
  padding:  30px 100px 30px 220px;
  box-sizing: border-box;
}
.banner-right{
  width: 50%;
  padding:  40px 240px 30px 80px;
  box-sizing: border-box;
}
.list{
    margin-bottom: 80px;
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
  /* width: 500px; */
  padding: 15px;
  background-color: #2384F7;
  color: #fff;
  font-size: 12px;
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