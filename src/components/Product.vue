<template>
    <div class="card-wrap">
      <router-link :to="'/product/' + id">
        <!-- <img src="" alt="image"> -->
        <img alt="Vue logo" src="../assets/logo.png">
        <h2>{{ name }}</h2>
      </router-link>
      <p>{{ price }}</p>
      <input type="number" name="quantity" min="0">
      <button>Add to Cart</button>
    </div>
</template>

<script>
  export default {
    props: ['name', 'price', 'id']
  }
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
    color: black;
  }
  .card-wrap {
    border: solid 1px lightgray;
    width: 300px;
    margin: 20px;
    img {
      width: 150px;
    }
    input {
      width: 28px;
    }
  }
</style>
