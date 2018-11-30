import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    'ADD_TO_CART'(state, product) {
      console.log(product);
      if(product.quantity > 0) {
        state.cart.push(product);
      }
    },
    'CHANGE_QUANTITY'() {
      
    }
  },
  actions: {
    addToCart: ({commit}, product) => {
      commit('ADD_TO_CART', product);
    }
  },
  getters: {
    getCart: state => console.log(state.cart) || state.cart
  }
})
