<template>
    <div class="card-wrap">
      <router-link :to="'/product/' + id">
        <img v-if="images" :alt="name" :src="images[0]">
        <h3>{{ name }}</h3>
      </router-link>
      <p>{{ priceWithCommas }}</p>
      <div class="addCart">
        <span>
          QTY: 
          <input type="number" name="quantity" min="0" v-model="quantity">
        </span>
        <v-btn color="accent" small @click="addToCart">Add to Cart</v-btn>
      </div>
    </div>
</template>

<script>
  export default {
    props: ['name', 'price', 'images', 'id'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      priceWithCommas() {
        return Number(this.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
      }
    },
    methods: {
      addToCart() {
        const product = {
          id: this.id,
          price: this.price,
          name: this.name,
          quantity: +this.quantity
        };
        this.$store.dispatch('addToCart', product);
      }
    }
  }
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
    color: black;
  }
  .card-wrap {
    background: white;
    border: solid 1px lightgray;
    width: 300px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &:hover {
      box-shadow: 0 2px 8px rgba(107, 107, 107, 0.452);
    }
    p {
      font-weight: bold;
    }
    h3 {
      font-size: 14px;
      margin: 4px;
    }
    img {
      width: 250px;
      margin: 10px;
    }
    div {
      margin: 10px;
    }
    input {
      width: 35px;
      border: solid 1px lightgrey;
      height: 28px;
      margin: 6px 0;
      box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    }
  }
  .addCart {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button {  
    opacity: 1;
  }
</style>
