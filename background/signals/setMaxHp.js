const uuidv4 = require('uuid/v4')

export default [
  function setMaxHp({state, props}) {
    const id = props.id
    let participants = state.get('participants')
    const foundIndex = participants.findIndex(participant => participant.id === id)
    participants[foundIndex].maxHp = parseInt(props.maxHp)
    state.set('participants', participants)
  }
]