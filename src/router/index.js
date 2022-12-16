import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import GalleryView from '../views/GalleryView.vue'
import SubmitView from '../views/SubmitView.vue'
import EditProfileView from '../views/EditProfileView.vue'
import RegisterView from '../views/RegisterView.vue'
import VisorView from '../views/VisorView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profile/:userId', 
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView
  },
  {
    path:'/submit/:userId',
    name: 'submit',
    component: SubmitView
  },
  {
    path:'/edit_profile/:userId',
    name: 'edit_profile',
    component: EditProfileView
  },
  {
    path:'/register',
    name: 'register',
    component: RegisterView
  },
  {
    path:'/visor/:id',
    name: 'visor',
    component: VisorView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
