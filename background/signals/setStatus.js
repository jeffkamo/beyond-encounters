const uuidv4 = require('uuid/v4')

export default [
  function setStatus({state, props}) {
    const id = props.id
    let participants = state.get('participants')
    const foundIndex = participants.findIndex(participant => participant.id === id)
    participants[foundIndex].status = props.status
    state.set('participants', participants)

  }
]
