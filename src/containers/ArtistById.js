import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {fetchArtistsById} from "../store/actions/artistActions";
import {CardColumns} from "reactstrap";
import AlbumsList from "../components/AlbumsList/AlbumsList";
import {fetchAlbumsByArtist} from "../store/actions/albumActions";


class ArtistById extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.onFetchArtist(id);
        this.props.onFetchAlbums(id);
    }
    goToAlBumById = id => {
        this.props.history.push({
            pathname: '/albums/' + id
        })
    };

    render() {
        return (
            <Fragment>
                <h1>
                    {this.props.artist.artist}
                </h1>
                <CardColumns>
                    {this.props.albums.map(album => (
                        <AlbumsList
                            key={album._id}
                            title={album.title}
                            image={album.image}
                            year={album.year}
                            click={() => this.goToAlBumById(album._id)}/>
                    ))}
                </CardColumns>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        artist: state.artists.artistById,
        albums: state.albums.albums
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchArtist: (id) => dispatch(fetchArtistsById(id)),
        onFetchAlbums: id => dispatch(fetchAlbumsByArtist(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistById);