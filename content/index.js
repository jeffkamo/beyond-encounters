import React from 'react'
import {render} from 'react-dom'
import Devtools from 'cerebral/devtools'
import App from './components/App.jsx'
import BeyondAdd from './components/BeyondAdd.jsx'

const id = 'beyond-encounters'
const container = document.createElement('div')
container.id = id
const isDDBeyond = location.host === 'www.dndbeyond.com'
const exists = document.querySelectorAll(`#${id}`).length >= 1


var port = chrome.runtime.connect({name: "knockknock"})

port.postMessage({init: true})

import {Controller, Module} from 'cerebral'
import {Container} from '@cerebral/react'

const controller = Controller(Module({
  state: {
    cards: {}
  },
  signals: {
    runSignal: [
      function runSignalInBackground({props}) {
        console.log(props, 'runSignalInBackground')
        port.postMessage(props)
      }
    ]
  }
}), {
  devtools: Devtools({
    host: 'localhost:8787',
    https: false,
    reconnect: true,
    storeMutations: true,
    bigComponentsWarning: 5,
    warnStateProps: true,
  })
})

window.CEREBRAL = controller

port.onMessage.addListener((x) => {
  controller.runSignal('setState', [
    function setState({state}) {
      Object.keys(x).map(y => {
        state.set(y, x[y])
      })
    }
  ])
})

if (isDDBeyond && !exists) {
  document.body.insertBefore(container, document.body.childNodes[0])
  render(
    <Container controller={controller}>
      <App/>
    </Container>,
    document.getElementById('beyond-encounters')
  )
  try {
    const beyondButton = document.createElement('div')
    beyondButton.setAttribute("id", "beyondButton")
    const referenceNode = document.getElementsByClassName("image")[0]
    document.getElementsByClassName("detail-content")[0].insertBefore(beyondButton, referenceNode)

    render(
      <Container controller={controller}>
        <BeyondAdd/>
      </Container>,
      document.getElementById('beyondButton')
    )
  } catch (noNeedToDoError) {
    console.debug('probably not a monster page')
  }
}
