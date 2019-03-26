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
