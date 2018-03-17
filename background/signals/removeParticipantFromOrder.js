const uuidv4 = require('uuid/v4')

export default [
  function removeParticipantFromOrder({state, props}) {
    const order = state.get('order')

    Object.keys(order).forEach((orderKey) => {
      order[orderKey].ids = order[orderKey].ids.filter((uuid) => {
        return uuid !== props.uuid
      });
    })

    state.set('order', order)
  }
]
