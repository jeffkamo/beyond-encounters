const uuidv4 = require('uuid/v4')

export default [
  function applyHealing({state, props}) {
    const id = props.id
    const participants = state.get('participants')
    state.increment('participants.' + id + '.hp', + parseInt(props.heal))
  }
]
