import axios from "../../axios-api";
import {NotificationManager} from "react-notifications";

export const TOGGLE_PUBLISHED_SUCCESS = 'TOGGLE_PUBLISHED_SUCCESS';
export const TOGGLE_PUBLISHED_FAILURE = "TOGGLE_PUBLISHED_FAILURE";

export const FETCH_ARTISTS_SUCCESS = 'FETCH_ARTISTS_SUCCESS';
export const FETCH_ARTISTS_FAILURE = "FETCH_ARTISTS_FAILURE";

export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_ALBUMS_FAILURE = "FETCH_ALBUMS_FAILURE";

export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const FETCH_TRACKS_FAILURE = "FETCH_TRACKS_FAILURE";

export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = "DELETE_FAILURE";

const fetchArtistsSuccess = data => {
    return {type: FETCH_ARTISTS_SUCCESS, data};
};
const fetchArtistsFailure = error => ({type: FETCH_ARTISTS_FAILURE, error});

 const fetchAlbumsSuccess = data => {
    return {type: FETCH_ALBUMS_SUCCESS, data};
};

const fetchAlbumsFailure = error => ({type: FETCH_ALBUMS_FAILURE, error});

const fetchTracksSuccess = data => {
    return {type: FETCH_TRACKS_SUCCESS, data};
};
const fetchTracksFailure = error => ({type: FETCH_TRACKS_FAILURE, error});

const togglePublishedSuccess = () => ({type: TOGGLE_PUBLISHED_SUCCESS});

const togglePublishedFailure = error => ({type: TOGGLE_PUBLISHED_FAILURE, error});

const deleteSuccess = () => ({type: DELETE_SUCCESS});

const deleteFailure = error => ({type: DELETE_FAILURE, error});

export const fetchAlbumsAdmin = () => {
    return dispatch => {
        return axios.get('/albums/admin').then(
            response => dispatch(fetchAlbumsSuccess(response.data)),
            error => dispatch(fetchAlbumsFailure(error))
        );
    };
};

export const fetchArtistsAdmin = () => {
    return dispatch => {
        return axios.get('/artists/admin').then(
            response => dispatch(fetchArtistsSuccess(response.data)),
            error => dispatch(fetchArtistsFailure(error))
        );
    };
};
export const fetchTracksAdmin = () => {
    return dispatch => {
        return axios.get('/tracks/admin').then(
            response => dispatch(fetchTracksSuccess(response.data)),
            error => dispatch(fetchTracksFailure(error))
        );
    };
};

export const togglePublished = (route, id) => {
    return dispatch => {
        return axios.put('/' + route + '/' + id +'/toggle_published').then(
            () => {
                dispatch(togglePublishedSuccess());
                NotificationManager.success('Toggled successfully');
            },
            error => {
                if (error.response && error.response.data) {
                    dispatch(togglePublishedFailure(error.response.data));
                } else {
                    dispatch(togglePublishedFailure({global: 'No connection'}))
                }

            }
        )
    }
};

export const deleteItem = (route, id) => {
    return dispatch => {
        return axios.delete('/' + route + '/' + id +'/delete').then(
            () => {
                dispatch(deleteSuccess());
                NotificationManager.success('Deleted successfully');
            },
            error => {
                if (error.response && error.response.data) {
                    dispatch(deleteFailure(error.response.data));
                } else {
                    dispatch(deleteFailure({global: 'No connection'}))
                }

            }
        )
    }
};