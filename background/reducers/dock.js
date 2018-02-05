const initialState = ['commoner']

export default (state = initialState, action) => {
    let newState
    let index

    switch (action.type) {
    case 'REMOVE_FROM_DOCK':
        newState = [...state]

        // Get card index from the state
        index = newState.indexOf(action.card)

        if (index > -1) {
            // Remove the card from the state, only if it's actually there!
            newState.splice(index, 1)
        }

        return newState
        break
    case 'ADD_INTO_DOCK':
        newState = [...state]

        // Get card index from the state
        index = newState.indexOf(action.card)

        if (index === -1) {
            // Add the card to the state, only if it wasn't there before!
            newState.push(action.card)
        }

        return newState
        break
    default:
        return state;
    }
};
