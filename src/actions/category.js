import * as categoryApi from './../apis/category';
import * as cateConstants from './../constants/category'
export const fetchList = () => {
    return {
        type : cateConstants.FETCH_CATEGORY
    }
};
export const fetchListSuccess = data => {
    return {
        type : cateConstants.FETCH_CATEGORY_SUCCESS,
        payload :{
            data
        }
    }
};
export const fetchListFaild = error => {
    return {
        type : cateConstants.FETCH_CATEGORY_FAILED,
        payload :{
            error
        }
    }
};

export const fetchListCate = () => {
    return dispatch => {
        dispatch(fetchList());
        categoryApi.getList()
        .then(res =>{
            const { data } =res;
            dispatch(fetchListSuccess(data));
        }).catch(error =>{
            dispatch(fetchListFaild(error));

        });
    }
}
export const filterCate = keyword => ({
    type : cateConstants.FILTER_CATE,
    payload :{
        keyword
    }
})
export const filterCateSuccess = data => ({
    type : cateConstants.FILTER_CATE_SUCCESS,
    payload :{
        data
    }
})
export const addCate = data => {
    return dispatch => {
        dispatch({  type : cateConstants.ADD_CATE });
        categoryApi.add({data})
        .then(res =>{
            const { data } =res;
            dispatch(addCateSuccess(data));
        }).catch(error =>{
            dispatch(addCateFaild(error));

        });
    }
};
export const addCateSuccess = data => ({
    type : cateConstants.ADD_CATE_SUCCESS,
    payload :{
        data
    }
})

export const addCateFaild = error => ({
    type : cateConstants.ADD_CATE_ERROR,
    payload :{
        error
    }
})