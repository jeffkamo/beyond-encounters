const uuidv4 = require('uuid/v4')
import addBestiary from './addBestiary'

export default [
  function addParticipant({state, props}) {
    state.push('participants', {
      id: uuidv4(),
      dndBeyondId: props.dndBeyondId,
      name: props.dndBeyondId,
      initiative: props.initiative,
      hp: props.hp
    })
  },
  addBestiary
]
