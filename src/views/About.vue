<template>
  <div>
  {{item}}
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props: {
      item: {
        type: String,
        default: 'ni'
      },
    },
  }
</script>

<style scoped>

</style>
