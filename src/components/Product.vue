<template>
    <div class="card-wrap">
      <router-link :to="'/product/' + id">
        <!-- <img src="" alt="image"> -->
        <img v-if="images" :alt="name" :src="images[0]">
        <h3>{{ name }}</h3>
      </router-link>
      <p>{{ price }}</p>
      <div>
        <input type="number" name="quantity" min="0">
        <button>Add to Cart</button>
      </div>
    </div>
</template>

<script>
  export default {
    props: ['name', 'price', 'images', 'id']
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
      width: 28px;
    }
  }
</style>
