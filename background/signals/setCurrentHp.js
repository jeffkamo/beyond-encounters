const uuidv4 = require('uuid/v4')

export default [
  function setCurrentHp({state, props}) {
    const id = props.id
    let participants = state.get('participants')
    participants[id].currentHp = parseInt(props.currentHp)
    state.set('participants', participants)

  }
]
