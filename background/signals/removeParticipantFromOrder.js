const uuidv4 = require('uuid/v4')

export default [
  function removeParticipantFromOrder({state, props}) {
    let order = state.get('order')

    Object.keys(order).forEach(orderKey => {
      order[orderKey].ids = order[orderKey].ids.filter(id => id !== props.id);
    })

    state.set('order', order)
  }
]
