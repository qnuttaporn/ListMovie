const checkid = ( state = [], action ) => {
    switch (action.type){
        case "ID":
        return action.responseid
        default:
        return state
    }
}

export default checkid;