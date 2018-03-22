require('./controller')

chrome.tabs.onActivated.addListener(function(tabId, changeInfo, tab) {
  chrome.tabs.executeScript(null, {file: "content.js"});
});

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    const { initiative, dndBeyondId, name, hp, statBlockData } = request.msg
    hp ? window.CEREBRAL.getSignal('addParticipant')({ initiative, dndBeyondId, name, hp, statBlockData })
      : window.CEREBRAL.getSignal('addBestiary')({ dndBeyondId, statBlockData })
  }
)

chrome.runtime.onConnect.addListener(function (port) {
  window.PORT = port
  port.onMessage.addListener(function (payload) {
    payload.init ? port.postMessage(controller.getState())
      : payload.props ? controller.getSignal(payload.name)(payload.props) : console.error('should not end here')
  })
})
