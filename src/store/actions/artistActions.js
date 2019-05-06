import axios from "../../axios-api";
import {push} from "connected-react-router";
import {NotificationManager} from 'react-notifications';

export const FETCH_ARTISTS_SUCCESS = 'FETCH_ARTISTS_SUCCESS';

export const FETCH_ARTISTS_FAILURE = "FETCH_ARTISTS_FAILURE";
export const FETCH_ARTIST_BY_ID_SUCCESS = "FETCH_ARTIST_BY_ID_SUCCESS";
export const SEND_ARTIST_SUCCESS = 'SEND_ARTIST_SUCCESS';
export const SEND_ARTIST_FAILURE = "SEND_ARTIST_FAILURE";

export const fetchArtistsSuccess = data => {
    return {type: FETCH_ARTISTS_SUCCESS, data};
};
export const fetchArtistsByIdSuccess = data => {
    return {type: FETCH_ARTIST_BY_ID_SUCCESS, data};
};
const fetchArtistsFailure = error => ({type: FETCH_ARTISTS_FAILURE, error});

const sendArtistSuccess = () => ({type: SEND_ARTIST_SUCCESS});

const sendArtistFailure = error => ({type: SEND_ARTIST_FAILURE, error});

export const fetchArtists = () => {
    return dispatch => {
        return axios.get('/artists').then(
            response => dispatch(fetchArtistsSuccess(response.data)),
            error => dispatch(fetchArtistsFailure(error))
        );
    };
};

export const fetchArtistsById = id => {
    return dispatch => {
        return axios.get('/artists/' + id).then(
            response => dispatch(fetchArtistsByIdSuccess(response.data)),
            error => dispatch(fetchArtistsFailure(error))
        );
    };
};

export const sendArtist = artistData => {
    return dispatch => {
        return axios.post('/artists', artistData).then(
            () => {
                dispatch(sendArtistSuccess());
                NotificationManager.success('Created successfully');
                dispatch(push('/'));
            },
            error => {
                if (error.response && error.response.data) {
                    dispatch(sendArtistFailure(error.response.data));
                } else {
                    dispatch(sendArtistFailure({global: 'No connection'}))
                }

            }
        )
    }
};