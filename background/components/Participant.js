import React from 'react'
import {connect} from '@cerebral/react'
import {state, signal} from 'cerebral/tags'
import styled from 'styled-components'
import InlineEdit from './InlineEdit'

const Footer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  line-height: 1rem;
`

const Wrap = styled.div`
`

const HiddenButton = styled.button`
  opacity: 0;
  transition: opacity ease-in-out 0.2s;

  &:focus,
  ${Wrap}:hover & {
    opacity: 1;
  }
`

const HealthInputs = styled.div`
  align-items: center;
`

const HealthInput = styled.div`
  flex: 1 1 auto;
  max-width: 20%;
  overflow: hidden;

  text-align: center;

  ${InlineEdit} {
    border-bottom-color: #fff;
    width: 100%;
    color: #fff;
    text-align: center;
    font-size: 15px;
  }
`

const HealthText = styled.div`
  text-align: end;
  line-height: 27px; // matches height of the inputs
`

const Health = styled.div`
  display: flex;
  padding: 0.5rem 2rem;
  background: tomato;

  font-size: 16px;
  color: white;

  ${InlineEdit} {
    color: #fff;
  }

  ${HealthInputs} {
    display: none;
  }

  &:hover ${HealthInputs} {
    display: flex;
  }

  &:hover ${HealthText} {
    display: none;
  }
`


class Participant extends React.Component {
  render() {
    const uuid = this.props.uuid
    const participant = this.props.participants[uuid]

    return (
      <Wrap key={participant.id} style={{marginBottom: '1em'}}>
        <Health>
          <HealthText>
            {participant.name}
          </HealthText>

          <HealthText style={{'flex': '1 1 auto'}}>
            {participant.hp} {participant.tempHp && `(${participant.tempHp})`} / {participant.maxHp}
          </HealthText>

          <HealthInputs>
            <HealthInput>
              <InlineEdit
                id="setName"
                placeholder="setName"
                value={participant.name}
                onChange={(event) => this.props.setName({id: participant.id, name: event.target.value})}
              />
            </HealthInput>

            <HealthInput>:</HealthInput>

            <HealthInput>
              <InlineEdit
                id="setCurrentHp"
                placeholder="Current HP"
                value={participant.currentHp || 0}
                onChange={(event) => this.props.setCurrentHp({id: participant.id, currentHp: event.target.value})}
              />
            </HealthInput>

            <HealthInput>(</HealthInput>

            <HealthInput>
              <InlineEdit
                id="setTempHp"
                placeholder="Temporary HP"
                value={participant.tempHp || 0}
                onChange={(event) => this.props.setTempHp({id: participant.id, tempHp: event.target.value})}
              />
            </HealthInput>

            <HealthInput>)</HealthInput>

            <HealthInput>
              <InlineEdit
                id="setMaxHp"
                placeholder="Max HP"
                value={participant.maxHp || 0}
                onChange={(event) => this.props.setMaxHp({id: participant.id, maxHp: event.target.value})}
              />
            </HealthInput>
          </HealthInputs>
        </Health>

        <Footer>
          <div style={{'flex': '1 1 auto'}}>
            <label htmlFor="setStatus">Status:</label>

            <InlineEdit
              id="setStatus"
              placeholder="none"
              value={participant.status || ''}
              onChange={(event) => this.props.setStatus({id: participant.id, status: event.target.value})}
            />
          </div>

          <div>
            <HiddenButton onClick={() => this.props.removeParticipantFromOrder({uuid: participant.id})}>
              Delete
            </HiddenButton>
          </div>
        </Footer>

        {/*}
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
        {*/}
      </Wrap>
    )
  }
}

export default connect(
  {
    participants: state`participants`,
    removeParticipantFromOrder: signal`removeParticipantFromOrder`,
    setName: signal`setName`,
    setMaxHp: signal`setMaxHp`,
    setCurrentHp: signal`setCurrentHp`,
    applyDamage: signal`applyDamage`,
    applyHealing: signal`applyHealing`,
    setTempHp: signal`setTempHp`,
    setStatus: signal`setStatus`,
  },
  Participant
)
