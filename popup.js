document.getElementById('loadDataButton').addEventListener('click', function() {
    const fileInput = document.getElementById('excelFile');
    const file = fileInput.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
  
        // Assuming test data is in the first sheet and starts from row 1 (header at row 0)
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json(worksheet);
  
        // Extract the first row of test data (adjust as necessary)
        const testData = json[0]; // Assuming test data has "username" and "password" fields
        if (testData.username && testData.password) {
          chrome.storage.local.set({ loginData: testData }, function() {
            document.getElementById('status').textContent = 'Test data loaded successfully!';
          });
        } else {
          document.getElementById('status').textContent = 'Invalid test data format.';
        }
      };
      reader.readAsBinaryString(file);
    } else {
      document.getElementById('status').textContent = 'No file selected.';
    }
  }); 