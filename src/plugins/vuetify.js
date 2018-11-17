import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#00796b',
    accent: '#48a999',
    secondary: colors.blue-grey.darken1,
    // info: colors.teal.lighten1,
    // warning: colors.amber.base,
    error: colors.red.accent4,
    // success: colors.green.accent3
  }
})
