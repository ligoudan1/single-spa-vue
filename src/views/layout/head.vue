<template>
  <div class="lz-head">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" @click="goToChildRoute('/vue#')">{{$t('home')}}</el-menu-item>
      <el-menu-item index="2" @click="goToChildRoute('/vue#/about')">{{$t('test1')}}</el-menu-item>
      <el-menu-item index="3" @click="goToChildRoute('/sys#')">{{$t('test2')}}</el-menu-item>
      <el-submenu index="2">
        <template slot="title">{{$t('language')}}</template>
        <el-menu-item index="2-1" @click="changeLanguage('zh')">中文</el-menu-item>
        <el-menu-item index="2-2" @click="changeLanguage('en')">English</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>


<script>
import { navigateToUrl } from "single-spa";
import store from "@/redux";
import * as ACTIONS from "@/redux/actionCreators";
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    goToChildRoute(e) {
      // 官方指定跳转
      navigateToUrl(e);
    },
    // 国际化切换
    changeLanguage(type) {
      // 此处做了国际化存储记录
      localStorage.setItem("locale", type);
      const actions = ACTIONS.CHANGE_LOCALE(type);
      store.dispatch(actions);
      // 修改显示语言
      this.$i18n.locale = type;
    }
  }
};
</script>

<style lang="scss">
.lz-head {
  height: 60px;
  background-color: rgb(84, 92, 100);
  border-bottom: solid 1px #e6e6e6;
}
</style>