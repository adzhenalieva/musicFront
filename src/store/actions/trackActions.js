import axios from "../../axios-api";

export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const FETCH_TRACKS_FAILURE = "FETCH_TRACKS_FAILURE";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const SHOW_MODAL = "SHOW_MODAL";

export const fetchTracksSuccess = data => {
    return {type: FETCH_TRACKS_SUCCESS, data};
};
const fetchTracksFailure = error => ({type: FETCH_TRACKS_FAILURE, error});
export const closeModal = () => ({type: CLOSE_MODAL});
export const showModal = link => ({type: SHOW_MODAL, link});

export const fetchTracks = id => {
    return dispatch => {
        const reqQuery = '?album=' + id;

        return axios.get('/tracks' + reqQuery).then(
            response => dispatch(fetchTracksSuccess(response.data)),
            error => dispatch(fetchTracksFailure(error))
        );
    };
};