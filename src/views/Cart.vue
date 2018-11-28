<template>
  <div>
    <div v-for="item in cart" :key="item.id">
      <p>{{ item.name }}</p>
      <p>{{ item.price }}</p>
      <p>{{ item.quantity }}</p>
    </div>
  </div>
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
