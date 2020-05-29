<template>
<el-container>
  <el-header>
    <lz-head></lz-head>
  </el-header>
  <el-container class="content-index">
    <el-main>
      <div id="single-vue" class="single-spa-vue">
        <div id="vue"></div>
      </div>
      <div id="single-sys" class="single-spa-sys">
        <div id="sys"></div>
      </div>
      <router-view :key="$route.path" />
    </el-main>
  </el-container>
</el-container>
</template>
<script>
import { navigateToUrl } from "single-spa";
import lzHead from "@/views/layout/head";
export default {
  components: {
    lzHead
  },
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
    }
  }
};
</script>
<style>
.el-header,
.el-footer {
  padding: 0px !important;
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  /* margin-bottom: 40px; */
  /* min-height: 840px; */
}
.content-index {
  min-height: 875px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
