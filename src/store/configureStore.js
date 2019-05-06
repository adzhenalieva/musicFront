import {createBrowserHistory} from "history";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import axios from '../axios-api';
import artistsReducer from "./reducers/artistsReducer";
import albumReducer from "./reducers/albumReducer";
import trackReducer from "./reducers/trackReducer";
import usersReducer from "./reducers/usersReducer";
import trackHistoryReducer from "./reducers/trackHistoryReducer";
import adminReducer from "./reducers/adminReducer";
import {connectRouter, routerMiddleware} from "connected-react-router";
import thunkMiddleware from "redux-thunk";
import {loadFromLocalStorage, saveToLocalStorage} from "./LocalStorage";

export const history = createBrowserHistory();



const rootReducer = combineReducers({
    artists: artistsReducer,
    albums: albumReducer,
    tracks: trackReducer,
    users: usersReducer,
    trackHistories: trackHistoryReducer,
    admin: adminReducer,
    router: connectRouter(history)
});

const middleware = [
    thunkMiddleware,
    routerMiddleware(history)
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(...middleware));
const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
    saveToLocalStorage({
        users: {
            user: store.getState().users.user
        }

    })
});

axios.interceptors.request.use(config => {
    try {
        config.headers['Authorization'] = store.getState().users.user.token;
    } catch (e) {
        //do nothing, user is not logged in
    }
    return config;
});


export default store;