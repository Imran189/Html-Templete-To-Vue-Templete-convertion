import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/pages/HomeView.vue'
import AboutView from '@/views/pages/AboutView.vue';
import ServiceView from '@/views/pages/ServiceView.vue';
import Protfolio from '@/views/pages/PortfolioView.vue';
import Contact from '@/views/pages/ContactView.vue';
import ProfilesDetails from '@/views/pages/ProfilesDetails.vue';
import Blog from '@/views/pages/BlogView.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/service',
    name: 'ServiceView',
    component: ServiceView
  },
  {
    path: '/portfolio',
    name: 'Protfolio',
    component: Protfolio
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/profile/details',
    name: 'ProfilesDetails',
    component: ProfilesDetails
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
