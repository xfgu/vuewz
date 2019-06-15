<template>
  <header class="bg-info">
    <section class="col text-white">344</section>
    <!--<ApolloExample />-->
  </header>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ApolloExample from '@/components/ApolloExample.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    ApolloExample
  }
}
</script>
<style lang="stylus">
  @import "../assets/index.styl"
  header
    height calc(45rem/375)
</style>
