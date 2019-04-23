import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import {withRouter} from "react-router";

import Container from "reactstrap/es/Container";

import Artists from "./containers/Artists/Artists";
import ArtistById from "./containers/ArtistById/ArtistById";
import AlbumById from "./containers/AlbumById/AlbumById";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import TrackHistory from "./containers/TrackHistory/TrackHistory";
import {logoutUser} from "./store/actions/usersActions";



class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <Toolbar user={this.props.user}
                             logout={this.props.logoutUser}/>
                </header>
                <Container className="mt-5">
                    <Switch>
                        <Route path="/" exact component={Artists}/>
                        <Route path="/artists/:id" component={ArtistById}/>
                        <Route path="/albums/:id" component={AlbumById}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/track_history" component={TrackHistory}/>
                    </Switch>
                </Container>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


