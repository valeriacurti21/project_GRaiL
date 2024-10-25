// Hardcoded fake credentials (you can add as many as you want)
const validCredentials = [
    { name: "Daniel Umbrenius Vom Dem Bluhendental", id: "17167" },
    { name: "Ganon Greyson", id: "09611" },
    { name: "Grein Braveshine", id: "45725" },
    { name: "Guinevere Findabair", id: "85697" },
    { name: "Piper Pond", id: "08144" },
    { name: "Voltaire Askr", id: "05778", specialMessage: "Benvenuto Prof. Askr, come posso aiutarla?" },
    { name: "Merlin Ambrosius", id: "00000", specialMessage: "Bentornato, Creatore."}
];

function handleLogin(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    const studentName = document.getElementById('student-name').value;
    const studentId = document.getElementById('student-id').value;

    // Check if the entered name and ID match any of the valid credentials
    const user = validCredentials.find(
        credential => credential.name === studentName && credential.id === studentId
    );

    if (user) {
        // Store the student's name, ID, and special message (if any) in localStorage
        localStorage.setItem('studentName', studentName);
        localStorage.setItem('studentId', studentId);
        if (user.specialMessage) {
            localStorage.setItem('specialMessage', user.specialMessage);
        } else {
            localStorage.removeItem('specialMessage');  // Clear any previous special message
        }

        // Redirect to the index.html page after successful login
        window.location.href = "index.html";
    } else {
        // Show an error message if the credentials are invalid
        document.getElementById('login-error').textContent = 'Invalid name or student ID. Please try again.';
        document.getElementById('login-error').style.display = 'block';
    }
}


