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
