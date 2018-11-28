<template>
  
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        cart: 'getCart'
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>
