<template>
  <nav>
    <ul>
      <router-link to="/">Home</router-link> |
      <router-link to="/Guitars">Guitars</router-link> |
      <router-link to="/Bass">Bass</router-link> |
      <router-link to="/Drums">Drums</router-link> |
      <router-link to="/Keyboards">Keyboards</router-link> |
      <router-link to="/Accessories">Accessories</router-link>
    </ul>
    <div>CART</div>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  nav {
    padding: 20px;
    background-color: #e4e4e4;
    display: flex;
    justify-content: space-between;
    ul {
      
      a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
          color: #42a7b9;
        }
      }
    }
  }
</style>