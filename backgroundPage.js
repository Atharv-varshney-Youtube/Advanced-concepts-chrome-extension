chrome.tabs.onActivated.addListener((tab) => {

    console.log(tab)

    chrome.tabs.get(tab.tabId, (CurrentTabData) => {

        if (CurrentTabData.url === "https://www.google.com/") {

            chrome.scripting.executeScript({
                target: { tabId: CurrentTabData.id },
                files: ['contentScript.js']
            });

            setTimeout(() => {
                chrome.tabs.sendMessage(
                    tab.tabId,
                    "hey I have injected you tab: " + tab.tabId,
                    (response) => {
                        console.log(response)
                    }
                )
            }, 2000)
        }

    })

})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message)
    console.log(sender)

    sendResponse("hi")
})
