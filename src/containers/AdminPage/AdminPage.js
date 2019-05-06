import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {Table} from "reactstrap";

import {
    deleteItem,
    fetchAlbumsAdmin,
    fetchArtistsAdmin,
    fetchTracksAdmin,
    togglePublished
} from "../../store/actions/adminActions";



class AdminPage extends Component {

    componentDidMount() {
        this.props.onFetchArtists();
        this.props.onFetchAlbums();
        this.props.fetchTracks();
    }

    togglePublished = (route, id) => {
        this.props.togglePublished(route, id).then(
            () => {
                this.props.onFetchArtists();
                this.props.onFetchAlbums();
                this.props.fetchTracks();
            }
        )
    };

    delete = (route, id) => {
        this.props.delete(route, id).then(
            () => {
                this.props.onFetchArtists();
                this.props.onFetchAlbums();
                this.props.fetchTracks();
            }
        )
    };


    render() {
        return (
            <Fragment>
                <h3>Artists list</h3>
                <Table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Id</th>
                        <th>Published</th>
                        <th>Change "publish" status</th>
                        <th>Delete button</th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.props.artists.map(artist => (
                        <tr key={artist._id}>
                            <td>{artist.artist}</td>
                            <td>id: {artist._id}</td>
                            <td>{artist.published ? 'published' : 'unpublished'}</td>
                            <td>
                                <button onClick={() => this.togglePublished('artists', artist._id)}>Toggle</button>
                            </td>
                            <td>
                                <button onClick={() => this.delete('artists', artist._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>

                <h3>Albums list</h3>
                <Table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Id</th>
                        <th>Album's artist Id</th>
                        <th>Published</th>
                        <th>Change "publish" status</th>
                        <th>Delete button</th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.props.albums.map(album => (
                        <tr key={album._id}>
                            <td>{album.title}</td>
                            <td>{album._id}</td>
                            <td>{album.artist ? album.artist._id : 'Artist deleted'}</td>
                            <td>{album.published ? 'published' : 'unpublished'}</td>
                            <td>
                                <button onClick={() => this.togglePublished('albums', album._id)}>Toggle</button>
                            </td>
                            <td>
                                <button onClick={() => this.delete('albums', album._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <h3>Tracks list</h3>
                <Table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Id</th>
                        <th>Album Id</th>
                        <th>Published</th>
                        <th>Change "publish" status</th>
                        <th>Delete button</th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.props.tracks.map(track => (
                        <tr key={track._id}>
                            <td>{track.title}</td>
                            <td>{track._id}</td>
                            <td>{track.album ? track.album._id : 'Album deleted'}</td>
                            <td>{track.published ? 'published' : 'unpublished'}</td>
                            <td>
                                <button onClick={() => this.togglePublished('tracks', track._id)}>Toggle</button>
                            </td>
                            <td>
                                <button onClick={() => this.delete('tracks', track._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        artists: state.admin.artists,
        albums: state.admin.albums,
        tracks: state.admin.tracks,
        error: state.admin.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchArtists: () => dispatch(fetchArtistsAdmin()),
        onFetchAlbums: () => dispatch(fetchAlbumsAdmin()),
        togglePublished: (route, id) => dispatch(togglePublished(route, id)),
        fetchTracks: () => dispatch(fetchTracksAdmin()),
        delete: (route, id) => dispatch(deleteItem(route, id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);