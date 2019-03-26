import Mock from 'mockjs';
const random = Mock.Random;
let count = 100;
export const getTable = (value) => {
    console.log(value);
    let list = [];
    for(let i = 0; i < count; i++) {
        list.push({
            pro_num: '',
            pro_name: '',
            'pro_status|1-2': 2,
            pro_date: random.datetime('yyyy-MM-dd HH:mm:ss')
        })
    }
    return list;
}
