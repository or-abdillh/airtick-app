import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: WelcomeView
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/HomeView.vue')
        },
        {
            path: '/ticket',
            name: 'ticket',
            component: () => import('@/views/TicketView.vue')
        }
    ]
})

export default router
