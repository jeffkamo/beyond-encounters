const uuidv4 = require('uuid/v4')

export default [
  function applyHealing({state, props}) {
    const id = props.id
    const participants = state.get('participants')
    const foundIndex = participants.findIndex(participant => participant.id === id)
    state.increment('participants.' + foundIndex + '.currentHp', + parseInt(props.heal))
  }
]
