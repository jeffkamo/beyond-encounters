const uuidv4 = require('uuid/v4')

export default [
  function addBestiary({state, props}) {
    let bestiary = state.get('bestiary')
    bestiary[props.dndBeyondId] = props.statBlockData
    state.set('bestiary', bestiary)
  }
]
