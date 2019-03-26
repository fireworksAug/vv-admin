import {routeHasExist} from "../../../until/app";
import config from '../../../config';
import {getLocalTagsList, setLocalTagsList} from "../../../until/localStorage";
import router from '../../../router';

// 路由跳转
const turnToPage = (route) => {
    router.push({
        name: route.name
    })
}

const state = {
    tagsList: []
};
const getters = {
    //
};
const mutations = {
    // 初始化tags标签
    setTags(state, list) {
        let tagsList = [];
        if (list) {
            tagsList = [...list];
        } else {
            // 读取本地
            tagsList = getLocalTagsList();
        }
        state.tagsList = tagsList;
    },
    //动态添加tags标签
    addTags(state, {route, type = 'unshift'}) {
        // 判断路由对象是否已经存在
        if (!routeHasExist(route)) {
            if (type === 'push') {
                state.tagsList.push(route);
            } else {
                if (route.name === config.homePage) state.tagsList.unshift(route)
                else state.tagsList.splice(1, 0, route)
            }
            // 存储到本地
            setLocalTagsList(state.tagsList)
        }
    },
    // 关闭tag标签
    closeTags(state, params) {
        const {name, route} = params;
        if (name === route.name) {
            // 关闭当前活动路由
            let index = state.tagsList.map(tag => tag.name).indexOf(name);
            if (index === state.tagsList.length - 1) {
                // 当前活动路由在最后一个 向前查询 跳转
                turnToPage(state.tagsList[index - 1]);
            } else {
                // 当前活动路由不在最后一个 向后查询 跳转
                turnToPage(state.tagsList[index + 1]);
            }
        }
        const localList = getLocalTagsList();
        state.tagsList = localList.filter(item => item.name !== name);
        setLocalTagsList(state.tagsList);
    },
    // 通过 icon 关闭 其他/所有 tag标签
    closeTagsByIcon(state, params) {
        const {type,route} = params;
        let list = [];
        if (type === 'other') {
            // 关闭其他
            list = state.tagsList.filter(tag => tag.name === route.name || tag.name === config.homePage);
            state.tagsList = list;
            setLocalTagsList(list);
        } else {
            // 关闭所有
            list = state.tagsList.filter(tag => tag.name === config.homePage);
            state.tagsList = list;
            setLocalTagsList(list);
            turnToPage(list[0]);
        }
    }
};
const actions = {
    //
};
export default {
    state,
    getters,
    mutations,
    actions
}
