const uuidv4 = require('uuid/v4')

export default [
  function setName({state, props}) {
    const id = props.id
    let participants = state.get('participants')
    participants[id].name = props.name
    state.set('participants', participants)
  }
]
