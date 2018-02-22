
import React from 'react'
import {render} from 'react-dom'
import {Container} from '@cerebral/react'

const uuidv4 = require('uuid/v4')
import {Controller, Module} from 'cerebral'
import Devtools from 'cerebral/devtools'
import StorageModule from '@cerebral/storage'

const storage = StorageModule({
  target: localStorage,
  json: true,
  sync: {
    'participants': 'participants',
    'bestiary': 'bestiary'
  },
})

const app = Module({
  modules: {storage},
  state: {
    participants: [],
    bestiary: {'giant-poisonous-snake': {url: 'http://google.com/#'}}
  },
  signals: {
    addParticipant: [function addParticipant({state, props}) {
      console.log('props', props)

      state.push('participants', {
        id: uuidv4(),
        dndBeyondId: props.dndBeyondId,
        name: props.dndBeyondId,
        initiative: props.initiative,
        hp: props.hp
      })
      // alert('success')
    }],

    removeParticipant: function removeParticipant({state, props}) {
      let participants = state.get('participants')
      participants = participants.filter(({id}) => props.id !== id)

      state.set('participants', participants)
    },

    editInitiative: function addInitiative({state, props}) {
      const {initiative, id} = props
      let participants = state.get('participants')
      const foundIndex = participants.findIndex(participant => participant.id === id)
      participants[foundIndex].initiative = initiative
      state.set('participants', participants)
    }
  }

})


const controller = Controller(app, {
  devtools: Devtools({
    host: 'localhost:8585',
    https: false,
    reconnect: true,
    storeMutations: true,
    bigComponentsWarning: 5,
    warnStateProps: true,
  })
})

window.CEREBRAL = controller

console.log('CEREBRAL??')
console.log('CEREBRAL??')
console.log('CEREBRAL??')
console.log('CEREBRAL??')

// class App extends Component {

const App = () => {
  return (
    <Container controller={controller}>
      <PopupMenu />
    </Container>
  )
}

window.Menu = App

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log('inside event listner' , request, sender, sendResponse)
    const {initiative, dndBeyondId, name, hp} = request.msg
    window.CEREBRAL.getSignal('addParticipant')({
      initiative,
      dndBeyondId,
      name,
      hp
    })
  }
)