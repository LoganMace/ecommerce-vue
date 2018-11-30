<template>
<div>
  <v-data-table
    :headers="headers"
    :items="cart"
    :hide-actions="true"
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td class="text-xs-left">{{ props.item.name }}</td>
      <td class="text-xs-left">{{ Number(props.item.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}</td>
      <td class="text-xs-left">{{ props.item.quantity }}</td>
      <td class="text-xs-left remove"><input type="number" min="0" :max="props.item.quantity"/><button>Remove</button></td>
      <td class="text-xs-left">{{ Number(props.item.price * props.item.quantity).toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}</td>
    </template>
  </v-data-table>
  <h1>Total: {{ cart.reduce((total, curr) => total + (curr.price * curr.quantity), 0).toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}</h1>
</div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        headers: [
          {text: 'Name', value: 'name', sortable: false},
          {text: 'Price', value: 'price', sortable: false},
          {text: 'Quantity', value: 'quantity', sortable: false},
          {sortable: false},
          {text: 'Total', value: 'total', sortable: false}
        ]
      }
    },
    computed: {
      ...mapGetters({
        cart: 'getCart'
      })
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    text-align: right;
    margin: 5px 10px;
  }
  .remove {
    display: flex;
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button {  
      opacity: 1;
    }
  }
</style>
