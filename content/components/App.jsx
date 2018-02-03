import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import Card from './card.jsx'

const Dashboard = styled.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100vh;
    width: 100vw;

    z-index: 9999;
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
`;

class App extends Component {
  componentDidMount() {
    //basic clicker to log redux is working across platform
    // document.addEventListener('click', () => {
    //   console.log('testing')
    //   this.props.dispatch({
    //     type: 'ADD_COUNT'
    //   });
    // });
  }

  render() {
    return (
        <Dashboard>
            <DragViewPort className="app__drag-view-port">
                <Card title="TEST 1">
                    <p>Aarakocra range the Howling Gyre, an endless storm of mighty winds and lashing rains that surrounds the tranquil realm of Aaqa in the Elemental Plane of Air. Making aerial patrols, these birdlike humanoids guard the windy borders of their home against invaders from the Elemental Plane of Earth, such as gargoyles, their sworn enemies.</p>
                    <p>Aarakocra range the Howling Gyre, an endless storm of mighty winds and lashing rains that surrounds the tranquil realm of Aaqa in the Elemental Plane of Air. Making aerial patrols, these birdlike humanoids guard the windy borders of their home against invaders from the Elemental Plane of Earth, such as gargoyles, their sworn enemies.</p>
                </Card>

                <Card title="TEST 2">
                    <p>Aarakocra range the Howling Gyre, an endless storm of mighty winds and lashing rains that surrounds the tranquil realm of Aaqa in the Elemental Plane of Air. Making aerial patrols, these birdlike humanoids guard the windy borders of their home against invaders from the Elemental Plane of Earth, such as gargoyles, their sworn enemies.</p>
                    <p>Aarakocra range the Howling Gyre, an endless storm of mighty winds and lashing rains that surrounds the tranquil realm of Aaqa in the Elemental Plane of Air. Making aerial patrols, these birdlike humanoids guard the windy borders of their home against invaders from the Elemental Plane of Earth, such as gargoyles, their sworn enemies.</p>
                </Card>

                <Card title="TEST 3">
                    <p>Aarakocra range the Howling Gyre, an endless storm of mighty winds and lashing rains that surrounds the tranquil realm of Aaqa in the Elemental Plane of Air. Making aerial patrols, these birdlike humanoids guard the windy borders of their home against invaders from the Elemental Plane of Earth, such as gargoyles, their sworn enemies.</p>
                    <p>Aarakocra range the Howling Gyre, an endless storm of mighty winds and lashing rains that surrounds the tranquil realm of Aaqa in the Elemental Plane of Air. Making aerial patrols, these birdlike humanoids guard the windy borders of their home against invaders from the Elemental Plane of Earth, such as gargoyles, their sworn enemies.</p>
                </Card>

                <Card title="TEST 4">
                    <p>Aarakocra range the Howling Gyre, an endless storm of mighty winds and lashing rains that surrounds the tranquil realm of Aaqa in the Elemental Plane of Air. Making aerial patrols, these birdlike humanoids guard the windy borders of their home against invaders from the Elemental Plane of Earth, such as gargoyles, their sworn enemies.</p>
                    <p>Aarakocra range the Howling Gyre, an endless storm of mighty winds and lashing rains that surrounds the tranquil realm of Aaqa in the Elemental Plane of Air. Making aerial patrols, these birdlike humanoids guard the windy borders of their home against invaders from the Elemental Plane of Earth, such as gargoyles, their sworn enemies.</p>
                </Card>
            </DragViewPort>

            <Dock>
                <Card title="TEST 5"></Card>
            </Dock>
        </Dashboard>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);
