import Vue from 'vue';
import Router from 'vue-router';

import Login from './views/Login.vue';
import Register from './views/Register.vue';
import ProductList from "@/views/ProductList";

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [

    {
      path: '/products',
      component: ProductList
    },

    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
  ]
});

