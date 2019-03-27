import Login from "../views/Login/Login";
import Layout from "../views/Layout/Index";

export const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
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
    }
]
