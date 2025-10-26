export const initialTickets = []


export function ticketsReducer(state, action){
switch(action.type){
case 'SET':
return action.payload || []
case 'ADD':
return [...state, action.payload]
case 'UPDATE':
return state.map(t => t.id === action.payload.id ? {...t, ...action.payload} : t)
case 'DELETE':
return state.filter(t => t.id !== action.payload)
default:
return state
}
}