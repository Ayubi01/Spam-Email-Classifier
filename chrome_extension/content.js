chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "extractEmailContent") {
      const emailBody = document.body.innerText.replace(/(\r\n|\n|\r)/gm, " ").replace(/[^a-zA-Z ]/g, " ");
      sendResponse({ emailBody: emailBody });
    }
  });
  