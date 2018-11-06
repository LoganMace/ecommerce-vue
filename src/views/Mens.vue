<template>
  <div class="products-list">
    <Product 
      v-for="product in productsList" 
      :name="product.name" 
      :price="product.price"
      :id="product.id" 
      :key="product.id"/>
  </div>
</template>

<script>
  import Product from '../components/Product.vue';

  import {productsList} from '../products.js';

  export default {
    props: [],
    components: {
      Product
    },
    data() {
      return {
        productsList
      }
    }
  }
</script>

<style lang="scss" scoped>
  .products-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>