const uuidv4 = require('uuid/v4')
import addBestiary from './addBestiary'

export default [
  function addParticipant({state, props}) {
    const uuid = uuidv4()
    let participants = state.get('participants')
    participants[uuid] = {
      id: uuid,
      dndBeyondId: props.dndBeyondId,
      name: props.dndBeyondId,
      initiative: props.initiative,
      hp: props.hp
    }
    state.set('participants', participants)
  },
  addBestiary
]
