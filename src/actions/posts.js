export const getId =(id)=>{
    const action={ type:'FETCH_ID', payload: id}
    return action
}