const reducer = (state, action) => {
  if( action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payLoad ]
    return {...state, people: newPeople, isModalOpen: true, modalContent: 'item added'}
  }
  else if( action.type === 'NO_VALUE')
    return {...state, isModalOpen: true, modalContent: 'empty'}
  else if( action.type === 'CLOSE_MODAL')
    return {...state, isModalOpen: false}
  else if( action.type === 'REMOVE_ITEM')
    return {...state, people: state.people.filter((person)=>person.id !== action.payLoad)}    
    
  return state // the reducer method must return a state, but this could be a good place to use: throw new Error('no matching action type')
               // this is just returning the original state, so no change will be made
}

export default reducer