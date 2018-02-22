const uuidv4 = require('uuid/v4')

export default [
  function setCurrentHp({state, props}) {
    const id = props.id
    let participants = state.get('participants')
    const foundIndex = participants.findIndex(participant => participant.id === id)
    participants[foundIndex].currentHp = parseInt(props.currentHp)
    state.set('participants', participants)

  }
]
