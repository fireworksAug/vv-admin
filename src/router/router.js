import Login from "../views/Login/Login";
import Layout from "../views/Layout/Index";

export const routes = [
    {
        path: '/login',
        name: 'login',
        hidden: true,
        component: Login
    },
    {
        path: '/404',
        name: '404',
        meta: {
            title: '404'
        },
        hidden: true,
        component: () => import('@/views/error-page/Page404.vue')
    }
];
export const routesMap = [
    {
        path: '/',
        name: 'layout',
        component: Layout,
        hidden: true,
        meta: {
            roles: ['roleA'],
        },
        redirect: '/home',
        children: [
            {
                path: 'home',
                name: 'home',
                meta: {
                    roles: ['roleA'],
                    title: 'home',
                    icon: 'home',
                },
                component: () => import('@/views/Home/Home.vue')
            }
        ]
    },
    {
        path: '/example',
        name: 'example',
        component: Layout,
        meta: {
            roles: ['roleA', 'roleB'],
            title: 'example',
            icon: 'example',
        },
        children: [
            {
                path: 'form',
                name: 'form',
                meta:{
                    roles: ['roleA'],
                    title: 'form',
                    icon: 'form',
                    keepAlive: true
                },
                component: () => import('@/views/form/Index.vue')
            },
            {
                path: 'step-form',
                name: 'stepForm',
                meta: {
                    roles: ['roleB'],
                    title: 'stepForm',
                    icon: 'step',
                    keepAlive: true
                },
                component: () => import('@/views/step-form/Index.vue')
            },
            {
                path: 'table',
                name: 'table',
                meta: {
                    roles: ['roleB'],
                    title: 'table',
                    icon: 'table',
                    keepAlive: true
                },
                component: () => import('@/views/table/Index.vue')
            }
        ]
    },
    {
        path: '/widget',
        name: 'widget',
        component: Layout,
        meta: {
            title: 'widget',
            roles: ['roleC'],
            icon: 'widget'
        },
        children:[
            {
                path: 'accordion',
                name: 'accordion',
                meta: {
                    roles: ['roleC'],
                    title: 'accordion',
                    icon: 'accordion'
                },
                component: () => import('@/views/accordion-page/Index.vue')
            }
        ]
    },
    {
        path: '/person',
        name: 'person',
        component: Layout,
        meta: {
            title: 'person',
            icon: 'person'
        },
        children: [
            {
                path: 'message',
                name: 'message',
                meta: {
                    title: 'message',
                    icon: 'message'
                },
                component: () => import('@/views/person-message/Index.vue')
            },
            {
                path: 'setting',
                name: 'setting',
                meta: {
                    title: 'setting',
                    icon: 'setting'
                },
                component: () => import('@/views/person-message/Setting.vue')
            },
        ]
    },
    {path: '*', redirect:'/404',hidden: true}
]
