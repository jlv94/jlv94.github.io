document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('send-contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Gather form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const company = document.getElementById('company').value;
        const message = document.getElementById('message').value;

        // Prepare data to send
        const data = {
            name: name,
            email: email,
            company: company,
            message: message,
            date: new Date().toISOString()
        };

        // Send data to Google Sheets via the Apps Script URL
        fetch('https://script.google.com/macros/s/AKfycbyza5CBRbmtu7bu30ZpSvWjApVJNbpLRRzdJNMaWnAYYFt0J9f4iMyHNnAvc1sauKFk/exec', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
           if (data.result === 'success') {
            alert('Thank you for your message, ' + name + '! I will get back to you soon.');
            } else {
            alert('There was an error: ' + (data.error || 'Unknown error'));
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error submitting your form. Please try again later.');
        });
    });
});