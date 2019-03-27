import axios from '@/until/axios';
export const getTableData = (form,pageSize) => {
    return axios.request({
        url: '/getTableData',
        method: 'post',
        data: {
            form,
            pageSize
        }
    })
}
