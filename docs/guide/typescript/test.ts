
function update(params: { id: string; name: string }) {
    return true
}






const user = {
    id     : '1',
    name   : 'demo',
    gender : 1 as 0 | 1 | -1,
    address: {
        province: '广东省',
        city    : '深圳',
    },
}




type UserKeys = keyof typeof user



















export {}
