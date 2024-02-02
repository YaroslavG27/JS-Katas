// function checkCredentials(username, password) {
//     if (username === 'admin' && password === '12345') {
//             return 'granted'
//         } else {
//             return 'denied'
//         }
// }

// const test = checkCredentials('admin', '12645')
// console.log(test)

function checkRole(role) {
    if (role === 'admin' || role === 'editor') {
        return 'granted'
    }
    return 'denied'
}
const test2 = checkRole('user')
console.log(test2)