import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {

  },
  actions: {
    getAllProducts({commit}) {
      let {data} = axios.get('/api/products/all').then(response => console.log(response))
    }
  }
})
