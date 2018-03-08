
export default [
  function addInitiative({state, props}) {
    const {initiative, id} = props
    let participants = state.get('participants')
    participants[id].initiative = initiative
    state.set('participants', participants)
  }
]
