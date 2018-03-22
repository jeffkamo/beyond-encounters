const uuidv4 = require('uuid/v4')
import addBestiary from './addBestiary'
import addToCards from './addToCards'
import addToOrder from './addToOrder'

export default [
  function addParticipant({state, props}) {
    const uuid = uuidv4()
    const participants = state.get('participants')
    participants[uuid] = {
      id: uuid,
      dndBeyondId: props.dndBeyondId,
      name: props.dndBeyondId,
      initiative: props.initiative,
      hp: props.hp
    }

    // Add participant!
    state.set('participants', participants)

    // This is needed in order to add paricipant to the Order group
    return participants[uuid]
  },
  addBestiary,
  addToCards,
  addToOrder
]
