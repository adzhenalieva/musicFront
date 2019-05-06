
import {DELETE_FAILURE, TOGGLE_PUBLISHED_FAILURE,  FETCH_ARTISTS_FAILURE,
    FETCH_ARTISTS_SUCCESS, FETCH_ALBUMS_SUCCESS, FETCH_ALBUMS_FAILURE, FETCH_TRACKS_FAILURE, FETCH_TRACKS_SUCCESS} from "../actions/adminActions";

const initialState = {
    error: null,
    artists: [],
    albums: [],
    tracks: []

};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_PUBLISHED_FAILURE:
            return {
                ...state,
                error: action.error
            };
        case FETCH_ARTISTS_SUCCESS:
            return {
                ...state,
                artists: action.data
            };
        case FETCH_ARTISTS_FAILURE:
            return {
                ...state,
                error: action.error
            };
        case FETCH_ALBUMS_SUCCESS:
            return {
                ...state,
                albums: action.data
            };
        case FETCH_ALBUMS_FAILURE:
            return {
                ...state,
                error: action.error
            };
        case FETCH_TRACKS_SUCCESS:
            return {
                ...state,
                tracks: action.data
            };
        case FETCH_TRACKS_FAILURE:
            return {
                ...state,
                error: action.error
            };
        case DELETE_FAILURE:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};
export default adminReducer;