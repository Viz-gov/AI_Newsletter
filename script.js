document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email-input').value;

    // Send the email data to the Python endpoint
    fetch('http://localhost:5000/save_email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'email=' + encodeURIComponent(email)
    })
    .then(function(response) {
      // Check the response status and redirect to the thank you page
      if (response.ok) {
        window.location.href = 'thank_you.html';
      } else {
        console.log('Error saving email:', response.statusText);
      }
    })
    .catch(function(error) {
      console.log('Error saving email:', error);
    });
  });
});
