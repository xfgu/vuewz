<template>
  <header class="">
    <div class="bg-black text-white flex px">
      <img src="../assets/logo.png" class="logo" alt="">
      <div class="fs-16 flex-1">
        <h1 class="fs-13 ">王者荣耀</h1>
        <h6 class="fs-8 text-gray">团队成就更多</h6>
      </div>
      <button class="btn bg-primary fs-12 text-black">立即下载</button>
    </div>
    <!--<ApolloExample />-->
    <nav class="nav bg-primary grid text-center text-white">
      <router-link tag="div" class="text-white active " to="/">首页</router-link>
      <router-link tag="div" class="text-white active" to="/">攻略中心</router-link>
      <router-link tag="div" class="text-white" to="/">赛事中心</router-link>
    </nav>
    <!--<router-link to="/">Home</router-link>|-->
    <!--<router-link to="/about">About</router-link>-->
    <router-view/>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="stylus" scoped>
  @import "../assets/index.styl"
  .bg-black
    position: sticky
    top: 0
    z-index 999
    height m(50rem)
    line-height: 1.5
    .logo
      width: m(30rem)
      height @width
      margin-right: m(6rem)

  .nav
    height m(42rem)
    place-items center
    .text-white
      padding-bottom m(2rem)
      border-bottom @padding-bottom solid transparent
      &.active
        border-bottom @padding-bottom solid


</style>
