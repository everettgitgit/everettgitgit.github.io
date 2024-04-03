document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        id: document.getElementById('id').value,
        fullName: document.getElementById('fullName').value,
        address: document.getElementById('address').value,
        status: document.getElementById('status').value,
    };

    fetch('https://sodv1201-a2-backend.onrender.com', { // Replace YOUR_BACKEND_ENDPOINT with your actual backend endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        const confirmationNotice = document.getElementById('confirmationNotice');
        confirmationNotice.innerHTML = `ID: ${data.id}<br>Full Name: ${data.fullName}<br>Address: ${data.address}<br>Status: ${data.status}<br>Fee: $${data.fee}`;
        confirmationNotice.style.display = 'block';

        document.getElementById('registrationForm').style.display = 'none';
    })
    .catch(error => console.error('Error:', error));
});
