import React from 'react'
import {Container} from '@cerebral/react'
import {Controller, Module} from 'cerebral'
import Devtools from 'cerebral/devtools'
import StorageModule from '@cerebral/storage'
import PopupMenu from './components/PopupMenu'

import addParticipant from './signals/addParticipant'
import removeParticipant from './signals/removeParticipant'
import editInitiative from './signals/editInitiative'
import addToOrder from './signals/addToOrder'
import removeOrderGroup from './signals/removeOrderGroup'
import removeParticipantFromOrder from './signals/removeParticipantFromOrder'
import setInitiative from './signals/setInitiative'
import setOrderName from './signals/setOrderName'

const storage = StorageModule({
  target: localStorage,
  json: true,
  sync: {
    'participants': 'participants',
    'bestiary': 'bestiary',
    'order': 'order',
  },
})

const app = Module({
  modules: {storage},
  state: {
    order: {},
    participants: [],
    bestiary: {'giant-poisonous-snake': {url: 'http://google.com/#'}}
  },
  signals: {
    addToOrder,
    removeOrderGroup,
    removeParticipantFromOrder,
    setInitiative,
    setOrderName,
    addParticipant,
    removeParticipant,
    editInitiative
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

const App = () => {
  return (
    <Container controller={controller}>
      <PopupMenu/>
    </Container>
  )
}

window.Menu = App

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log('inside event listner', request, sender, sendResponse)
    const {initiative, dndBeyondId, name, hp} = request.msg
    window.CEREBRAL.getSignal('addParticipant')({initiative, dndBeyondId, name, hp})
  }
)