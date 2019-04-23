import {CLOSE_MODAL, FETCH_TRACKS_FAILURE, FETCH_TRACKS_SUCCESS, SHOW_MODAL} from "../actions/trackActions";

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
        case FETCH_TRACKS_FAILURE:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};
export default reducer;