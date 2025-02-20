import { createRouter, createWebHistory, type RouteLocationRaw } from 'vue-router';
import Signup from '../components/Signup.vue';
import Login from '../components/Login.vue';
import Dashboard from '../components/Dashboard.vue';
import { getToken } from '@/services/authService';

const routes = [
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
  { 
    path: '/dashboard', 
    component: Dashboard, 
    beforeEnter: (_to: RouteLocationRaw, _from: RouteLocationRaw, next: (location?: RouteLocationRaw) => void) => {
      if (!getToken()) {
        next('/login');
      } else {
        next();
      }
    }
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
