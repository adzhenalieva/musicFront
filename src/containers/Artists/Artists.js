import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import ArtistsList from "../../components/ArtistsList/ArtistsList";
import {fetchArtists} from "../../store/actions/artistActions";


class Artists extends Component {

    componentDidMount() {
        this.props.onFetchArtists();
    }

    goToArtist = id => {
        this.props.history.push({
            pathname: '/artists/' + id
        })
    };

    render() {
        return (
            <Fragment>
                <h1>
                    Artists
                </h1>
                {this.props.artists.map(artist => (
                    <ArtistsList
                        key={artist._id}
                        artist={artist.artist}
                        image={artist.image}
                        click={() => this.goToArtist(artist._id)}/>
                ))}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        artists: state.artists.artists
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchArtists: () => dispatch(fetchArtists())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Artists);