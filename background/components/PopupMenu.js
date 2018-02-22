import React from 'react'

import {connect} from '@cerebral/react'
import {state, signal} from 'cerebral/tags'

export default connect({
    participants: state`participants`,
    removeParticipant: signal`removeParticipant`
  },
  class PopupMenu extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      const divStyle = {width: '500px'}
      return <div style={divStyle}>
        {this.props.participants.map((item, index) => (
          <div key={index}>
            {item.name} |
            {item.dndBeyondId} |
            {item.hp} |
            {item.initiative} |
            <button onClick={() => this.props.removeParticipant({id: item.id})}>REMOVE</button>
          </div>
        ))}
      </div>
    }
  }
)