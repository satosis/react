import React, { Component } from 'react';
import { connect } from 'react-redux'
import Banner from './Banner';
import MainView from './MainView';
import agent from '../../agent'
import Header from '../Header';
// const Promise = global.Promise;
// map global redux state   
const mapStateToProps = state => ({
    appName: state.common.appName
})
const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
      dispatch({ type: 'HOME_PAGE_LOADED', payload }),
    });
class Home extends Component {
    componentWillMount() {
           this.props.onLoad(agent.Articles.all());
        }
    render() {
        return (
            <div>
                <Header appName={this.props.appName}/>
            <div className="home-page">
                <Banner appName={this.props.appName}/>
                <div className="container page">
                    <div className="row">
                        <MainView/>
                        <div className="col-md-3">
                            <div className="sidebar">
                                <p>Popular Tag</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);