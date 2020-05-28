<template>
  <div id="vue">
    <div id="nav">
      <router-link to="/">{{$t('home')}}</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import Home from "./views/Home.vue";

export default {
  components: { Home },
  created() {
    // 这里进行一个全局的广播接收
    window.addEventListener("change_locale", e => {
      if (e.type === "change_locale") {
        // 如果是改变国际化,则触发子组件中的改变国际化的方法
        console.log(e.detail.newval);
        this.$i18n.locale = e.detail.newval;
      }
    });
  }
};
</script>
<style scoped>
#vue {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
