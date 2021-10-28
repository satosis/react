import React, { Component } from 'react';
import './styles.css';
import loadingIcon from './../../assets/images/loading.gif'
import { bindActionCreators ,compose } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as uiActions from "./../../actions/ui";
class GlobalLoading extends Component {
    render() {
        const { showLoading } =this.props;
        let xhtml =null;
        if(showLoading){
            xhtml = (
                <div className="globalLoading">
                    <img src={loadingIcon} alt="loading" className="icon"/>
                </div>
            )
        }
        return xhtml;
    }
};
GlobalLoading.propTypes = {
    showLoading : PropTypes.bool
};
const mapStateToProps = (state) => {
    return {
        showLoading: state.uiReducer.showLoading,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        uiActions : bindActionCreators(uiActions, dispatch),
    };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
    withConnect
)(GlobalLoading)