export default [
  function dockCard({state, props}) {
    let card = state.get('cards')
    card[props.id].docked = true
    state.set('cards', card)
  }
]
