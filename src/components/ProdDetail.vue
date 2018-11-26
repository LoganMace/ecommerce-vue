<template>
  <div>
    <h1>{{ product.name }}</h1>
    <v-carousel :cycle="false" :light="true" :hide-delimiters="true" :height="300" class="carousel">
      <v-carousel-item
        :contain="true"
        v-for="(image,i) in product.images"
        :key="i"
        :src="image"
      ></v-carousel-item>
    </v-carousel>
    <p>{{ product.price }}</p>
    <p>{{ product.description }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      product: {}
    }
  },
  methods: {
    getProduct() {
      axios.get(`http://localhost:3001/api/product/${this.$route.params.id}`).then(response => {
        console.log(response.data[0]);
        this.product = response.data[0];
      })
    }
  },
  mounted() {
    this.getProduct();
  },
  watch: {
    '$route': 'getProduct'
  }
}
</script>

<style lang="scss" scoped>
  .carousel {
    background: white;
  }
</style>
