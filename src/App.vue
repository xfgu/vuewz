<template>
  <router-view></router-view>
  <!--<Header></Header>-->
</template>

<script>
  import Header from './views/Header'
  export default {
    name:'App',
    components: { Header }
  }
</script>

<style scoped>

</style>
