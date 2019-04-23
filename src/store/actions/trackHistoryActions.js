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
    return (dispatch, getState) => {
        const header = {headers: {'Authorization': getState().users.user.token}};
        return axios.get('/track_history', header).then(
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
    return (dispatch, getState) => {
        let token = getState().users.user.token;

            const header = {headers: {'Authorization': token}};
            return axios.post('/track_history', trackData, header).then(
                response => {
                    dispatch(postHistorySuccess(response.data));
                },
                error => {
                    dispatch(postHistoryFailure(error))
                }
            )


    }
};