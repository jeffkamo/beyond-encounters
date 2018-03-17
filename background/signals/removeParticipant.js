
export default [
  function removeParticipant({state, props}) {
    let participants = state.get('participants')

    Object.keys(participants).forEach((id) => {
      if (id === props.id) {
        delete participants[id]
      }
    })

    state.set('participants', participants)
  },
]
