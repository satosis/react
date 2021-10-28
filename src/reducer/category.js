import * as cateConstants from '../constants/category';
import { toastError } from './../helpers/toastrHelper';
const initialState = {
    listCategory : []
};
const categoryReducer = ( state=initialState,action) => {
    switch(action.type){
        case cateConstants.FETCH_CATEGORY :
            return{
                ...state,
                listCategory : []
            }
        case cateConstants.FETCH_CATEGORY_SUCCESS :
            const { data } = action.payload;
            return{
                ...state,
                listCategory : data
            }
        case cateConstants.FETCH_CATEGORY_FAILED :
            const { error } = action.payload ;
            toastError(error);
            return{
                ...state,
                listCategory : []
            }
        case cateConstants.FILTER_CATE_SUCCESS:{
            const { data } = action.payload;
            return {
                ...state,
                listCategory : data
            };
        }
        case cateConstants.ADD_CATE:{
            return {
                ...state,
            };
        }
        case cateConstants.ADD_CATE_SUCCESS :
            return{
                ...state,
            }
        case cateConstants.ADD_CATE_ERROR :
            toastError(error);
            return{
                ...state,
            }
        default:
            return state;
    }
}
export default categoryReducer;