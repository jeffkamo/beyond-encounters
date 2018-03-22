const uuidv4 = require('uuid/v4')

export default [
  function addBestiary({state, props, http}) {
    let bestiary = state.get('bestiary')
    bestiary[props.dndBeyondId] = {
      name: '',
      url: '',
      html: props.statBlockData
    }
    state.set('bestiary', bestiary)
  },
]

