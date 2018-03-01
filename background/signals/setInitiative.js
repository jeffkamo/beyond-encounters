const uuidv4 = require('uuid/v4')
import { when, set, push } from 'cerebral/operators'
import { state, props } from 'cerebral/tags'


export default [
  set(state`order.${props`id`}.initiative`, props`initiative`)
]
