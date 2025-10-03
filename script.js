<!-- Include SweetAlert2 library in your HTML <head> -->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<script>
/* ===========================
   Service Selection
=========================== */
function selectService(serviceName) {
    Swal.fire({
        title: 'Service Selected!',
        text: `You chose: ${serviceName}`,
        icon: 'success',
        showConfirmButton: false,
        timer: 2000,
        background: '#f4f6f9',
        color: '#2c3e50',
        backdrop: `
            rgba(0,0,0,0.4)
            url("https://media.giphy.com/media/26tPplGWjN0xLybiU/giphy.gif")
            left top
            no-repeat
        `
    });
}

/* ===========================
   Form Submission
=========================== */
function validateForm() {
    // Optional: Add form validation here

    Swal.fire({
        title: 'Thank You!',
        text: "Your message has been successfully sent.",
        icon: 'success',
        confirmButtonText: 'Close',
        confirmButtonColor: '#4e54c8',
        background: '#f4f6f9',
        color: '#2c3e50',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });

    return false; // Prevent default form submission for demo
}
</script>

<!-- Optional: Animate.css for smooth popup animations -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
