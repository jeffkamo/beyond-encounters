import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'react-chrome-redux';

import App from './components/App';

const proxyStore = new Store({portName: 'example'});

const id = 'beyond-encounters';
const container = document.createElement('div');
container.id = id;

const isDDBeyond = location.host === 'www.dndbeyond.com';
const exists = document.querySelectorAll(`#${id}`).length >= 1;

if (isDDBeyond && !exists) {
    document.body.insertBefore(container, document.body.childNodes[0]);
    render(
        <Provider store={proxyStore}>
            <App/>
        </Provider>,
        document.getElementById('beyond-encounters')
    );
}
