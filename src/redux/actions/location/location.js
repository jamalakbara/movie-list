export const requestLocations = (data) => {
    return {
        type: 'SUCCESSED_LOCATIONS',
        payload: {
            data,
        }
    }
}

export const addLocations = (data) => {
    return {
        type: 'ADD_LOCATIONS',
        payload: {
            data,
        }
    }
}

export const processingLocations = () => {
    return {
        type: 'REQUEST_LOCATIONS',
    }
}

export const failedLocations = (error) => {
    return {
        type: 'FAILED_LOCATIONS',
        payload: {
            error,
        }
    }
}