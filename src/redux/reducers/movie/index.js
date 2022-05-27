const initialState = {
    data: [],
    loading: false,
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_MOVIES':
            return {
                ...state,
                loading: true,
            }
        case 'SUCCESSED_MOVIES':
            console.log(state);
            console.log(action.payload.data);
            return {
                ...state,
                loading: false,
                data: action.payload.data,
            }
        case 'FAILED_MOVIES':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}

export default movieReducer