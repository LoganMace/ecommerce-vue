<template>
  <v-toolbar class="primary">
    <v-toolbar-items>
      <v-btn flat>
        <router-link to="/">
          <v-icon>home</v-icon>
        </router-link>
      </v-btn>
      <v-menu open-on-hover bottom offset-y attach transition="slide-x-transition">
          <v-btn dark to="/products/Guitars" flat slot="activator">
            Guitars
          </v-btn>
        <v-list class="dropdown">
            <v-btn flat class="category">
              <v-list-tile-title ripple>Electric Guitar</v-list-tile-title>
            </v-btn>
            <v-btn flat class="category">
              <v-list-tile-title ripple>Acoustic Guitar</v-list-tile-title>
            </v-btn>
        </v-list>
      </v-menu>
      <v-menu open-on-hover bottom offset-y attach transition="slide-x-transition">
        <v-btn dark to="/products/Bass" flat slot="activator">
          Bass
        </v-btn>
        <v-list class="dropdown">
            <v-btn flat class="category">
              <v-list-tile-title ripple>Electric Bass</v-list-tile-title>
            </v-btn>
            <v-btn flat class="category">
              <v-list-tile-title ripple>Acoustic Bass</v-list-tile-title>
            </v-btn>
        </v-list>
      </v-menu>
      <v-menu open-on-hover bottom offset-y attach transition="slide-x-transition">
        <v-btn dark to="/products/Drums" flat slot="activator">
          Drums
        </v-btn>
        <v-list class="dropdown">
            <v-btn flat class="category">
              <v-list-tile-title ripple>Electric Drums</v-list-tile-title>
            </v-btn>
            <v-btn flat class="category">
              <v-list-tile-title ripple>Acoustic Drums</v-list-tile-title>
            </v-btn>
            <v-btn flat class="category">
              <v-list-tile-title ripple>Percussion</v-list-tile-title>
            </v-btn>
        </v-list>
      </v-menu>
      <v-menu open-on-hover bottom offset-y attach transition="slide-x-transition">
        <v-btn dark to="/products/Keyboards" flat slot="activator">
          Keyboards
        </v-btn>
        <v-list class="dropdown">
            <v-btn flat class="category">
              <v-list-tile-title ripple>Digital Pianos</v-list-tile-title>
            </v-btn>
            <v-btn flat class="category">
              <v-list-tile-title ripple>Synthesizers</v-list-tile-title>
            </v-btn>
        </v-list>
      </v-menu>
      <v-menu open-on-hover bottom offset-y attach transition="slide-x-transition">
        <v-btn dark to="/products/Accessories" flat slot="activator">
          Accessories
        </v-btn>
        <v-list class="dropdown">
            <v-btn flat class="category">
              <v-list-tile-title ripple>Strings</v-list-tile-title>
            </v-btn>
            <v-btn flat class="category">
              <v-list-tile-title ripple>Cables</v-list-tile-title>
            </v-btn>
            <v-btn flat class="category">
              <v-list-tile-title ripple>Stands & Racks</v-list-tile-title>
            </v-btn>
            <v-btn flat class="category">
              <v-list-tile-title ripple>Cases</v-list-tile-title>
            </v-btn>
            <v-btn flat class="category">
              <v-list-tile-title ripple>Misc</v-list-tile-title>
            </v-btn>
        </v-list>
      </v-menu>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn icon>
      <router-link to="/Cart">
        <v-icon color="white">shopping_cart</v-icon>
      </router-link>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
    color: white;
  }
  .category {
    width: 100%;
    padding: 10px;
    &:hover {
      background: rgb(110, 207, 191);
    }
  }
  .dropdown {
    padding: 0;
  }
</style>
