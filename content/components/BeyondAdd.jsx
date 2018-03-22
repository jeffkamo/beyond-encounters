import React from 'react'
import { signal } from 'cerebral/tags'
import { connect } from '@cerebral/react'

export default connect({
    runSignal: signal`runSignal`
  },
  function BeyondAdd({ runSignal }) {
    return (
      <button onClick={() => {
        runSignal({ name: 'addParticipant', props: getDetails() })
      }}>
        Add to beyond
      </button>)
  }
)

function getDetails() {
  return {
    name: document.querySelector('.mon-stat-block__name-link').text,
    dndBeyondId: getMonsterNameFromURL(),
    hp: parseInt(document.querySelector('.mon-stat-block__attribute-data-value').textContent.trim()),
    initiative: 0,
    statBlockData: document.querySelector('.more-info .mon-stat-block').outerHTML
  }
}

function getMonsterNameFromURL() {
  const monsters = '/monsters/'
  const path = window.location.pathname
  return path.indexOf(monsters) === 0 ? path.substr(monsters.length) : undefined
}
