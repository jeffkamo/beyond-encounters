import React from 'react'
import {connect} from '@cerebral/react'
import {state, signal} from 'cerebral/tags'
import styled from 'styled-components'
import Participant from './Participant'
import InlineEdit from './InlineEdit'

const Group = styled.div`
  border: 1px solid #e1e1e1;
  margin-bottom: 1rem;
  overflow: hidden;
`

const Header = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  padding: 1rem;
  align-items: center;
  background: #fafafa;
  box-shadow: 0px 1px #f1f1f1;
  line-height: 1rem;
`

const HiddenButton = styled.button`
  opacity: 0;
  transition: opacity ease-in-out 0.2s;

  &:focus,
  ${Header}:hover & {
    opacity: 1;
  }
`

const Body = styled.div`
  padding: 1rem;
  background: #fff;
`


class OrderGroup extends React.Component {
  renderSingular() {
    return (
      <Group key={this.group.id}>
        <Header style={{'background': '#fff'}}>
          <div style={{'flex': '1 1 auto'}}>
            <strong>Initiative:</strong>

            <InlineEdit
              value={this.group.initiative}
              onChange={(event) => this.props.setInitiative({id: this.group.id, initiative: event.target.value})}
            />
          </div>

          <div>
            <HiddenButton onClick={() => this.props.removeOrderGroup({id: this.group.id})}>
              Delete
            </HiddenButton>
          </div>
        </Header>

        <Body>
          {this.participants.map((uuid, idx) => (
            <Participant uuid={uuid} key={idx} />
          ))}
        </Body>
      </Group>
    )
  }

  renderMultiple() {
    return (
      <Group key={this.group.id}>
        <Header>
          <div style={{'flex': '1 1 auto'}}>
            <strong>Initiative:</strong>
            <InlineEdit
              value={this.group.initiative}
              onChange={(event) => this.props.setInitiative({id: this.group.id, initiative: event.target.value})}
            />
          </div>

          <div style={{'flex': '1 1 auto'}}>
            <strong>Group Name:</strong>
            <InlineEdit
              id="orderName"
              value={this.group.name}
              onChange={(event) => this.props.setOrderName({id: this.group.id, name: event.target.value})}
            />
          </div>

          <div>
            <HiddenButton onClick={() => this.props.removeOrderGroup({id: this.group.id})}>
              Delete
            </HiddenButton>
          </div>
        </Header>

        <Body>
          {this.participants.map((uuid, idx) => (
            <Participant uuid={uuid} key={idx} />
          ))}
        </Body>
      </Group>
    )
  }

  render() {
    const id = this.props.id
    this.group = this.props.order[id]
    this.participants = this.group.ids

    return (this.participants.length === 1)
      ? this.renderSingular()
      : this.renderMultiple()
  }
}

export default connect(
  {
    order: state`order`,
    removeOrderGroup: signal`removeOrderGroup`,
    setInitiative: signal`setInitiative`,
    setOrderName: signal`setOrderName`
  },
  OrderGroup
)
