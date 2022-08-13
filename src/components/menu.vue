<!--
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lijiancong
 * @Date: 2022-08-10 18:24:57
 * @LastEditors: lijiancong
 * @LastEditTime: 2022-08-11 10:25:53
-->
<template>
  <div style="height: 60%;margin-right: 40px;">
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    text-color="#fff"
    active-text-color="#fff"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="/home">首页</el-menu-item>
    <el-menu-item index="/product">产品</el-menu-item>
    <el-menu-item index="/culture">文化</el-menu-item>
    <el-menu-item index="/we">我们</el-menu-item>
  </el-menu>
  </div>
</template>
<script lang="ts" setup>
import { ref,onBeforeMount } from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()

const activeIndex = ref('/home')
const handleSelect = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
  router.push(key)
}
onBeforeMount(() => {
  activeIndex.value = router.currentRoute.value.path
})
</script>
<style scoped>
.el-menu-demo{
  height: 100%;
  background-color: rgba(0, 19, 39, 0);
}
.el-menu--horizontal{
  border: none !important;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
  background: none !important;
}
</style>