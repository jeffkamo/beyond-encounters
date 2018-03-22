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
