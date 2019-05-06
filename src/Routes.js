import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Artists from "./containers/Artists/Artists";
import ArtistById from "./containers/ArtistById/ArtistById";
import ArtistAdd from "./containers/ArtistAdd/ArtistAdd";
import AlbumById from "./containers/AlbumById/AlbumById";
import TrackHistory from "./containers/TrackHistory/TrackHistory";
import AlbumAdd from "./containers/AlbumAdd/AlbumAdd";
import TrackAdd from "./containers/TrackAdd/TrackAdd";
import AdminPage from "./containers/AdminPage/AdminPage";

const ProtectedRoute = ({isAllowed, ...props}) => (
    isAllowed ? <Route {...props} /> : <Redirect to={"/login"}/>
);

const Routes = ({user}) => {
    return (
        <Switch>
            <Route path="/" exact component={Artists}/>
            <ProtectedRoute isAllowed={user && user.role === 'admin'}
                            path="/admin" exact component={AdminPage}/>
            <ProtectedRoute isAllowed={user}
                            path="/artists/new" exact
                            component={ArtistAdd}/>
            <ProtectedRoute isAllowed={user}
                            path="/albums/new" exact
                            component={AlbumAdd}/>
            <ProtectedRoute isAllowed={user}
                            path="/tracks/new" exact
                            component={TrackAdd}/>
            <Route path="/artists/:id" component={ArtistById}/>
            <Route path="/artists/new" component={ArtistAdd}/>
            <Route path="/albums/:id" component={AlbumById}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/login" exact component={Login}/>
            <ProtectedRoute isAllowed={user}
                            path="/track_history"
                            component={TrackHistory}/>
        </Switch>
    );
};

export default Routes;