chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fetchEmailContent") {
    fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email_body: request.emailBody })
    })
    .then(response => response.json())
    .then(data => sendResponse(data))
    .catch(error => console.error('Error:', error));
    return true;  // Will respond asynchronously.
  }
});
