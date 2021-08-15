 const posts=(state=[],action)=>{
    console.log(action)
    switch (action.type) {
        case 'FETCH_ID':
            return action.payload
    
        default:
            return state;
    }
}

export default posts;