/* Reset and base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: #f4f6f9;
    color: #333;
    line-height: 1.6;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: auto;
}

/* Header */
header {
    background: linear-gradient(to right, #4e54c8, #8f94fb);
    color: #fff;
    padding: 60px 0;
    text-align: center;
}

header h1 {
    font-size: 3rem;
    margin-bottom: 10px;
}

header p {
    font-size: 1.2rem;
    font-weight: 500;
}

/* Navigation */
nav {
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 15px 0;
}

nav ul li {
    margin: 0 20px;
}

nav ul li a {
    text-decoration: none;
    color: #4e54c8;
    font-weight: 600;
    transition: color 0.3s;
}

nav ul li a:hover {
    color: #8f94fb;
}

/* Services */
section h2 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 2rem;
    color: #4e54c8;
}

.service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
}

.service-button {
    background: #fff;
    border: 2px solid #4e54c8;
    color: #4e54c8;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
}

.service-button:hover {
    background: #4e54c8;
    color: #fff;
    transform: translateY(-5px);
}

/* Contact Form */
form {
    max-width: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

form input, form textarea {
    padding: 15px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
    transition: border 0.3s;
}

form input:focus, form textarea:focus {
    border-color: #4e54c8;
    outline: none;
}

.submit-button {
    background-color: #4e54c8;
    color: #fff;
    padding: 15px;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease;
}

.submit-button:hover {
    background-color: #8f94fb;
}

.contact-info {
    text-align: center;
    margin-top: 30px;
    font-weight: 500;
    color: #555;
}

/* Footer */
footer {
    background-color: #4e54c8;
    color: #fff;
    text-align: center;
    padding: 20px 0;
    margin-top: 40px;
}

/* Responsive */
@media(max-width: 768px){
    nav ul {
        flex-direction: column;
    }

    nav ul li {
        margin: 10px 0;
    }
}
