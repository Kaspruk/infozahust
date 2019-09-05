<template>
  <div id="app">
    <header-ui></header-ui>
    <el-container>
      <el-main>
        <transition name="el-zoom-in-top" mode="out-in">
          <router-view/>
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import HeaderUi from './components/HeaderUi.vue'

export default {
  components: { HeaderUi },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
