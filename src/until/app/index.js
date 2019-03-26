import {getLocalTagsList} from "../localStorage";

export const setTitle = (value, vm) => {
    if (value.title) {
        document.title = vm.$t('route.'+value.title);
    } else {
        document.title = 'Admin'
    }
}
/*判断路由是否存在list中*/
export const routeHasExist = (router) => {
    const tagsList = getLocalTagsList();
    return tagsList.some(tag => tag.name === router.name);
}
