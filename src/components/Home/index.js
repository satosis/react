import React, { Component } from 'react';
import { connect } from 'react-redux'
import Banner from './Banner';
import App from '../../App';
import MainView from './MainView';
import agent from '../../agent'
import Tags from './Tags';
// const Promise = global.Promise;
// map global redux state   
const mapStateToProps = state => ({
    ...state.home,
    appName: state.common.appName,
    token: state.common.token
})
const mapDispatchToProps = dispatch => ({
    onClickTag: (tag, payload) =>
      dispatch({ type: 'APPLY_TAG_FILTER', tag, payload }),
    onLoad: (tab, payload) =>
      dispatch({ type: 'HOME_PAGE_LOADED', tab, payload }),
    onUnload: () =>
      dispatch({  type: 'HOME_PAGE_UNLOADED' })
  });
  
class Home extends Component {
    componentWillMount() {
        const tab = this.props.token ? 'feed' : 'all';
        const articlesPromise = this.props.token ?
            agent.Articles.feed() :
            agent.Articles.all();
        this.props.onLoad(tab, Promise.all([agent.Tags.getAll(), articlesPromise]));
      }
    render() {
        return (
            <div>
                <App/>
            <div className="home-page">
                <Banner appName={this.props.appName}/>
                <div className="container page">
                    <div className="row">
                        <MainView/>
                        <div className="col-md-3">
                            <div className="sidebar">
                                <p>Popular Tag</p>
                                <Tags tags={this.props.tags} onClickTag={this.props.onClickTag}/>
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