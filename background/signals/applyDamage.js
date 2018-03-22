const uuidv4 = require('uuid/v4')

export default [
  function applyDamage({state, props}) {
    const id = props.id
    const participants = state.get('participants')
    state.increment('participants.' + id + '.hp', -Math.abs(parseInt(props.damage)))
  }
]
