<<<<<<< HEAD
# Awesome Automation Extension

This browser extension automates the detection of login-related pages and attempts to log in using test data from an Excel file. It detects the presence of the word "login" on any webpage, clicks the login button, fills out the form with credentials from an Excel file, and submits it.

## Features

- Automatically detects the word "login" or related keywords on a webpage.
- Attempts to click the login button if a relevant login form is found.
- Uses test data (username and password) from an uploaded Excel file.
- Automatically fills in the login form and submits it.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Google Chrome** (or another Chromium-based browser).
- **Text editor** (such as Visual Studio Code, Sublime Text, or Notepad++).
- **Excel file** with test data containing login credentials (username and password).

## Folder Structure

The project directory should look like this:

|-- manifest.json 
|-- background.js 
|-- content.js 
|-- popup.html 
|-- popup.js 
|-- icons/ 
| |-- icon16.png 
| |-- icon48.png 
| |-- icon128.png 
|-- test_data.xlsx

### File Descriptions:

- **`manifest.json`**: The configuration file for the extension, defining its permissions, content scripts, and background tasks.
- **`background.js`**: Manages the extension lifecycle (e.g., initializing the extension).
- **`content.js`**: Contains the logic to scan the webpage for keywords, click the login button, and attempt to log in with test data.
- **`popup.html`**: Provides the user interface for uploading the Excel file containing test data.
- **`popup.js`**: Handles the logic for reading the Excel file and storing the login credentials.
- **`icons/`**: Contains icons for the extension (you can customize these).
- **`test_data.xlsx`**: The Excel file containing the test data (username and password) used for login.

## Installation

### 1. Clone or Download the Repository

