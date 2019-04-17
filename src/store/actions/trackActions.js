import axios from "../../axios-api";

export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';

export const FETCH_TRACKS_FAILURE = "FETCH_TRACKS_FAILURE";

export const fetchTracksSuccess = data => {
    return {type: FETCH_TRACKS_SUCCESS, data};
};
const fetchTracksFailure = error => ({type: FETCH_TRACKS_FAILURE, error});

export const fetchTracks = id => {
    return dispatch => {
        const reqQuery = '?album=' + id;

        return axios.get('/tracks' + reqQuery).then(
            response => dispatch(fetchTracksSuccess(response.data)),
            error => dispatch(fetchTracksFailure(error))
        );
    };
};