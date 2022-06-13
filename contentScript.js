document.body.innerHTML = "hello"

chrome.runtime.sendMessage(
    "hello background page",
    (response) => {
        console.log(response)
    }
)

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message)
    console.log(sender)

    sendResponse("Thank you")
})