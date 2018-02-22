
export default [
  function addInitiative({state, props}) {
    const {initiative, id} = props
    let participants = state.get('participants')
    const foundIndex = participants.findIndex(participant => participant.id === id)
    participants[foundIndex].initiative = initiative
    state.set('participants', participants)
  }
]