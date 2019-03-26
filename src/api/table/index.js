import axios from '@/until/axios';
export const getTableData = (form) => {
    return axios.request({
        url: '/getTableData',
        method: 'post',
        data: form
    })
}
