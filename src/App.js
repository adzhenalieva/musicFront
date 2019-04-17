import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import Container from "reactstrap/es/Container";

import Artists from "./containers/Artists";

import ArtistById from "./containers/ArtistById";
import AlbumById from "./containers/AlbumById";



class App extends Component {
    render() {
        return (
            <div>
                <Container className="mt-5">
                    <Switch>
                        <Route path="/" exact component={Artists}/>
                        <Route path="/artists/:id" component={ArtistById}/>
                        <Route path="/albums/:id" component={AlbumById}/>
                    </Switch>
                </Container>
            </div>
        );
    }
}

export default App;


