import Vue from 'vue'
import App from './App.vue'

import VueScrollReveal from 'vue-scroll-reveal';

Vue.config.productionTip = false

// Using ScrollReveal's default configuration
Vue.use(VueScrollReveal);

new Vue({
  render: h => h(App),
}).$mount('#app')
