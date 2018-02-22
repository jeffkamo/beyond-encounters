export default [
  function removeOrderGroup({state, props}) {
    let order = state.get('order')
    delete order[props.id]
    state.set('order', order)
  }
]
