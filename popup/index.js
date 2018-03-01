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

// TESTING
const styles = chrome.extension.getBackgroundPage().document.getElementsByTagName('head')[0]
document.getElementsByTagName('head')[0].appendChild(styles)

// const styles = chrome.extension.getBackgroundPage().getStyles()
// console.log('TESTING styles', styles)
// ReactDOM.render(
//   <div dangerouslySetInnerHTML={{__html: styles}} />,
//   document.getElementById('be-styles')
// )

const Menu = chrome.extension.getBackgroundPage().Menu()
ReactDOM.render(
  Menu,
  document.getElementById('be-container')
)
