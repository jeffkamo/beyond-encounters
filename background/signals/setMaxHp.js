const uuidv4 = require('uuid/v4')

export default [
  function setMaxHp({state, props}) {
    const id = props.id
    let participants = state.get('participants')
    participants[id].maxHp = parseInt(props.maxHp)
    state.set('participants', participants)
  }
]
