import Mock from 'mockjs';
const random = Mock.Random;
export const getTable = (value) => {
    let count = JSON.parse(value.body).pageSize;
    let list = [];
    for(let i = 0; i < count; i++) {
        list.push({
            pro_num: random.zip(),
            pro_name: random.name(),
            pro_status: random.natural(1,3),
            pro_date: random.datetime('yyyy-MM-dd HH:mm:ss')
        })
    }
    return list;
}
