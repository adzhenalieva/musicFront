import axios from '../../axios-api';

export const SHOW_HISTORY_SUCCESS = "SHOW_HISTORY_SUCCESS";
export const SHOW_HISTORY_FAILURE = "SHOW_HISTORY_FAILURE";

export const POST_HISTORY_SUCCESS = "POST_HISTORY_SUCCESS";
export const POST_HISTORY_FAILURE = "POST_HISTORY_FAILURE";

const showHistorySuccess = response => ({type: SHOW_HISTORY_SUCCESS, response});
const showHistoryFailure = error => ({type: SHOW_HISTORY_FAILURE, error});

const postHistorySuccess = () => ({type: POST_HISTORY_SUCCESS});
const postHistoryFailure = error => ({type: POST_HISTORY_FAILURE, error});

export const showHistory = () => {
    return dispatch => {
        return axios.get('/track_history').then(
            response => {
                dispatch(showHistorySuccess(response.data));
            },
            error => {
                dispatch(showHistoryFailure(error))
            }
        )

    }
};

export const postHistory = trackData => {
    return dispatch => {
            return axios.post('/track_history', trackData).then(
                response => {
                    dispatch(postHistorySuccess(response.data));
                },
                error => {
                    dispatch(postHistoryFailure(error))
                }
            )


    }
};