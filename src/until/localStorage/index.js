// 本地存储tags
export const setLocalTagsList = (list) => {
    localStorage.setItem('tagsList',JSON.stringify(list));
};
// 本地读取
export const getLocalTagsList = () => {
    const list = localStorage.getItem('tagsList');
    return list ?  JSON.parse(list) : [];
};
// 清空localStroage 信息
export const clearLocalStroage = () => {
    localStorage.clear();
}
/**
 * lang
 * @param langType 语言类型
 * @param lang
 */
export const setLang = (langType='en') => {
    localStorage.set('lang',langType);
};
export const getLang = () => {
    return localStorage.get('lang')
}
/**
 * 设置背景色
 * @param place 部位
 * @param style 部位对应的样式
 */
export const setTheme = (place,style) => {
    localStorage.set(place,style)
};
export const getTheme = (place) => {
    return localStorage.get(place);
}
