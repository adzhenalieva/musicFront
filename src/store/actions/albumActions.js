import axios from "../../axios-api";

export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';

export const FETCH_ALBUMS_FAILURE = "FETCH_ALBUMS_FAILURE";

export const FETCH_ALBUM_BY_ID_SUCCESS = "FETCH_ALBUM_BY_ID_SUCCESS";

export const fetchAlbumsSuccess = data => {
    return {type: FETCH_ALBUMS_SUCCESS, data};
};

export const fetchAlbumsByIdSuccess = data => {
    return {type: FETCH_ALBUM_BY_ID_SUCCESS, data};
};

const fetchAlbumsFailure = error => ({type: FETCH_ALBUMS_FAILURE, error});

export const fetchAlbumsByArtist = (id) => {
    const reqQuery = '?artist=' + id;
    return dispatch => {
        return axios.get('/albums' + reqQuery).then(
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