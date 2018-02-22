import React, {Component} from 'react'
import {connect} from 'react-redux'
import Draggable from 'react-draggable'
import styled, {css} from 'styled-components'

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

const Button = styled.button`
    flex: 0 0 auto;
    margin: 0;
    padding: 0 4px;
    border: 0;

    background-color: transparent;
`

const Body = styled.div`
    flex: 1 1 auto;
    padding: 8px;
    overflow: scroll;

    box-shadow: inset 0 2px 2px -2px rgb(150, 150, 150);
`
const addParticipant = function () {
    console.log('sending', {
      name: document.querySelector('.mon-stat-block__name-link').text,
      dndBeyondId: getMonsterNameFromURL(),
      hp: parseInt(document.querySelector('.mon-stat-block__attribute-data-value').textContent.trim()),
      initiative: 0,
    })


  chrome.runtime.sendMessage(chrome.runtime.id, {
      msg: {
        name: document.querySelector('.mon-stat-block__name-link').text,
        dndBeyondId: getMonsterNameFromURL(),
        hp: parseInt(document.querySelector('.mon-stat-block__attribute-data-value').textContent.trim()),
        initiative: 0,
      }
    },
    function (response) {
      console.log(response, '=-=-=-=', chrome.runtime.id)
    })
}

const Card = ({
                buttonText,
                card,
                children,
                disabled,
                dispatch,
                expandable,
                title,

                // Handlers
                buttonHandler,
                titleHandler
              }) => {
  const removeCard = () => {
    dispatch({type: 'REMOVE_FROM_DRAG_PORT', card})
    dispatch({type: 'REMOVE_FROM_DOCK', card})
  }



  return (
    <Draggable bounds=".app__drag-view-port" disabled={disabled}>
        <Backdrop>
            <Header>
                <Title onClick={titleHandler}>
                  {title}
                </Title>

                <Button onClick={buttonHandler}>
                  {buttonText}
                </Button>

                <Button onClick={removeCard}>
                    ×
                </Button>

                <Button onClick={addParticipant}>
                    Add participant
                </Button>
            </Header>

          {children &&
          <Body>
          {children}
          </Body>
          }
        </Backdrop>
    </Draggable>
  )
}

Card.defaultProps = {
  disabled: false
}

export default connect(null)(Card)


function getMonsterNameFromURL() {
  const monsters = '/monsters/'
  const path = window.location.pathname
  return path.indexOf(monsters) === 0 ? path.substr(monsters.length) : undefined
}
