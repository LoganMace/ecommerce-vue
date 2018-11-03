<template>
  <nav>
    <ul>
      <router-link to="/">Home</router-link> |
      <router-link to="/mens">Men's</router-link> |
      <router-link to="/womens">Women's</router-link> |
      <router-link to="/accessories">Accessories</router-link>
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
    background-color: #eef3f8;
    ul {
      
      a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
          color: #42b983;
        }
      }
    }
  }
</style>