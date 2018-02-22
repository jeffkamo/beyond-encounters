export default [
  function setOrderName({state, props}) {
    const {id, name} = props
    let order = state.get('order')
    order[name] = Object.assign({}, order[id])
    delete order[id]
    state.set('order', order)
  }
]
