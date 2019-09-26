import {getTheme} from "../../until/localStorage";

export const mutations = {
    SET_THEME: state => {
        state.headerStyle = getTheme('header');
        state.siderStyle = getTheme('sider');
        state.theme = getTheme('theme');
    }
}

