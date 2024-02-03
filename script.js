function encrypt() {
    const originalText = document.getElementById('originalText').value;
    const encryptedText = btoa(originalText);
    document.getElementById('result').innerText = encryptedText;
  }
  
  function decrypt() {
    const encryptedText = document.getElementById('originalText').value;
    const decryptedText = atob(encryptedText);
    document.getElementById('result').innerText = decryptedText;
  }
  