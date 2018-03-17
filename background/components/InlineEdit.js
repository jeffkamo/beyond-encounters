import React from 'react'
import styled from 'styled-components'

const InlineEdit = styled.input`
  display: inline-block;
  min-height: 1em;
  padding: 0.5rem;
  border: none;
  border-bottom: 1px dashed transparent;

  border-radius: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: red;

  &:hover {
    border-bottom: 1px dashed #e1e1e1;
  }

  &::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
`

export default InlineEdit
