// Hardcoded fake credentials (you can add as many as you want)
const validCredentials = [
    { name: "Daniel Umbrenius Vom Dem Bluhendental", id: "17167" },
    { name: "Ganon Greyson", id: "09611" },
    { name: "Grein Braveshine", id: "45725" },
    { name: "Guinevere Findabair", id: "85697" },
    { name: "Piper Pond", id: "08144" },
    { name: "Voltaire Askr", id: "05778" },
    { name: "Merlin Ambrosius", id: "00000" }
];

// Function to handle the login
function handleLogin(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    const studentName = document.getElementById('student-name').value;
    const studentId = document.getElementById('student-id').value;

    // Check if the entered name and ID match any of the valid credentials
    const isValid = validCredentials.some(
        credential => credential.name === studentName && credential.id === studentId
    );

    if (isValid) {
        // Store the student's name and ID in localStorage
        localStorage.setItem('studentName', studentName);
        localStorage.setItem('studentId', studentId);

        // Redirect to the index.html page after successful login
        window.location.href = "/code/html/index.html";
    } else {
        // Show an error message if the credentials are invalid
        document.getElementById('login-error').textContent = 'Nome o ID invalidi. Siete pregati di riprovare.';
        document.getElementById('login-error').style.display = 'block';
    }
}

