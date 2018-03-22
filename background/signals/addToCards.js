export default [
  function addToCards({state, props}) {
    state.set('cards.' + props.dndBeyondId, {
      x: 0,
      y: 0,
      html: props.statBlockData,
      docked: false,
    })
  }
]
