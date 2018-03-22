export default [
  function undockCard({state, props}) {
    let card = state.get('cards')
    card[props.id].docked = false
    state.set('cards', card)
  }
]

