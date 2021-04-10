import axios from 'axios';

export function requestGetUser() {
    // we want to return a promise from the request. It will by async called by the yield from the handler side
    return axios.request({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users/1'
    })
}