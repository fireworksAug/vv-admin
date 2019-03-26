import {getTheme} from "../../until/cookie";

export const mutations = {
    SET_THEME: state => {
        state.headerStyle = getTheme('header');
        state.siderStyle = getTheme('sider');
        state.theme = getTheme('theme');
    }
}

