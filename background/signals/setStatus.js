const uuidv4 = require('uuid/v4')

export default [
  function setStatus({state, props}) {
    const id = props.id
    let participants = state.get('participants')
    participants[id].status = props.status
    state.set('participants', participants)

  }
]
