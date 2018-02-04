import {combineReducers} from 'redux';

import cards from './cards';
import dock from './dock';
import dragPort from './drag-port';

export default combineReducers({
    cards,
    dock,
    dragPort
});
