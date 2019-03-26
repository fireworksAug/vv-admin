import Cookie from 'js-cookie';

/**
 * token
 * @param tokenId
 * @param tokenName
 */
// set token cookie
export const setToken = (tokenId, tokenName='tokenId') => {
    Cookie.set(tokenName,tokenId);
};
// get token cookie
export const getToken = (tokenName='tokenId') => {
    return Cookie.get(tokenName);
};
/**
 * userName
 * @param userId
 * @param userName
 */
// set userName
export const setUserName = (userId, userName='userName') => {
    Cookie.set(userName, userId);
};
//get userName
export const getUserName = (userName='userName') => {
    return Cookie.get(userName);
};
/**
 * lang
 * @param langType 语言类型
 * @param lang
 */
export const setLang = (langType='en') => {
    Cookie.set('lang',langType);
};
export const getLang = () => {
    return Cookie.get('lang')
}
/**
 * 设置背景色
 * @param place 部位
 * @param style 部位对应的样式
 */
export const setTheme = (place,style) => {
    Cookie.set(place,style)
};
export const getTheme = (place) => {
    return Cookie.get(place);
}

export const clearToken = () => {
    return new Promise((resolve,reject) => {
        try {
            Cookie.remove('tokenId');
            resolve();
        }catch (e) {
            reject(e);
        }
    })
}
