import axios from "../../axios-api";
import {NotificationManager} from "react-notifications";
import {push} from "connected-react-router";

export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_ALBUMS_FAILURE = "FETCH_ALBUMS_FAILURE";

export const FETCH_ALBUM_BY_ID_SUCCESS = "FETCH_ALBUM_BY_ID_SUCCESS";

export const SEND_ALBUM_SUCCESS = 'SEND_ALBUM_SUCCESS';
export const SEND_ALBUM_FAILURE = "SEND_ALBUM_FAILURE";
export const fetchAlbumsSuccess = data => {
    return {type: FETCH_ALBUMS_SUCCESS, data};
};

export const fetchAlbumsByIdSuccess = data => {
    return {type: FETCH_ALBUM_BY_ID_SUCCESS, data};
};

const fetchAlbumsFailure = error => ({type: FETCH_ALBUMS_FAILURE, error});

const sendAlbumSuccess = () => ({type: SEND_ALBUM_SUCCESS});

const sendAlbumFailure = error => ({type: SEND_ALBUM_FAILURE, error});

export const fetchAlbums = (id) => {
    let reqQuery = '/albums';
    if (id) {
        reqQuery += '?artist=' + id;
    }
    return dispatch => {
        return axios.get(reqQuery).then(
            response => dispatch(fetchAlbumsSuccess(response.data)),
            error => dispatch(fetchAlbumsFailure(error))
        );
    };
};

export const fetchAlbumsById = (id) => {
    return dispatch => {
        return axios.get('/albums/' + id).then(
            response => dispatch(fetchAlbumsByIdSuccess(response.data)),
            error => dispatch(fetchAlbumsFailure(error))
        );
    };
};

export const sendAlbum = albumData => {
    return dispatch => {
        return axios.post('/albums', albumData).then(
            () => {
                dispatch(sendAlbumSuccess());
                NotificationManager.success('Created successfully');
                dispatch(push('/'));
            },
            error => {
                if (error.response && error.response.data) {
                    dispatch(sendAlbumFailure(error.response.data));
                } else {
                    dispatch(sendAlbumFailure({global: 'No connection'}))
                }

            }
        )
    }
};