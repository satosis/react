import { fork, take ,call ,put ,takeLatest ,delay , select } from 'redux-saga/effects'
import * as cateConstants from './../constants/category'
import { getList } from './../apis/category';
import { showLoading,hideLoading } from "../actions/ui";
import * as cateActions from "./../actions/category";
function* watchFetchListCategoryAction(){
    try {
    yield put(showLoading());
    yield put(cateActions.fetchListCate());
    yield take(cateConstants.FETCH_CATEGORY_SUCCESS);
    yield delay(1000);
    yield put(hideLoading());
    const res = yield call(getList);
} catch (error) {
    console.log("error while launching set snack bar action : " + error);
  }
}
function* watchCreateCategoryAction(){
}
function* filterCateSaga({ payload }){
    yield delay(1000);
    const {keyword} = payload;
    const list = yield select(state =>state.cateReducer.listCategory);
    const filterCate = list.filter(cate => cate.name.trim().toLowerCase().includes(keyword.toLowerCase().trim()) || cate.slug.trim().toLowerCase().includes(keyword.toLowerCase().trim()))
    yield put(cateActions.fetchListSuccess(filterCate));
}
function* rootSaga(){
    yield fork(watchFetchListCategoryAction);
    yield fork(watchCreateCategoryAction);
    yield takeLatest(cateConstants.FILTER_CATE,filterCateSaga);
}
export default rootSaga;
    