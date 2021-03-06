import {Compute} from 'cerebral'
import {state} from 'cerebral/tags'

export default Compute(
  state`cards`,
  (cards) => {
    return Object.keys(cards || {}).map(id => ({
      id,
      x: cards[id].x,
      y: cards[id].y,
      docked: cards[id].docked,
      html: cards[id].html
    })).filter(card => card.docked)
  }
)
