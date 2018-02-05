import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import Card from './card.jsx'
import Example from './example.jsx'

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
`;

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
`;

class App extends Component {
    renderDragPort() {
        const {cards, dragPort} = this.props

        return dragPort && dragPort.map((card, idx) => {
            const collapse = this.collapseCard(card)

            return (
                <Card
                    title={cards[card].title}
                    key={`card-${idx}`}
                    closeHandler={collapse}
                >
                    <Example />
                </Card>
            )
        })
    }

    renderDock() {
        const {cards, dock} = this.props

        return dock && dock.map((card, idx) => {
            const expand = this.expandCard(card)
            const close = this.removeCard(card)

            return (
               <Card
                    title={cards[card].title}
                    disabled
                    expandable
                    key={`card-${idx}`}
                    titleHandler={expand}
                    closeHandler={close}
                />
            )
        })
    }

    collapseCard(card) {
        return () => {
            this.props.dispatch({type: 'REMOVE_FROM_DRAG_PORT', card})
            this.props.dispatch({type: 'ADD_INTO_DOCK', card})
        }
    }

    expandCard(card) {
        return () => {
            this.props.dispatch({type: 'REMOVE_FROM_DOCK', card})
            this.props.dispatch({type: 'ADD_INTO_DRAG_PORT', card})
        }
    }

    removeCard(card) {
        return () => {
            this.props.dispatch({type: 'REMOVE_FROM_DOCK', card})
        }
    }

    render() {
        return (
            <Dashboard>
                <DragViewPort className="app__drag-view-port">
                    {this.renderDragPort()}
                </DragViewPort>

                <Dock>
                    {this.renderDock()}
                </Dock>
            </Dashboard>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
        dock: state.dock,
        dragPort: state.dragPort,
    };
};

export default connect(mapStateToProps)(App);
