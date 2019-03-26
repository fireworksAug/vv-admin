import axios from '@/until/axios';

// user login
export const UserLogin = (userInfo) => {
    return axios.request({
        url: '/login',
        method: 'post',
        data: userInfo
    })
}
//get user info
export const getUserRoles = (tokenId) => {
    return axios.request({
        url: '/getUserInfo',
        method: 'post',
        data: {
            tokenId
        }
    })
}
