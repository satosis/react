import { combineReducers } from "redux";
import cateReducer from './category'
import uiReducer from './ui'
const rootReducer = combineReducers({
    cateReducer,
    uiReducer,
});
export default rootReducer;