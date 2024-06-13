import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import SingleProject from './pages/SingleProject.vue';
import ProjectList from './pages/ProjectList.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({	
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectList
        },
        {
            path: '/project/:slug',
            name: 'single-project',
            component: SingleProject
        },
        {
            path: '/pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        }
    ]
});

export { router };