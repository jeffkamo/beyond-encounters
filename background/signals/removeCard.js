export default [  function removeCard({state, props}) {    let card = state.get('cards')    delete card[props.id]    state.set('cards', card)  }]