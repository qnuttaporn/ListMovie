const checktype = (state = [],action) => {
    switch(action.type){
        case "API":
        return [...action.data]
        default:
        return state
    }
}


export default checktype;