// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App.js';
// import Test from './components/Test.js';
// import Routes from './Routes.js';
//
// // import './styles/index.less';
//
// import {Provider} from 'react-redux';
// import {Store} from 'react-chrome-redux';
// import {Router, Route, Link, browserHistory} from 'react-router'
//
//
// const proxyStore = new Store({
//   portName: 'example'
// });
//
//
//
// ReactDOM.render(
// 	<Provider store={proxyStore}>
// 		<Router history={browserHistory}>
// 			{Routes}
// 		</Router>
// 	</Provider>,
//     document.getElementById('container')
// );


import React from 'react'
import ReactDOM from 'react-dom'

// Use a mutation observer to catch changes to the Background's style tag.
// If it updates, then update the Popup's style tag
const style =  chrome.extension.getBackgroundPage().document.getElementsByTagName('style')[0]
const callback = () => document.getElementsByTagName('head')[0].appendChild(style.cloneNode(true))
const observer = new MutationObserver(callback)
observer.observe(style, {attributes: true, childList: true})
callback()

const Menu = chrome.extension.getBackgroundPage().Menu()
ReactDOM.render(
  Menu,
  document.getElementById('be-container')
)
