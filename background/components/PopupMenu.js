// import React from 'react'
//
// import {connect} from '@cerebral/react'
// import {state, signal} from 'cerebral/tags'
//
// import styled, {css} from 'styled-components'
//
// const Div = styled.div`
//     position: absolute;
//
//     display: flex;
//     flex-direction: column;
//     flex: 1 1 auto;
//     max-width: 300px;
//     max-height: 400px;
//     margin-right: 4px;
//     border-radius: 1px;
//     overflow: hidden;
//
//     background-color: red;
//     box-shadow: 0 0 4px rgb(150, 150, 150);
//
//     pointer-events: initial;
// `
//
// export default connect({
//     participants: state`participants`,
//     order: state`order`,
//     removeParticipant: signal`removeParticipant`,
//     addToOrder: signal`addToOrder`,
//     removeOrderGroup: signal`removeOrderGroup`,
//     removeParticipantFromOrder: signal`removeParticipantFromOrder`,
//     setInitiative: signal`setInitiative`,
//     setOrderName: signal`setOrderName`,
//     setName: signal`setName`,
//     setMaxHp: signal`setMaxHp`,
//     setCurrentHp: signal`setCurrentHp`,
//     applyDamage: signal`applyDamage`,
//     applyHealing: signal`applyHealing`,
//     setTempHp: signal`setTempHp`,
//     setStatus: signal`setStatus`,
//     addBestiary: signal`addBestiary`,
//   },
//   class PopupMenu extends React.Component {
//     constructor(props) {
//       super(props)
//     }
//
//     render() {
//       const order = this.props.order
//       const divStyle = {width: '500px'}
//       return <div style={divStyle}>
//         {this.props.participants.map((item, index) => (
//           <div key={index}>
//             {item.name} |
//             {item.dndBeyondId} |
//             {item.hp} |
//             {item.initiative} |
//             {item.status} |
//             <button onClick={() => this.props.removeParticipant({id: item.id})}>REMOVE</button>
//             <button onClick={() => this.props.addToOrder({id: item.id})}>ADD TO ORDER</button>
//
//             <Div>Hello</Div>
//
//             <input placeholder="setName" value={item.name} onChange={(event) =>
//               this.props.setName({id: item.id, name: event.target.value})} />
//
//             <input placeholder="setMaxHp" value={item.maxHp | 0} onChange={(event) =>
//               this.props.setMaxHp({id: item.id, maxHp: event.target.value})} />
//
//             <input placeholder="setCurrentHp" value={item.currentHp | 0} onChange={(event) =>
//               this.props.setCurrentHp({id: item.id, currentHp: event.target.value})} />
//
//             <input type="number" placeholder="applyDamage" onChange={(event) =>
//               this.props.applyDamage({id: item.id, damage: event.target.value})} />
//
//             <input type="number" placeholder="applyHealing" onChange={(event) =>
//               this.props.applyHealing({id: item.id, heal: event.target.value})} />
//
//             <input placeholder="setTempHp" value={item.tempHp | 0} onChange={(event) =>
//               this.props.setTempHp({id: item.id, tempHp: event.target.value})} />
//
//             <input placeholder="setStatus" value={item.status} onChange={(event) =>
//               this.props.setStatus({id: item.id, status: event.target.value})} />
//           </div>
//         ))}
//         {Object.keys(order).map((key) => (
//           <div key={key}>
//             {key} |
//             {order[key].initiative} |
//             {order[key].name} |
//
//             {order[key].ids.map((item, index) => (
//               <span key={index}>{item}
//                 <button
//                   onClick={() => this.props.removeParticipantFromOrder({id: item})}>REMOVE participants from order</button>
//
//               </span>
//
//             ))}
//             <button onClick={() => this.props.removeOrderGroup({id: key})}>REMOVE ORDER</button>
//             <input value={order[key].initiative} onChange={(event) =>
//               this.props.setInitiative({id: key, initiative: event.target.value})}/>
//             <input value={key} onChange={(event) =>
//               this.props.setOrderName({id: key, name: event.target.value})}/>
//           </div>
//         ))}
//       </div>
//     }
//   }
// )
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

        <button onClick={() => this.props.removeParticipantFromOrder({uuid: participant.id})}>
          Delete
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

  renderParticipants(ids = []) {
    let participants = this.props.participants

    participants = Object.keys(participants)
      .filter((id) => ids.indexOf(id) >= 0)
      .map((id) => participants[id])

    return (participants.length > 0)
      ? participants.map(this.renderParticipant.bind(this))
      : []
  }

  renderOrderGroupParticipants(ids = []) {
    return ids.map((uuid, index) => (
      <div key={`${uuid}-${index}`}>
        <code>{uuid}</code>

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

        {this.renderParticipants(group.ids)}
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
