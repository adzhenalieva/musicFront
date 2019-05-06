import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import TrackList from "../../components/Tracklist/TrackList";
import {closeModal, fetchTracks, showModal} from "../../store/actions/trackActions";
import {fetchAlbumsById} from "../../store/actions/albumActions";
import {postHistory} from "../../store/actions/trackHistoryActions";
import Modal from "../../components/UI/Modal/Modal";



class AlbumById extends Component {

    state = {
        show: false
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.onFetchAlbumById(id);
        this.props.onFetchTracks(id);
    }

    addTrack = (id, link) => {
        if (this.props.user) {
            this.props.addTrack({track: id})
        }
        this.props.showModal(link)
    };


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
                        number={track.number}
                        play={() => this.addTrack(track._id, track.link)}
                        published={track.published ? null : 'unpublished'}/>
                ))}

                <Modal show={this.props.show}
                       close={this.props.closeModal}
                       link={this.props.link}>

                </Modal>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        album: state.albums.albumById,
        tracks: state.tracks.tracks,
        artist: state.albums.albumArtist,
        link: state.tracks.link,
        show: state.tracks.show,
        user: state.users.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchTracks: id => dispatch(fetchTracks(id)),
        onFetchAlbumById: id => dispatch(fetchAlbumsById(id)),
        addTrack: id => dispatch(postHistory(id)),
        closeModal: () => dispatch(closeModal()),
        showModal: link => dispatch(showModal(link))

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumById);