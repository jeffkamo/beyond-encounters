import React from 'react'

import {connect} from '@cerebral/react'
import {state, signal} from 'cerebral/tags'

export default connect({
    participants: state`participants`,
    order: state`order`,
    removeParticipant: signal`removeParticipant`,
    addToOrder: signal`addToOrder`,
    removeOrderGroup: signal`removeOrderGroup`,
    removeParticipantFromOrder: signal`removeParticipantFromOrder`,
    setInitiative: signal`setInitiative`,
    setOrderName: signal`setOrderName`,

  },
  class PopupMenu extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      const order = this.props.order
      const divStyle = {width: '500px'}
      return <div style={divStyle}>
        {this.props.participants.map((item, index) => (
          <div key={index}>
            {item.name} |
            {item.dndBeyondId} |
            {item.hp} |
            {item.initiative} |
            <button onClick={() => this.props.removeParticipant({id: item.id})}>REMOVE</button>
            <button onClick={() => this.props.addToOrder({id: item.id})}>ADD TO ORDER</button>
          </div>
        ))}
        {Object.keys(order).map((key) => (
          <div key={key}>
            {key} |
            {order[key].initiative} |
            {order[key].name} |

            {order[key].ids.map((item, index) => (
              <span key={index}>{item}
                <button onClick={() => this.props.removeParticipantFromOrder({id: item})}>REMOVE participants from order</button>
              </span>

            ))}
            <button onClick={() => this.props.removeOrderGroup({id: key})}>REMOVE ORDER</button>
            <input value={order[key].initiative} onChange={(event) =>
              this.props.setInitiative({id: key, initiative: event.target.value }) }/>
            <input value={key} onChange={(event) =>
              this.props.setOrderName({id: key, name: event.target.value }) }/>
          </div>
        ))}
      </div>
    }
  }
)