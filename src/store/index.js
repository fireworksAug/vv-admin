import Vue from 'vue';
import Vuex from 'vuex';
// app 状态
import {state} from './app/state';
import {getters} from "./app/getters";
import {mutations} from './app/mutations';
import {actions} from './app/actions';
// user 状态
import user from './module/user/user';
// 异步路由列表状态
import router from './module/router/router';
// tags 列表状态
import tags from './module/tags/tags';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        user,
        router,
        tags
    }
})
