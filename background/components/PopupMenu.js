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
    setName: signal`setName`,
    setMaxHp: signal`setMaxHp`,
    setCurrentHp: signal`setCurrentHp`,
    applyDamage: signal`applyDamage`,
    applyHealing: signal`applyHealing`,
    setTempHp: signal`setTempHp`,
    setStatus: signal`setStatus`,
    addBestiary: signal`addBestiary`,
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
            {item.status} |
            <button onClick={() => this.props.removeParticipant({id: item.id})}>REMOVE</button>
            <button onClick={() => this.props.addToOrder({id: item.id})}>ADD TO ORDER</button>

            <input placeholder="setName" value={item.name} onChange={(event) =>
              this.props.setName({id: item.id, name: event.target.value})} />

            <input placeholder="setMaxHp" value={item.maxHp | 0} onChange={(event) =>
              this.props.setMaxHp({id: item.id, maxHp: event.target.value})} />

            <input placeholder="setCurrentHp" value={item.currentHp | 0} onChange={(event) =>
              this.props.setCurrentHp({id: item.id, currentHp: event.target.value})} />

            <input type="number" placeholder="applyDamage" onChange={(event) =>
              this.props.applyDamage({id: item.id, damage: event.target.value})} />

            <input type="number" placeholder="applyHealing" onChange={(event) =>
              this.props.applyHealing({id: item.id, heal: event.target.value})} />

            <input placeholder="setTempHp" value={item.tempHp | 0} onChange={(event) =>
              this.props.setTempHp({id: item.id, tempHp: event.target.value})} />

            <input placeholder="setStatus" value={item.status} onChange={(event) =>
              this.props.setStatus({id: item.id, status: event.target.value})} />
          </div>
        ))}
        {Object.keys(order).map((key) => (
          <div key={key}>
            {key} |
            {order[key].initiative} |
            {order[key].name} |

            {order[key].ids.map((item, index) => (
              <span key={index}>{item}
                <button
                  onClick={() => this.props.removeParticipantFromOrder({id: item})}>REMOVE participants from order</button>

              </span>

            ))}
            <button onClick={() => this.props.removeOrderGroup({id: key})}>REMOVE ORDER</button>
            <input value={order[key].initiative} onChange={(event) =>
              this.props.setInitiative({id: key, initiative: event.target.value})}/>
            <input value={key} onChange={(event) =>
              this.props.setOrderName({id: key, name: event.target.value})}/>
          </div>
        ))}
      </div>
    }
  }
)