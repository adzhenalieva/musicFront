import {FETCH_TRACKS_FAILURE, FETCH_TRACKS_SUCCESS} from "../actions/trackActions";

const initialState = {
    tracks: [],
    error: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
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
        default:
            return state;
    }
};
export default userReducer;