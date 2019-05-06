import axios from "../../axios-api";
import {NotificationManager} from "react-notifications";
import {push} from "connected-react-router";

export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const FETCH_TRACKS_FAILURE = "FETCH_TRACKS_FAILURE";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const SHOW_MODAL = "SHOW_MODAL";
export const SEND_TRACK_SUCCESS = 'SEND_TRACK_SUCCESS';
export const SEND_TRACK_FAILURE = "SEND_TRACK_FAILURE";

const fetchTracksSuccess = data => {
    return {type: FETCH_TRACKS_SUCCESS, data};
};
const fetchTracksFailure = error => ({type: FETCH_TRACKS_FAILURE, error});

const sendTrackSuccess = () => ({type: SEND_TRACK_SUCCESS});
const sendTrackFailure = error => {
    return {type: SEND_TRACK_FAILURE, error}
};

export const closeModal = () => ({type: CLOSE_MODAL});
export const showModal = link => ({type: SHOW_MODAL, link});

export const fetchTracks = id => {
    return dispatch => {
        let reqQuery ='/tracks';
        if(id){
             reqQuery += '?album=' + id;
        }
        return axios.get(reqQuery).then(
            response => dispatch(fetchTracksSuccess(response.data)),
            error => dispatch(fetchTracksFailure(error))
        );
    };
};

export const sendTrack = trackData => {
    return dispatch => {
        return axios.post('/tracks', trackData).then(
            () => {
                dispatch(sendTrackSuccess());
                NotificationManager.success('Created successfully');
                dispatch(push('/'));
            },
            error => {
                if (error.response && error.response.data) {
                    dispatch(sendTrackFailure(error.response.data));
                } else {
                    dispatch(sendTrackFailure({global: 'No connection'}))
                }

            }
        )
    }
};