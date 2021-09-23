import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom"
import Home from './components/Home';
import store from './store';
import Login from './components/Login';
import './index.css';
import SignUp from './components/SignUp';
import Settings from './components/Settings';
import Article from './components/Article';
import Profile from './components/Profile';
import ProfileFavorites from './components/ProfileFavorites';
import Editor from './components/Editor';
 

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} /> 
                <Route path="/login" component={Login}/>
                <Route path="/signup"  component={SignUp}/>
                <Route path="/settings" component={Settings}/>
                <Route path={"/article/:id"} component={Article}/>
                <Route path={"/user/:username"} component={Profile}/>
                <Route path={"/users/:username/favorites"} component={ProfileFavorites}/>
                <Route path="/editor"  component={Editor}/>
                <Route path={"/editors/:slug"}  component={Editor}/>
            </Switch>
        </Router>
    </Provider>,
     document.getElementById('root')
  );
  