import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/components/pages/HomePage.vue'
import StorePage from "@/components/pages/StorePage.vue";
import NewsPage from "@/components/pages/NewsPage.vue";
import CasesPage from "@/components/pages/CasesPage.vue";
import CommunityPage from "@/components/pages/CommunityPage.vue";
import SupportPage from "@/components/pages/SupportPage.vue";

const routes = [
    { path: '/', redirect: '/store' },
    { path: '/store', component: StorePage, name: 'Store' },
    { path: '/community', component: CommunityPage, name: 'Community' },
    { path: '/news', component: NewsPage, name: 'News' },
    { path: '/cases', component: CasesPage, name: 'Cases' },
    { path: '/support', component: SupportPage, name: 'Support' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router