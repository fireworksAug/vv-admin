import {UserLogin,getUserRoles} from "../../../api/login";
import {getToken, setToken} from "../../../until/cookie";

export default {
    state: {},
    getters: {},
    mutations: {},
    actions: {
        // login
        login({commit}, userInfo) {
            return new Promise((resolve, reject) => {
                UserLogin(userInfo).then(res => {
                    const { data } = res;
                    setToken(data.tokenId)
                    resolve();
                }).catch(err => {
                    reject(err);
                });
            })
        },
        // 拉取用户权限数组
        GetUserInfo({commit}) {
            return new Promise((resolve,reject) => {
                getUserRoles(getToken()).then(({data}) => {
                    resolve(data);
                }).catch(err => {
                    reject(err);
                })
            });
        }
    }
}
