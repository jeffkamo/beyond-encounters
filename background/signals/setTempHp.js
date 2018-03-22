
export default [
  function setTempHp({state, props}) {
    const id = props.id
    let participants = state.get('participants')
    participants[id].tempHp = props.tempHp
    state.set('participants', participants)
  }
]
