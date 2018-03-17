export default [
  function removeOrderGroup({state, props}) {
    const order = state.get('order')
    const ids = order[props.id].ids

    delete order[props.id]

    state.set('order', order)

    // This is needed, so we can delete the order group's participants
    return {ids}
  },
  function removeParticipants({state, props}) {
    const participants = state.get('participants')

    props.ids.forEach((id) => {
      delete participants[id]
    })

    state.set('participants', participants)
  }
]
