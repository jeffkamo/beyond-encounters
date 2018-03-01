
export default [
  function removeParticipant({state, props}) {
    let participants = state.get('participants')
    participants = participants.filter(({id}) => props.id !== id)
    state.set('participants', participants)
  },
]