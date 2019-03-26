import { routes, routesMap } from "../../../router/router";

const state = {
    routes: routes,
    addRouters: []
};
const getters = {
    //
};
const mutations = {
    //setting user Routers
    SET_ROUTERS: (state, userRouterList) => {
        state.addRouters = userRouterList;
        state.routes = userRouterList.concat(routes);
    }
};
const actions = {
    // 筛选符合用户的路由信息
    FilterRouters({commit}, roles) {
        return new Promise((resolve, reject) => {
            try{
                let userRouterList = [];
                if (roles.indexOf('admin') >= 0) {
                    userRouterList = routesMap;
                } else {
                    userRouterList = getRouterList(roles, routesMap);
                }
                commit('SET_ROUTERS', userRouterList);
                resolve();
            } catch (e) {
                reject(e);
            }
        })
    }
};
// 递归遍历路由信息 返回用户可访问的路由数组
function getRouterList(roles, routesMap) {
    const accessRouters = routesMap.filter(item => {
        if (hasPromiss(roles, item)) {
            if(item.children && item.children.length) {
                item.children = getRouterList(roles, item.children);
            }
            return true;
        }
    });
    return accessRouters;
}
// 判断此路由是否在权限内
function hasPromiss(roles, route) {
    if (route.meta && route.meta.roles.length) {
        return roles.some(role => route.meta.roles.indexOf(role) >= 0);
    } else {
        return false;
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}
