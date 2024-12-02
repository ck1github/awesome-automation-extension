// The words we're looking for
const wordsToDetect = ['Sign In'];

// Function to detect keywords on the page
function detectLoginButton() {
  const bodyText = document.body.innerText.toLowerCase(); // Get all the text content from the page
  const detectedWords = [];

  // Detect "login" on the page
  wordsToDetect.forEach(word => {
    if (bodyText.includes(word)) {
      detectedWords.push(word);
    }
  });

  if (detectedWords.length > 0) {
    // If we find "login", try to click the login button
    console.log("Login keyword detected on the page.");
    attemptLogin();
  }
}

// Function to attempt to click the login button and perform the login
function attemptLogin() {
  // Find the login button on the page (assuming it's a button or link with the text "login")
  const loginButton = document.querySelector('button, a, input[type="submit"]'); // This should be more specific depending on the site
  if (loginButton) {
    loginButton.click();  // Simulate click on the login button
    console.log("Clicked on the login button.");

    // Now that the login form is probably displayed, let's try to fill in the credentials
    autoFillLoginForm();
  } else {
    console.log("Login button not found.");
  }
}

// Function to automatically fill the login form
function autoFillLoginForm() {
  // Assuming the page has username and password fields
  const usernameField = document.querySelector('input[type="text"], input[name="username"], input[id="username"]');
  const passwordField = document.querySelector('input[type="password"], input[name="password"], input[id="password"]');

  if (usernameField && passwordField) {
    // Use the test data from the Excel file (which is passed via a message or predefined data)
    chrome.storage.local.get(['loginData'], function(result) {
      if (result.loginData) {
        const { username, password } = result.loginData;
        usernameField.value = username;
        passwordField.value = password;

        // Now submit the form
        const submitButton = document.querySelector('button[type="submit"], input[type="submit"]','<span>Sign In</span>');
        if (submitButton) {
          submitButton.click();
          console.log("Submitted the login form.");
        }
      } else {
        console.log("Login data not found.");
      }
    });
  } else {
    console.log("Username or password field not found.");
  }
}

// Automatically trigger detection and login when the page loads
window.onload = detectLoginButton;
