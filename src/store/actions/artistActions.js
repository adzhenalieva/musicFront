import axios from "../../axios-api";

export const FETCH_ARTISTS_SUCCESS = 'FETCH_ARTISTS_SUCCESS';

export const FETCH_ARTISTS_FAILURE = "FETCH_ARTISTS_FAILURE";
export const FETCH_ARTIST_BY_ID_SUCCESS = "FETCH_ARTIST_BY_ID_SUCCESS";

export const fetchArtistsSuccess = data => {
    return {type: FETCH_ARTISTS_SUCCESS, data};
};
export const fetchArtistsByIdSuccess = data => {
    return {type: FETCH_ARTIST_BY_ID_SUCCESS, data};
};
const fetchArtistsFailure = error => ({type: FETCH_ARTISTS_FAILURE, error});

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
        return axios.get('/artists/'+id).then(
            response => dispatch(fetchArtistsByIdSuccess(response.data)),
            error => dispatch(fetchArtistsFailure(error))
        );
    };
};