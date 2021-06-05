import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-todolist-83c6c-default-rtdb.firebaseio.com/'
});

export default instance;