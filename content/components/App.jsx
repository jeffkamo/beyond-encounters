import React from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'
import { state, signal } from 'cerebral/tags'
import { connect } from '@cerebral/react'
import dockedCards from '../computes/dockedCards'
import undockedCards from '../computes/undockedCards'

const Dashboard = styled.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100vh;
    width: 100vw;
    max-height: 100vh;

    z-index: 9999;

    pointer-events: none;
`
const DragViewPort = styled.div`
    flex: 1 1 auto;
    width: 100%;
    height: 100%;
    padding: 4px;

    pointer-events: none;
`
const Dock = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100vw;
    padding: 4px;

    background-color: rgba(230, 230, 230, 0.5);
    box-shadow: 0 0 2px rgb(150, 150, 150);

    div {
        position: relative;
    }
`
const Backdrop = styled.div`
    position: absolute;

    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    max-width: 300px;
    max-height: 400px;
    margin-right: 4px;
    border-radius: 1px;
    overflow: hidden;

    background-color: #f8f3d4;
    box-shadow: 0 0 4px rgb(150, 150, 150);

    pointer-events: initial;
`
const Header = styled.div`
    display: flex;
    flex: 0 0 auto;
    padding: 4px 8px;
    font-weight: bold;
`
const Title = styled.button`
    flex: 1 1 auto;
    margin: 0;
    padding: 0;
    border: 0;
    overflow: hidden;

    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;

    background-color: transparent;
`
export default connect({
    cards: state`cards`,
    runSignal: signal`runSignal`,
    dockedCards,
    undockedCards
  },
  class AppComponent extends React.Component {
    render() {
      const { undockedCards, dockedCards, runSignal } = this.props
      return (
        <Dashboard>
          <DragViewPort className="app__drag-view-port">
            {undockedCards && undockedCards.map((card) => (
              <Draggable key={card.id}
                         defaultPosition={{
                           x: card.x, y: card.y
                         }}
                         onStop={(event) => runSignal({
                           name: 'saveCoords',
                           props: {
                             key: card.id,
                             x: event.screenX,
                             y: event.screenY
                           }
                         })}
                         bounds=".app__drag-view-port">
                <Backdrop>
                  <div>
                    <div className="handle">{card.id}
                      <button
                        onClick={(event) => runSignal({
                          name: 'removeCard',
                          props: {
                            id: card.id,
                          }
                        })}>Remove Card
                      </button>
                      <button
                        onClick={(event) => runSignal({
                          name: 'dockCard',
                          props: {
                            id: card.id,
                          }
                        })}>Dock Card
                      </button>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: card.html }}/>
                    <div>{card.html}</div>
                  </div>
                </Backdrop>
              </Draggable>
            ))}
          </DragViewPort>
          <Dock>
            {dockedCards && dockedCards.map((card) => (
              <Backdrop key={card.id}>
                <Header onClick={(event) => runSignal({ name: 'undockCard', props: { id: card.id } })}>
                  <Title>
                    {card.id}
                  </Title>
                </Header>
              </Backdrop>
            ))}
          </Dock>
        </Dashboard>
      )
    }
  }
)

