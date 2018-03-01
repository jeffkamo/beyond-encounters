
export default [
  function setTempHp({state, props}) {
    const id = props.id
    let participants = state.get('participants')
    const foundIndex = participants.findIndex(participant => participant.id === id)
    participants[foundIndex].tempHp = props.tempHp
    state.set('participants', participants)

  }
]
