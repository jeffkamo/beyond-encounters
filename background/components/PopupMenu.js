import React from 'react'
import {connect} from '@cerebral/react'
import {state, signal} from 'cerebral/tags'
import styled from 'styled-components'

const Group = styled.div`
  border: 1px solid #e1e1e1;
  background: #f1f1f1;
  padding: 0.5em;
`

class PopupMenu extends React.Component {
  renderParticipant(participant) {
    return (
      <div key={participant.id} style={{marginBottom: '1em'}}>
        <code>{participant.dndBeyondId}</code>

        <button onClick={() => this.props.removeParticipant({id: participant.id})}>
          REMOVE
        </button>

        <button onClick={() => this.props.addToOrder({id: participant.id})}>
          ADD TO ORDER
        </button>

        <div>
          <label htmlFor="setName">Name:</label> {participant.name}
          <input id="setName" placeholder="setName" value={participant.name} onChange={(event) =>
            this.props.setName({id: participant.id, name: event.target.value})} />
        </div>

        <div>
          <label htmlFor="setCurrentHp">Current HP:</label> {participant.hp}
          <input id="setCurrentHp" placeholder="setCurrentHp" value={participant.currentHp | 0} onChange={(event) =>
            this.props.setCurrentHp({id: participant.id, currentHp: event.target.value})} />
        </div>

        <div>
          <label htmlFor="setMaxHp">Max HP:</label>
          <input id="setMaxHp" placeholder="setMaxHp" value={participant.maxHp | 0} onChange={(event) =>
            this.props.setMaxHp({id: participant.id, maxHp: event.target.value})} />
        </div>

        <div>
          <label htmlFor="setTempHp">Temp HP:</label>
          <input id="setTempHp" placeholder="setTempHp" value={participant.tempHp | 0} onChange={(event) =>
            this.props.setTempHp({id: participant.id, tempHp: event.target.value})} />
        </div>

        <div>
          <label htmlFor="applyDamage">Dmg:</label>
          <input id="applyDamage" type="number" placeholder="applyDamage" onChange={(event) =>
            this.props.applyDamage({id: participant.id, damage: event.target.value})} />
        </div>

        <div>
          <label htmlFor="applyHealing">Heals:</label>
          <input id="applyHealing" type="number" placeholder="applyHealing" onChange={(event) =>
            this.props.applyHealing({id: participant.id, heal: event.target.value})} />
        </div>

        <div>
          <label htmlFor="setStatus">Status:</label> {participant.status}
          <input id="setStatus" placeholder="setStatus" value={participant.status} onChange={(event) =>
            this.props.setStatus({id: participant.id, status: event.target.value})} />
        </div>
      </div>
    )
  }

  renderParticipants() {
    let participants = this.props.participants
    participants = Object.keys(participants).map((id) => participants[id])
    return participants.map(this.renderParticipant.bind(this))
  }

  renderOrderGroupParticipants(ids = []) {
    return ids.map((uuid, index) => (
      <div key={`${uuid}-${index}`}>
        {uuid}

        <button onClick={() => this.props.removeParticipantFromOrder({uuid})}>
          Delete Participant
        </button>
      </div>
    ))
  }

  renderOrderGroups() {
    let order = this.props.order
    order = Object.keys(order).map((id) => order[id])

    return order.map((group) => (
      <Group key={group.id}>
        <code>{group.id}</code>

        <button onClick={() => this.props.removeOrderGroup({id: group.id})}>
          Delete Group
        </button>

        <div>
          <strong>Group Name:</strong> {group.name}

          <input
            id="orderName"
            value={group.name}
            onChange={(event) => this.props.setOrderName({id: group.id, name: event.target.value})}
          />
        </div>

        <div>
          <strong>Initiative:</strong> {group.initiative}

          <input
            value={order.initiative}
            onChange={(event) => this.props.setInitiative({id: group.id, initiative: event.target.value})}
          />
        </div>

        {this.renderOrderGroupParticipants(group.ids)}
      </Group>
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
