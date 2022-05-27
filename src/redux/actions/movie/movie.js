export const requestMovies = (data) => {
    return {
        type: 'SUCCESSED_MOVIES',
        payload: {
            data,
        }
    }
}

export const processingMovies = () => {
    return {
        type: 'REQUEST_MOVIES',
    }
}

export const failedMovies = (error) => {
    return {
        type: 'FAILED_MOVIES',
        payload: {
            error,
        }
    }
}