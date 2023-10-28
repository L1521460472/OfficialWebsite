<!--
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lijiancong
 * @Date: 2022-08-10 18:18:24
 * @LastEditors: lijiancong
 * @LastEditTime: 2023-10-28 17:17:29
-->
<template>
  <div class="main">
    <div class="title">
      <span style="color: #000;font-size: 36px;font-weight: 600;margin-bottom: 10px;">产品简介</span>
      <p style="color: #666666;">PRODUCT BRIEF</p>
    </div>
    <div class="banner">
      <div class="banner-box banner-boxs">
        <div class="banner-box-left lbox">
          <div class="banner-box-title">随时随地自动化</div>
          <div class="banner-box-title">您工作中出现的重复性任务</div>
          <div class="banner-box-list">
            <div class="banner-box-text">
              <div class="dic"></div> 无需集成任何API
            </div>
            <div class="banner-box-text">
              <div class="dic"></div> 不依赖任何程序
            </div>
            <div class="banner-box-text">
              <div class="dic"></div> 只需几秒钟设置
            </div>
            <div class="banner-box-text">
              <div class="dic"></div> 5倍以上时间节省
            </div>
          </div>
        </div>
        <div class="banner-box-right">
          <div class="banner-box-img">
            <!-- <img src="../assets/m_email.gif" alt=""> -->
            <video src="../assets/M宣传视频.mp4" controls autoplay loop poster='../assets/m_email.gif'></video>
          </div>
        </div>
      </div>
      <div class="banner-box">
        <div class="banner-box-left">
          <div class="banner-box-left-img">
            <img src="../assets/m_email.gif" alt="">
          </div>
        </div>
        <div class="banner-box-right">
          <div class="banner-box-conter">
            <div class="banner-box-title">自动填充您的模板和消息</div>
            <div class="banner-box-list">
              <div class="banner-box-texts">
                <span>为什么要多次键入消息或电子邮件，现在，你可以像魔术一样召唤你的模板，并自动填充每个收件人的个人信息。</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-box">
        <div class="banner-box-left">
          <div class="banner-box-conter">
            <div class="banner-box-title">将线索自动填充您的CRM</div>
            <div class="banner-box-list">
              <div class="banner-box-texts">
                <span>您现在还在复制粘贴线索信息？现在，可以无缝地在任何CRM平台上一键填充表单，解放您的双手。</span>
              </div>
            </div>
          </div>
        </div>
        <div class="banner-box-right">
          <div class="banner-box-img">
            <img src="../assets/m_form.gif" alt="">
          </div>
        </div>
      </div>
      <div class="banner-box">
        <div class="banner-box-left">
          <div class="banner-box-left-img">
            <img src="../assets/m_export.gif" alt="">
          </div>
        </div>
        <div class="banner-box-right">
          <div class="banner-box-conter">
            <div class="banner-box-title">自动填充电子表格</div>
            <div class="banner-box-list">
              <div class="banner-box-texts">
                <span>不要花费数小时将数据复制粘贴到工作表中，使用幻数，您只需要轻轻一指，即可自动填写姓名，职务，联系信息等。</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <!-- <div class="fleft">
        <p>业务咨询：17722522568</p>
        <p>公司地址：广州市海珠区鼎新路108号安越楼24层</p>
      </div> -->
      <span> Copyright © 2023 深圳选作科技有限公司 粤ICP备2023103183号</span>
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
  height: calc(100vh - 150px);
  background-color: #EBF3FF;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 15%;
  box-sizing: border-box;
}
.banner-box{
  width: 100%;
  height: 300px;
  display: flex;
  border: 2px solid #e5e5e5;
  border-radius: 8px;
  margin-bottom: 32px;
}
.banner-boxs{
  border: none;
}
.banner-box-left{
  width: 50%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
}
.banner-box-right{
  width: 50%;
  height: 100%;
}
.banner-box-left-img{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
}
.banner-box-img{
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
}
.banner-box-left-img img{
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 6px;
}
.banner-box-img img{
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 6px;
}
.banner-box-img video{
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 6px;
}
.lbox{
  padding: 36px 20px;
  box-sizing: border-box;
}
.banner-box-conter{
  width: 100%;
  height: 100%;
  padding: 32px 10px;
  box-sizing: border-box;
}
.banner-box-title{
  height: 50px;
  line-height: 50px;
  font-size: 32px;
  font-weight: 600;
  color: #000;
}
.banner-box-list{
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
}
.banner-box-text{
  width: 50%;
  height: 50px;
  line-height: 50px;
}
.banner-box-texts{
  padding-right: 60px;
  line-height: 32px;
  box-sizing: border-box;
}
.dic{
  width: 12px;
  height: 12px;
  display: inline-block;
  border-radius: 6px;
  background-color: #999999;
  margin-left: 6px;
  margin-right: 6px;
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