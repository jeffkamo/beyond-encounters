const uuidv4 = require('uuid/v4')

export default [
  function setName({state, props}) {
    const id = props.id
    let participants = state.get('participants')
    const foundIndex = participants.findIndex(participant => participant.id === id)
    participants[foundIndex].name = props.name
    state.set('participants', participants)

  }
]
