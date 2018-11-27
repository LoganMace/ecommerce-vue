<template>
  <div class="category">
    <Product 
      v-for="product in products" 
      :name="product.name" 
      :price="product.price"
      :images="product.images"
      :id="product.product_id" 
      :key="product.product_id"/>
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
  methods: {
    getProducts() {
      axios.get(`http://localhost:3001/api/products/${this.$route.params.category}`).then(response => {
        console.log(response.data);
        this.products = response.data;
      });
    }
  },
  mounted() {
    this.getProducts();
  },
  watch: {
    '$route': 'getProducts'
  },
  components: {
    Product
  }
}
</script>

<style lang="scss" scoped>
  .category {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 5px;
  }
</style>
