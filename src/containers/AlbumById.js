import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import TrackList from "../components/Tracklist/TrackList";
import {fetchTracks} from "../store/actions/trackActions";
import {fetchAlbumsById} from "../store/actions/albumActions";


class AlbumById extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.onFetchAlbumById(id);
        this.props.onFetchTracks(id);
    }


    render() {
        return (
            <Fragment>
                <h1 className="mb-3">
                    {this.props.artist}
                </h1>
                <h3 className="mb-3">{this.props.album.title}</h3>

                {this.props.tracks.map(track => (
                    <TrackList
                        key={track._id}
                        title={track.title}
                        duration={track.duration}
                        number={track.number}/>
                ))}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        album: state.albums.albumById,
        tracks: state.tracks.tracks,
        artist: state.albums.albumArtist
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchTracks: id => dispatch(fetchTracks(id)),
        onFetchAlbumById: id => dispatch(fetchAlbumsById(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumById);