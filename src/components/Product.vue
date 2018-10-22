<template>
  <div class="card-wrap">
    <!-- <img src="" alt="image"> -->
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>{{ name }}</h2>
    <p>{{ price }}</p>
    <input type="number" name="quantity" min="0">
    <button>Add to Cart</button>
  </div>
</template>

<script>
  export default {
    props: ['name', 'price']
  }
</script>

<style lang="scss" scoped>
  .card-wrap {
    border: solid 1px lightgray;
    width: 300px;
    margin: 20px;
    img {
      width: 150px;
    }
    input {
      width: 20px;
    }
  }
</style>
