import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import {createBrowserHistory} from "history";
import {connectRouter, routerMiddleware, ConnectedRouter} from "connected-react-router";

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import artistsReducer from './store/reducers/artistsReducer';
import albumReducer from './store/reducers/albumReducer';
import trackReducer from './store/reducers/trackReducer';
import './index.css';

const history = createBrowserHistory();


const rootReducer = combineReducers({
    artists: artistsReducer,
    albums: albumReducer,
    tracks: trackReducer,
    router: connectRouter(history)
});

const middleware = [
    thunkMiddleware,
    routerMiddleware(history)
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(rootReducer, enhancers);

const app = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
