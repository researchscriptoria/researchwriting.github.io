<style>
/* Custom popup styles */
.popup {
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #4e54c8, #8f94fb);
    color: #fff;
    padding: 20px 30px;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    opacity: 0;
    transform: translateY(-20px);
    transition: all 0.5s ease;
    z-index: 1000;
}

.popup.show {
    opacity: 1;
    transform: translateY(0);
}
</style>

<script>
/* Function to show popup */
function showPopup(message) {
    // Create popup element
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerText = message;
    document.body.appendChild(popup);

    // Show popup
    setTimeout(() => popup.classList.add('show'), 100);

    // Hide and remove after 3 seconds
    setTimeout(() => {
        popup.classList.remove('show');
        setTimeout(() => popup.remove(), 500);
    }, 3000);
}

/* Service selection */
function selectService(serviceName) {
    showPopup(`✅ You selected: ${serviceName}`);
}

/* Form submission */
function validateForm() {
    showPopup('🎉 Thank you! Your message has been sent.');
    return false; // Prevent default form submission for demo
}
</script>
