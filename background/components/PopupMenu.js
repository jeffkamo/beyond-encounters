import React from 'react'
import {connect} from '@cerebral/react'
import {state, signal} from 'cerebral/tags'
import styled from 'styled-components'
import OrderGroup from './OrderGroup'


class PopupMenu extends React.Component {
  render() {
    let order = this.props.order
    order = Object.keys(order).map((id) => order[id])

    return (
      <div style={{width: '500px'}}>
        {order.map((group, idx) =>
          <OrderGroup id={group.id} key={idx} />
        )}
      </div>
    )
  }
}

export default connect(
  {order: state`order`},
  PopupMenu
)
