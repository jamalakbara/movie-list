export const requestCharacters = (data) => {
    return {
        type: 'SUCCESSED_CHARACTERS',
        payload: {
            data,
        }
    }
}

export const processingCharacters = () => {
    return {
        type: 'REQUEST_CHARACTERS',
    }
}

export const failedCharacters = (error) => {
    return {
        type: 'FAILED_CHARACTERS',
        payload: {
            error,
        }
    }
}