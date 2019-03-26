import Vue from 'vue'
import Router from 'vue-router'
import {routes} from './router'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
import {getToken} from "../until/cookie";
import store from '../store'
import {setTitle} from "../until/app";
NProgress.configure({
    showSpinner: false,
    easing: 'ease',
    speed: 500
}); // NProgress Configuration
Vue.use(Router)

const router = new Router({
    routes
});

router.beforeEach((to,from,next) => {
    NProgress.start();
    const token = getToken();
    if (token) {
        if (store.state.router.addRouters.length === 0) {
            // 未获取路由权限
            store.dispatch('GetUserInfo').then(({roles}) => {
                // 获取用户权限后根据权限筛选路由信息
                roles = ['admin']; // 超级管理员
                store.dispatch('FilterRouters',roles).then(() => {
                    router.addRoutes(store.state.router.addRouters);
                    next({...to,replace: true});
                })
            })
        } else {
            if (to.name === 'login') {
                next({path: '/'});
            } else {
                next();
            }
        }
    } else {
        if(to.name === 'login') {
            next();
        } else {
            next({path: '/login'})
        }
    }

});
router.afterEach((to,from) => {
    to.meta && setTitle(to.meta, router.app);
    NProgress.done();
})
export default router;
