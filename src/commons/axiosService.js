import axios from 'axios';
class AxiosService {
    constructor(){
        const instance = axios.create();
        instance.interceptors.response.use(this.handleSuccess,this.handleFail)
        this.instance = instance;
    }
    handleSuccess(res){
        return res;
    };
    handleFail(err){
        return Promise.reject(err);
    };
    get(url){
        return this.instance.get(url);
    };
    post(url){
        return this.instance.post(url);
    };
    put(url){
        return this.instance.put(url);
    };
    delete(url){
        return this.instance.delete(url);
    };
}
export default new AxiosService();