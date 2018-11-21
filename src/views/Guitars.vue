<template>
  <div class="guitars">
    <Product 
      v-for="product in products" 
      :name="product.name" 
      :price="product.price"
      :images="product.images"
      :id="product.id" 
      :key="product.id"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';
import Product from '../components/Product.vue';

export default {
  data() {
    return {
      products: []
    }
  },
  mounted() {
    // this.$store.dispatch("getAllProducts")
    axios.get(`http://localhost:3001/api/products/${'electric guitar'}`).then(response => {
      console.log(response.data);
      this.products = response.data;
    })
  },
  components: {
    Product
  }
}
</script>

<style lang="scss" scoped>
  .guitars {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 5px;
  }
</style>
