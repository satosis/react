import axiosService from './../commons/axiosService';
import  { API_ENDPOINT } from './../constants';
const url = './category';
export const getList = () => {
    return axiosService.get(`${API_ENDPOINT}/${url}`);
}
export const add = data => {
    return axiosService.post(`${API_ENDPOINT}/${url}`,data);
}