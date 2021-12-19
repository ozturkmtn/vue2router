import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import {routes} from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history', // hash
  scrollBehavior(to,from,savedPosition) {
    // Eğer Hash var ise sayfa içinde Hash in pozisyonunu selector a verip Hash in sayfa içindeki pozisyonuna scroll ediyor.
    if (to.hash){
      return {
        selector:to.hash
      }
    }
    // Eğer Hash yok ise sayfa içinde x,y koordinatlarına scroll ediyor.
    return {x:0,y:0}
  }
})

// router.beforeEach((to,from,next) => {
//   console.log('Global kontrol : from '+ from.fullPath +' to '+ to.path +' to '+ to.fullPath);
//   next();
// });

router.beforeEach((to,from,next) => {
  console.log(to.fullPath,to.fullPath.search(/Joy/i));
  if (to.fullPath.search('Joy') !== -1) {
    console.log('JOY...')
  }
  next();
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
