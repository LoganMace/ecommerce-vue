<template>
  <v-toolbar>
    <v-toolbar-items>
      <v-btn flat>
        <router-link to="/">
          <v-icon>home</v-icon>
        </router-link>
      </v-btn>
      <v-menu open-on-hover bottom auto offset-y attach>
        <v-btn flat slot="activator">
          <router-link to="/Guitars">Guitars</router-link>
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
      <v-menu open-on-hover bottom auto offset-y attach>
        <v-btn flat slot="activator">
          <router-link to="/Bass">Bass</router-link>
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
      <v-menu open-on-hover bottom auto offset-y attach>
        <v-btn flat slot="activator">
          <router-link to="/Drums">Drums</router-link>
        </v-btn>
        <v-list class="dropdown">
            <v-btn flat class="category">
              <v-list-tile-title ripple>Electric Drums</v-list-tile-title>
            </v-btn>
            <v-btn flat class="category">
              <v-list-tile-title ripple>Acoustic Drums</v-list-tile-title>
            </v-btn>
        </v-list>
      </v-menu>
      <v-menu open-on-hover bottom auto offset-y attach>
        <v-btn flat slot="activator">
          <router-link to="/Keyboards">Keyboards</router-link>
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
      <v-menu open-on-hover bottom auto offset-y attach>
        <v-btn flat slot="activator">
          <router-link to="/Accessories">Accessories</router-link>
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
        </v-list>
      </v-menu>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>shopping_cart</v-icon>
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
    color: black;
  }
  .category {
    width: 100%;
    padding: 10px;
  }
  .dropdown {
    padding: 0;
  }
</style>