```bash
git clone <repository_url>

### 2. Load the Extension in Chrome
Open Google Chrome.
Navigate to chrome://extensions/.
Enable Developer Mode (toggle switch at the top right).
Click Load unpacked and select the project folder (e.g., word-detector-extension).
The extension icon should now appear in the Chrome toolbar.

Usage
### 1. Prepare the Test Data
Create an Excel file (test_data.xlsx) with the following format:

username	password
testuser	testpassword

### 2. Upload the Test Data
Click on the extension icon in the browser toolbar.
In the popup, click the "Load Test Data" button and upload your Excel file with test data.
The extension will read the username and password fields from the file and store them in local storage.

### 3. Test the Login Automation
Navigate to a webpage with a login form (make sure it contains the word "login" or a relevant button).
The extension will automatically:
Detect the word "login" or related keywords.
Attempt to click the login button on the page.
Fill in the username and password fields with the test data.
Submit the form.

### 4. Check Console Logs
Open Developer Tools in Chrome (F12 or Ctrl+Shift+I).
Go to the Console tab to view the logs and check the progress of the login automation process.

### How It Works
Content Script (content.js)
The content script runs on every page you visit, and it:

Scans the page for the word "login" in the body text.
If the word "login" is found, it tries to click the login button (or submit button).
Once the login form is detected, it automatically fills in the username and password fields using the data stored in localStorage.
Submits the form if the fields are filled correctly.
Popup (popup.js)
The popup allows users to upload an Excel file containing test data (username and password). The data is then stored in Chrome's local storage, where it can be accessed by the content script.

### Reading the Excel File
The popup.js file uses the XLSX.js library to read the Excel file. The library converts the file into JSON format, from which the first row is extracted (which should contain the username and password).

### Troubleshooting
Login form not detected?

Ensure that the form contains input fields with the types text for username and password for the password.
Ensure that the login button is correctly recognized (you might need to modify the selectors in the content.js file).

### Test data not working?

Make sure the Excel file is correctly formatted with "username" and "password" columns, and that they are in the first row.

### Console errors?

Open Developer Tools (F12) and check for any errors or logs in the Console tab to debug the issue.
Contributing

Feel free to fork this project, open issues, and submit pull requests. Contributions are welcome!
=======
# Awesome Automation Extension
## By **CK Rathod**
This browser extension automates the detection of login-related pages and attempts to log in using test data from an Excel file. It detects the presence of the word "login" on any webpage, clicks the login button, fills out the form with credentials from an Excel file, and submits it.

Features
Automatically detects the word "login" or related keywords on a webpage.
Attempts to click the login button if a relevant login form is found.
Uses test data (username and password) from an uploaded Excel file.
Automatically fills in the login form and submits it.
Prerequisites
Before you begin, ensure you have the following installed:

Google Chrome (or another Chromium-based browser).
Text editor (such as Visual Studio Code, Sublime Text, or Notepad++).
Excel file with test data containing login credentials (username and password).
Folder Structure
The project directory should look like this:

lua
Copy code
word-detector-extension/
|-- manifest.json
|-- background.js
|-- content.js
|-- popup.html
|-- popup.js
|-- icons/
|    |-- icon16.png
|    |-- icon48.png
|    |-- icon128.png
|-- test_data.xlsx
File Descriptions:
manifest.json: The configuration file for the extension, defining its permissions, content scripts, and background tasks.
background.js: Manages the extension lifecycle (e.g., initializing the extension).
content.js: Contains the logic to scan the webpage for keywords, click the login button, and attempt to log in with test data.
popup.html: Provides the user interface for uploading the Excel file containing test data.
popup.js: Handles the logic for reading the Excel file and storing the login credentials.
icons/: Contains icons for the extension (you can customize these).
test_data.xlsx: The Excel file containing the test data (username and password) used for login.
Installation
1. Clone or Download the Repository
bash
Copy code
git clone <repository_url>
2. Load the Extension in Chrome
Open Google Chrome.
Navigate to chrome://extensions/.
Enable Developer Mode (toggle switch at the top right).
Click Load unpacked and select the project folder (e.g., word-detector-extension).
The extension icon should now appear in the Chrome toolbar.
Usage
1. Prepare the Test Data
Create an Excel file (test_data.xlsx) with the following format:

username	password
testuser	testpassword
2. Upload the Test Data
Click on the extension icon in the browser toolbar.
In the popup, click the "Load Test Data" button and upload your Excel file with test data.
The extension will read the username and password fields from the file and store them in local storage.
3. Test the Login Automation
Navigate to a webpage with a login form (make sure it contains the word "login" or a relevant button).
The extension will automatically:
Detect the word "login" or related keywords.
Attempt to click the login button on the page.
Fill in the username and password fields with the test data.
Submit the form.
4. Check Console Logs
Open Developer Tools in Chrome (F12 or Ctrl+Shift+I).
Go to the Console tab to view the logs and check the progress of the login automation process.
How It Works
Content Script (content.js)
The content script runs on every page you visit, and it:

Scans the page for the word "login" in the body text.
If the word "login" is found, it tries to click the login button (or submit button).
Once the login form is detected, it automatically fills in the username and password fields using the data stored in localStorage.
Submits the form if the fields are filled correctly.
Popup (popup.js)
The popup allows users to upload an Excel file containing test data (username and password). The data is then stored in Chrome's local storage, where it can be accessed by the content script.

Reading the Excel File
The popup.js file uses the XLSX.js library to read the Excel file. The library converts the file into JSON format, from which the first row is extracted (which should contain the username and password).

Troubleshooting
Login form not detected?

Ensure that the form contains input fields with the types text for username and password for the password.
Ensure that the login button is correctly recognized (you might need to modify the selectors in the content.js file).
Test data not working?

Make sure the Excel file is correctly formatted with "username" and "password" columns, and that they are in the first row.
Console errors?

Open Developer Tools (F12) and check for any errors or logs in the Console tab to debug the issue.
Contributing
Feel free to fork this project, open issues, and submit pull requests. Contributions are welcome!

License
This project is licensed under the MIT License - see the LICENSE file for details.

Example Project Walkthrough:
Prepare an Excel file with the login credentials.
Load the extension into Chrome as an unpacked extension.
Upload the test data via the extension popup.
Navigate to a page that contains the word "login" and observe the extension filling out the form automatically.
>>>>>>> 56f49cf70e82592f96a9bc46621eebb0fef96941
