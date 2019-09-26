
import {themeObj} from '../../config/theme-config';
import {getTheme} from "../../until/localStorage";
export const state = {
    headerStyle: getTheme('header') ? getTheme('header') : themeObj.light.headerBg,
    siderStyle: getTheme('sider') ? getTheme('sider') : themeObj.light.siderBg,
    theme: getTheme('theme') ? getTheme('theme') : themeObj.light.theme
}
