function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var gender = document.getElementById('gender').value;
    var region = document.getElementById('region').value;
    var password = document.getElementById('password').value;
    var terms = document.getElementsByName('terms')[0].checked;
  
    if (name.length < 1 || name.length > 20) {
      alert('Please enter a name between 1 and 20 characters.');
      return false;
    }
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
  
    if (gender === '') {
      alert('Please select a gender.');
      return false;
    }
  
    if (region === '') {
      alert('Please enter a region.');
      return false;
    }
  
    if (password.length < 5 || password.length > 20) {
      alert('Please enter a password between 5 and 20 characters.');
      return false;
    }
  
    if (!isAlphaNumeric(password)) {
      alert('Please enter a password with only alphanumeric characters.');
      return false;
    }
  
    if (!terms) {
      alert('Please accept the terms and conditions.');
      return false;
    }
  
    return true;
  }
  
  function validateEmail(email) {
    var atIndex = email.indexOf('@');
    var dotIndex = email.lastIndexOf('.');
  
    if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= email.length) {
      return false;
    }
  
    return true;
  }
  
  function isAlphaNumeric(str) {
    for (var i = 0; i < str.length; i++) {
      var charCode = str.charCodeAt(i);
      if (
        !(charCode >= 48 && charCode <= 57) && // Numeric (0-9)
        !(charCode >= 65 && charCode <= 90) && // Uppercase letters (A-Z)
        !(charCode >= 97 && charCode <= 122)   // Lowercase letters (a-z)
      ) {
        return false;
      }
    }
    return true;
  }
  