document.getElementById('checkEmail').addEventListener('click', () => {
  const emailContent = document.getElementById('emailContent').value;
  if (emailContent) {
    chrome.runtime.sendMessage({ action: "fetchEmailContent", emailBody: emailContent }, (response) => {
      if (response) {
        document.getElementById('result').innerText = response.spam ? "This email is not spam" : "This email is spam";
      } else {
        document.getElementById('result').innerText = "Error: Unable to classify the email.";
      }
    });
  } else {
    document.getElementById('result').innerText = "Please enter email content.";
  }
});
