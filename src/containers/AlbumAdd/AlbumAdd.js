import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {Form, FormGroup, Col, Button, Alert} from "reactstrap";


import FormElement from "../../components/UI/Form/FormElement";
import {fetchArtists} from "../../store/actions/artistActions";
import {sendAlbum} from "../../store/actions/albumActions";



class AlbumAdd extends Component {

    state = {
        artist: '',
        year: '',
        image: '',
        title: ''
    };

    componentDidMount() {
        if (!this.props.user) {
            this.props.history.push('/login');
        }
        this.props.fetchArtists().then(
            () => {
                this.setState({artist: this.props.artists[0]._id})
            }
        )
    }

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    submitFormHandler = event => {
        event.preventDefault();
        const formData = new FormData();
        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });
        this.props.sendAlbum(formData);
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        })

    };

    fieldHasError = fieldName => {
        return this.props.error && this.props.error.errors && this.props.error.errors[fieldName] && this.props.error.errors[fieldName].message;
    };

    render() {
        return (
            <Fragment>
                {this.props.error && this.props.error.global && (
                    <Alert color="danger">
                        Check the internet connection
                    </Alert>
                )}
                <Form onSubmit={this.submitFormHandler}>
                    <h2>Add new album</h2>
                    <FormElement
                        propertyName="title"
                        title="Title"
                        type="text"
                        value={this.state.title}
                        onChange={this.inputChangeHandler}
                        error={this.fieldHasError('title')}
                        placeholder="Enter album title"
                    />
                    <FormElement
                        propertyName="artist"
                        title="Artist"
                        type="select"
                        value={this.state.artist}
                        onChange={this.inputChangeHandler}
                        error={this.fieldHasError('artist')}
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
                        propertyName="year"
                        title="Release year"
                        type="text"
                        value={this.state.year}
                        onChange={this.inputChangeHandler}
                        error={this.fieldHasError('year')}
                        placeholder="Enter year of the release"
                    />
                    <FormElement
                        propertyName="image"
                        title="Image"
                        type="file"
                        onChange={this.fileChangeHandler}
                        error={this.fieldHasError('image')}
                    />
                    <FormGroup row>
                        <Col sm={{offset: 2, size: 10}} />
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
    artists: state.artists.artists
});

const mapDispatchToProps = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists()),
    sendAlbum: albumData => dispatch(sendAlbum(albumData))

});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumAdd);