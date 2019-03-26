import Mock from 'mockjs';
const random = Mock.Random;
export const loginTest = (value) => {
    return {
        tokenId: random.string(7,9)
    }
}
export const getUserInfoTest = (value) => {
    return {
        roles: ['roleB']
    }
}
