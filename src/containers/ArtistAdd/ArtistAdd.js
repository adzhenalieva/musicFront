import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {Form, FormGroup, Col, Button, Alert} from "reactstrap";


import FormElement from "../../components/UI/Form/FormElement";
import {sendArtist} from "../../store/actions/artistActions";



class ArtistAdd extends Component {

    state = {
        artist: '',
        info: '',
        image: ''
    };

    componentDidMount() {
        if (!this.props.user) {
            this.props.history.push('/login');
        }
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
        this.props.sendArtist(formData);
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
                    <h2>Add new artist</h2>
                    <FormElement
                        propertyName="artist"
                        title="Artist"
                        type="text"
                        value={this.state.artist}
                        onChange={this.inputChangeHandler}
                        error={this.fieldHasError('artist')}
                        placeholder="Enter artist name"
                    />
                    <FormElement
                        propertyName="info"
                        title="Information"
                        type="text"
                        value={this.state.info}
                        onChange={this.inputChangeHandler}
                        error={this.fieldHasError('info')}
                        placeholder="Enter information about artist"
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
                        <Button className="ml-3" type="submit" color="primary">Create</Button>
                    </FormGroup>
                </Form>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    error: state.artists.error,
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    sendArtist: artistData => dispatch(sendArtist(artistData))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistAdd);