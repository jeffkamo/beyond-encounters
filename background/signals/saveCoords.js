export default [
  function saveCoords({state, props}) {
    state.set('cards.' + props.key + '.x', props.x)
    state.set('cards.' + props.key + '.y', props.y)
  }
]
