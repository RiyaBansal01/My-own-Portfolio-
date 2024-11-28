// Smooth Scroll to Top (Optional)
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Contact Form - Save User Responses in Local Storage
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const nameValue = document.getElementById("name").value;
  const emailvalue = document.getElementById("email").value;
  const messageValue = document.getElementById("message").value;
  
  // Format response
  const response = { nameValue, emailvalue, messageValue, date: new Date().toISOString() };
  
  // Get existing responses from localStorage or initialize an empty array
  const responses = JSON.parse(localStorage.getItem('responses')) || [];
  
  // Add new response to the array
  responses.push(response);
  
  // Save updated responses back to localStorage
  localStorage.setItem("responses", JSON.stringify(responses));
  
  alert("Thank you for your message! I will get in touch with you ASAP.");
  
  this.reset();
});

// Admin Login - Show Admin Login Form
function showAdminLogin() {
  document.getElementById('admin-login').style.display = 'block';
}

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  const storedUsername = 'admin';
  const storedPassword = 'password';
  
  if (username === storedUsername && password === storedPassword) {
    document.getElementById('admin-login').style.display = 'none';
    document.getElementById('admin-section').style.display = 'block';
    
    alert("Welcome Admin!");
    displayStoredUserResponses();
  } else {
    alert("Invalid Credentials, please try again.");
  }
});

// Display Stored User Responses in Admin Section
function displayStoredUserResponses() {
  const responseContainer = document.getElementById('user-responses');
  const responses = JSON.parse(localStorage.getItem('responses')) || [];
  
  responseContainer.innerHTML = '';
  
  responses.forEach(response => {
    const responseElement = document.createElement('div');
    responseElement.innerHTML = `
      <p><strong>Name:</strong> ${response.nameValue}</p>
      <p><strong>Email:</strong> ${response.emailvalue}</p>
      <p><strong>Message:</strong> ${response.messageValue}</p>
      <p><strong>Date:</strong> ${response.date}</p>
      <hr>
    `;
    responseContainer.appendChild(responseElement);
  });
}

// Trigger Admin Login View (you can use a button or some logic to show this)
showAdminLogin();
