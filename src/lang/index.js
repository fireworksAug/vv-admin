import Vue from 'vue';
import VueI18n from 'vue-i18n';
import {getLang} from "../until/cookie";
import en from './en';
import zh from './zh';
import ien from 'iview/dist/locale/en-US';
import izh from 'iview/dist/locale/zh-CN';
Vue.use(VueI18n);

const messages = {
    en: {
        ...en,
        ien
    },
    zh: {
        ...zh,
        izh
    }
};
const i18n = new VueI18n({
    locale: getLang() || 'zh',
    messages
});
export default i18n;
