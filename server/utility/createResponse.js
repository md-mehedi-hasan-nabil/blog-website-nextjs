function createResponse(success, payload) {
    if (success) {
        return {
            success,
            payload: typeof payload === "object" ? payload : {}
        }
    } else {
        return {
            success,
            error: {
                message: typeof payload === "string" ? payload : "Oops! An Error Occurred"
            }
        }
    }
}


module.exports = createResponse