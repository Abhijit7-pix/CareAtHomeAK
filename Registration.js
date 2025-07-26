document.getElementById('adminForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // First/Last Name validation
  if (firstName.length < 3 || firstName.length > 20 || !/^[a-zA-Z]+$/.test(firstName)) {
    alert("Invalid First Name");
    return;
  }

  if (lastName.length < 3 || lastName.length > 20 || !/^[a-zA-Z]+$/.test(lastName)) {
    alert("Invalid Last Name");
    return;
  }

  // Phone validation
  if (!/^[6-9]\d{9}$/.test(phone)) {
    alert("Invalid Phone Number");
    return;
  }

  // Email validation (basic)
  if (!/^[^\s@]+@(gmail|hotmail|yahoo)\.com$/.test(email)) {
    alert("Invalid Email Address");
    return;
  }

  // Password validation
  const passwordRegex = /^(?=.*[A-Z])(?=.*\W).{6,10}$/;
  if (!passwordRegex.test(password)) {
    alert("Password must be 6-10 characters, include uppercase and special character.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  // If everything is okay
  alert("Registration successful!");
  this.reset(); // optional
});