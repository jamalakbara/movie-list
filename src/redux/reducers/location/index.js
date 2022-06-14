const initialState = {
    data: [],
    loading: false,
}

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_LOCATIONS':
            return {
                ...state,
                loading: true,
            }
        case 'SUCCESSED_LOCATIONS':
            console.log(state);
            console.log(action.payload.data);
            return {
                ...state,
                loading: false,
                data: action.payload.data,
            }
        case 'ADD_LOCATIONS':
            console.log(state);
            console.log(action.payload.data);
            console.log('memek');
            console.log([
                ...state.data,
                action.payload.data,
            ]);
            return {
                ...state,
                loading: false,
                data: [
                    ...state.data,
                    action.payload.data,
                ],
            }
        case 'FAILED_LOCATIONS':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}

export default locationReducer