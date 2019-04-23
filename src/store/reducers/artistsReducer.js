import {FETCH_ARTIST_BY_ID_SUCCESS, FETCH_ARTISTS_FAILURE, FETCH_ARTISTS_SUCCESS} from "../actions/artistActions";

const initialState = {
    artists: [],
    artistById: [],
    error: null
};

const artistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ARTISTS_SUCCESS:
            return {
                ...state,
                artists: action.data
            };
        case FETCH_ARTIST_BY_ID_SUCCESS:
            return {
                ...state,
                artistById: action.data
            };
        case FETCH_ARTISTS_FAILURE:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};
export default artistsReducer;