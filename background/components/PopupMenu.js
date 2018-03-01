import React from 'react'
import {connect} from '@cerebral/react'
import {state, signal} from 'cerebral/tags'
import styled from 'styled-components'

const Div = styled.div`
  background: red;
`

class PopupMenu extends React.Component {
  renderParticipants() {
    return this.props.participants.map((item, index) => (
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
    ))
  }

  renderOrderGroupParticipants(ids) {
    return this.props.participants.find(() => {

    })

    // return ids.map((uuid, index) => (
    //   <div key={`${uuid}-${index}`}>
    //     {uuid}
    //     <button onClick={() => this.props.removeParticipantFromOrder({id})}>
    //       Delete Participant
    //     </button>
    //   </div>
    // ))
  }

  renderOrderGroups() {
    const order = this.props.order

    const styles = {
      border: '1px solid #e1e1e1',
      background: '#f1f1f1',
      padding: '0.5em'
    }

    return Object.keys(order).map((key) => (
      <div key={key} style={styles}>
        <Div>
          <strong>Name:</strong> {order[key].name}

          <input value={key} onChange={(event) =>
            this.props.setOrderName({id: key, name: event.target.value})}
          />
        </Div>

        <div>
          <strong>Initiative:</strong> {order[key].initiative}

          <input value={order[key].initiative} onChange={(event) =>
            this.props.setInitiative({id: key, initiative: event.target.value})}
          />
        </div>

        {this.renderOrderGroupParticipants(order[key].ids)}

        <button onClick={() => this.props.removeOrderGroup({id: key})}>
          Delete Group
        </button>
      </div>
    ))
  }

  render() {
    const divStyle = {width: '500px'}

    return (
      <div style={divStyle}>
        {this.renderParticipants()}
        {this.renderOrderGroups()}
      </div>
    )
  }
}

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
  PopupMenu
)
