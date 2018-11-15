<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';

export default {
  data() {
    return {
      products: []
    }
  },
  mounted() {
    // this.$store.dispatch("getAllProducts")
    axios.get('http://localhost:3001/api/products').then(response => this.products =response.data);
  }
}
</script>
