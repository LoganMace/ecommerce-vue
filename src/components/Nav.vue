<template>
  <v-toolbar>
    <v-toolbar-items>
      <v-btn flat><router-link to="/">Home</router-link></v-btn>
      <v-menu open-on-hover bottom auto offset-y attach>
        <v-btn flat slot="activator">
          <router-link to="/Guitars">Guitars</router-link>
        </v-btn>
        <v-list>
          <v-list-tile>
            <v-btn flat>
              <v-list-tile-title>Electric Guitars</v-list-tile-title>
            </v-btn>
          </v-list-tile>
          <v-list-tile>
            <v-btn flat>
              <v-list-tile-title>Acoustic Guitars</v-list-tile-title>
            </v-btn>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-menu open-on-hover bottom auto offset-y attach>
        <v-btn flat slot="activator">
          <router-link to="/Bass">Bass</router-link>
        </v-btn>
        <v-list>
          <v-list-tile>
            <v-btn flat>
              <v-list-tile-title>Electric Basses</v-list-tile-title>
            </v-btn>
          </v-list-tile>
          <v-list-tile>
            <v-btn flat>
              <v-list-tile-title>Acoustic Basses</v-list-tile-title>
            </v-btn>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-menu open-on-hover bottom auto offset-y attach>
        <v-btn flat slot="activator">
          <router-link to="/Drums">Drums</router-link>
        </v-btn>
        <v-list>
          <v-list-tile>
            <v-btn flat>
              <v-list-tile-title>Electric Drums</v-list-tile-title>
            </v-btn>
          </v-list-tile>
          <v-list-tile>
            <v-btn flat>
              <v-list-tile-title>Acoustic Drums</v-list-tile-title>
            </v-btn>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-menu open-on-hover bottom auto offset-y attach>
        <v-btn flat slot="activator">
          <router-link to="/Keyboards">Keyboards</router-link>
        </v-btn>
        <v-list>
          <v-list-tile>
            <v-btn flat>
              <v-list-tile-title>Digital Pianos</v-list-tile-title>
            </v-btn>
          </v-list-tile>
          <v-list-tile>
            <v-btn flat>
              <v-list-tile-title>Synthesizers</v-list-tile-title>
            </v-btn>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-menu open-on-hover bottom auto offset-y attach>
        <v-btn flat slot="activator">
          <router-link to="/Accessories">Accessories</router-link>
        </v-btn>
        <v-list>
          <v-list-tile>
            <v-btn flat>
              <v-list-tile-title>Strings</v-list-tile-title>
            </v-btn>
          </v-list-tile>
          <v-list-tile>
            <v-btn flat>
              <v-list-tile-title>Cables</v-list-tile-title>
            </v-btn>
          </v-list-tile>
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
</style>