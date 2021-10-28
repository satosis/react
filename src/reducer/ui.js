import * as ui from '../constants/ui';
const initialState = {
    showLoading : false
}
const uiReducer = ( state =initialState ,action) => {
    switch(action.type){
        case ui.SHOW_LOADING :
            return {
                ...state,
                showLoading : true
            }
        
        case ui.HIDE_LOADING :
            return {
                ...state,
                showLoading : false
            }
        
        default :
            return state;
    }
}
export default uiReducer;
