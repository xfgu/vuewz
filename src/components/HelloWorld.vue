<template>
  <div class="content">
    <div class="box">111</div>
    <div class="text-white bg-info border-primary">33333</div>
    <div class="grid bg-success text-center w100 ">3232323</div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import "../assets/index.styl"
  .grid
    font-size calc(40rem/375)


  /**
  color: #f60
box=@block {
  width 1rem
  height @width
  background: #a1a1a1
}
.box
  {box}
.blue-box
  @extends .box
  background: #f40
*/

</style>
