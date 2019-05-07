import {
    CLOSE_MODAL,
    FETCH_TRACKS_FAILURE,
    FETCH_TRACKS_SUCCESS,
    SEND_TRACK_FAILURE, SEND_TRACK_SUCCESS,
    SHOW_MODAL
} from "../actions/trackActions";

const initialState = {
    tracks: [],
    error: null,
    show: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TRACKS_SUCCESS:
            return {
                ...state,
                tracks: action.data,
                link: action.link
            };
        case FETCH_TRACKS_FAILURE:
            return {
                ...state,
                error: action.error
            };
        case CLOSE_MODAL:
            return {
                ...state,
                link: null,
                show: false
            };
        case SHOW_MODAL:
            return {
                ...state,
                link: action.link,
                show: true
            };
        case SEND_TRACK_FAILURE:
            return {
                ...state,
                error: action.error
            };
        case SEND_TRACK_SUCCESS:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
};
export default reducer;