const uuidv4 = require('uuid/v4')

export default [
  function applyDamage({state, props}) {
    const id = props.id
    const participants = state.get('participants')
    const foundIndex = participants.findIndex(participant => participant.id === id)
    state.increment('participants.' + foundIndex + '.currentHp', -Math.abs(parseInt(props.damage)))
  }
]
