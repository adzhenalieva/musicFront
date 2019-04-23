import {SHOW_HISTORY_SUCCESS} from "../actions/trackHistoryActions";

const initialState = {
    trackHistory: [],
    error: null

};

const trackHistoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_HISTORY_SUCCESS:
            return {...state,
                trackHistory: action.response};
        default:
            return state;
    }
};
export default trackHistoryReducer;