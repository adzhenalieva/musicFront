import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {Form, FormGroup, Col, Button, Alert} from "reactstrap";


import FormElement from "../../components/UI/Form/FormElement";
import {fetchArtists} from "../../store/actions/artistActions";
import {fetchAlbums} from "../../store/actions/albumActions";
import {sendTrack} from "../../store/actions/trackActions";


class TrackAdd extends Component {

    state = {
        artist: '',
        album: '',
        duration: '',
        link: '',
        title: ''
    };

    componentDidMount() {
        if (!this.props.user) {
            this.props.history.push('/login');
        }
        this.props.fetchArtists()
            .then(() => {
                    this.setState({artist: this.props.artists[0]._id})
                })
            .then(() => {
                    this.props.fetchAlbums(this.props.artists[0]._id).then(
                        () => {
                            this.setState({album: this.props.albums[0]._id})
                        }
                    );
                }
            )
    }

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    inputChangeSelect = event => {
        this.setState({artist: event.target.value});
        this.props.fetchAlbums(event.target.value).then(
            () => this.setState({album: this.props.albums[0]._id})
        )
    };


    submitFormHandler = event => {
        event.preventDefault();
        const formData = {...this.state};
        this.props.sendTrack(formData);

    };


    fieldHasError = fieldName => {
        return this.props.error && this.props.error.errors && this.props.error.errors[fieldName] && this.props.error.errors[fieldName].message;
    };

    render() {
        console.log(this.state);
        return (
            <Fragment>
                {this.props.error && this.props.error.global && (
                    <Alert color="danger">
                        Check the internet connection
                    </Alert>
                )}
                <Form onSubmit={this.submitFormHandler}>
                    <h2>Add new track</h2>
                    <FormElement
                        propertyName="title"
                        title="Title"
                        type="text"
                        value={this.state.title}
                        onChange={this.inputChangeHandler}
                        error={this.fieldHasError('title')}
                        placeholder="Enter track title"
                    />
                    <FormElement
                        propertyName="artist"
                        title="Artist"
                        type="select"
                        value={this.state.artist}
                        error={this.fieldHasError('artist')}
                        onChange={this.inputChangeSelect}
                    >
                        {this.props.artists.map(artist => (
                                <option key={artist._id}
                                        value={artist._id}>
                                    {
                                        artist.artist}
                                </option>
                            )
                        )}
                    </FormElement>
                    <FormElement
                        propertyName="album"
                        title="Album"
                        type="select"
                        value={this.state.album}
                        error={this.fieldHasError('album')}
                        onChange={this.inputChangeHandler}
                    >
                        {this.props.albums.map(album => (
                                <option key={album._id}
                                        value={album._id}>
                                    {
                                        album.title}
                                </option>
                            )
                        )}
                    </FormElement>
                    <FormElement
                        propertyName="duration"
                        title="Duration"
                        type="text"
                        value={this.state.duration}
                        onChange={this.inputChangeHandler}
                        error={this.fieldHasError('duration')}
                        placeholder="Enter track duration"
                    />
                    <FormElement
                        propertyName="link"
                        title="Link"
                        type="text"
                        value={this.state.link}
                        onChange={this.inputChangeHandler}
                        error={this.fieldHasError('link')}
                        placeholder="Enter track link"
                    />
                    <FormGroup row>
                        <Col sm={{offset: 2, size: 10}}/>
                        <Button className="ml-3" type="submit" color="primary">Publish</Button>
                    </FormGroup>
                </Form>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    error: state.albums.error,
    user: state.users.user,
    artists: state.artists.artists,
    albums: state.albums.albums
});

const mapDispatchToProps = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists()),
    sendTrack: formData => dispatch(sendTrack(formData)),
    fetchAlbums: artist => dispatch(fetchAlbums(artist))

});

export default connect(mapStateToProps, mapDispatchToProps)(TrackAdd);