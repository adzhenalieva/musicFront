import {
    FETCH_ALBUM_BY_ID_SUCCESS,
    FETCH_ALBUMS_FAILURE,
    FETCH_ALBUMS_SUCCESS,
    SEND_ALBUM_FAILURE, SEND_ALBUM_SUCCESS
} from "../actions/albumActions";


const initialState = {
    albums: [],
    albumById: [],
    error: null,
    albumArtist: []
};

const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALBUMS_SUCCESS:
            return {
                ...state,
                albums: action.data
            };
        case FETCH_ALBUM_BY_ID_SUCCESS:
            return {
                ...state,
                albumById: action.data,
                albumArtist: action.data.artist.artist
            };
        case FETCH_ALBUMS_FAILURE:
            return {
                ...state,
                error: action.error
            };
        case SEND_ALBUM_FAILURE:
            return {
                ...state,
                error: action.error
            };
        case SEND_ALBUM_SUCCESS:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
};
export default albumReducer;