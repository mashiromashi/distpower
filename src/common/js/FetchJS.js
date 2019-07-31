import Axios from 'axios';

const data1 = async () => {
    const response = await Axios.get('https://jsonplaceholder.typicode.com/comments');
    const resData = await response.data;
    return resData;
}

const data2 = async () => {
    const response = await Axios.get('https://jsonplaceholder.typicode.com/posts');
    const resData = await response.data;
    return resData;
}

const data3 = async () => {
    const response = await Axios.get('https://jsonplaceholder.typicode.com/photos');
    const resData = await response.data;
    return resData;
}

export { data1, data2, data3 };


