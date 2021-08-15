export default (state=[],action)=>{
    console.log(action)
    switch (action.type) {
        case 'FETCH_ID':
            return action.payload
            break;
    
        default:
            return state;
    }
}