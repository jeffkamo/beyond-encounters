export default [
  function addToOrder({state, props}) {

    const {id} = props
    let order = state.get('order')
    let participants = state.get('participants')
    const selectedParticipant = participants[id]

    order[selectedParticipant.dndBeyondId]
      ? order[selectedParticipant.dndBeyondId].ids.push(id)
      : order[selectedParticipant.dndBeyondId] = {
        id: selectedParticipant.dndBeyondId,
        ids: [id],
        name: selectedParticipant.name,
        initiative: 0
      }

    order[selectedParticipant.dndBeyondId].ids = removeDuplicateIds(order[selectedParticipant.dndBeyondId].ids)

    state.set('order', order)
  }
]

function removeDuplicateIds(ids) {
  return [...new Set(ids)]
}
