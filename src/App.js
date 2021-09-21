import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Home from './components/Home';
// map global redux state   
const mapStateToProps = state => ({
    appName: state.common.appName
})
class App extends Component {
   
    render() {
        return (
            <div>
                <Header appName={this.props.appName}/>
                <Home/>
            </div>
        );
    }
}

export default connect(mapStateToProps, ()=> ({}))(App);