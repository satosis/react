import React from "react";
import ReactDOM from "react-dom";
import indexRoutes from "./routes/index.jsx";
import { Route, Switch } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./assets/scss/style.css";

import configureStore from "./redux/configureStore";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from "react-redux";
import GlobalLoading from "./components/GlobalLoading/index.js";
ReactDOM.render(
    <Provider store={configureStore()}>
        <ToastContainer/>
        <GlobalLoading/>
        <HashRouter>
            <Switch>
                {indexRoutes.map((prop, key) => {
                    return (
                        <Route
                            path={prop.path}
                            key={key}
                            component={prop.component}
                        />
                    );
                })}
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById("root")
);
