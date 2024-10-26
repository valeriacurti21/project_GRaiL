// Fake credentials with name, ID, and optional special messages
const validCredentials = [
    { name: "Merlin Ambrosius", id: "00000", specialMessage: "Bentornato, Creatore." },
    { name: "Voltaire Askr", id: "05778", specialMessage: "Bentornato prof. Askr! Si ricordi di controllare i suoi impegni per la giornata!" },
    { name: "Daniel Umbrenius Vom Dem Bluhendental", id: "17167" },  // No special message for Charlie
    { name: "Ganon Grayson", id: "09611" },
    { name: "Grein Braveshine", id: "45725" },
    { name: "Guinevere Findabair", id: "85697" },
    { name: "Piper Pond", id: "08144" }
];

// Function to handle login
function handleLogin(event) {
    event.preventDefault();  // Prevent form from submitting traditionally

    const studentName = document.getElementById('student-name').value;
    const studentId = document.getElementById('student-id').value;

    // Check if name and ID match any entry in validCredentials
    const user = validCredentials.find(
        credential => credential.name === studentName && credential.id === studentId
    );

    if (user) {
        // Store student details in localStorage
        localStorage.setItem('studentName', studentName);
        localStorage.setItem('studentId', studentId);
        if (user.specialMessage) {
            localStorage.setItem('specialMessage', user.specialMessage);
        } else {
            localStorage.removeItem('specialMessage');  // Remove if no special message
        }

        // Redirect to the chat interface
        window.location.href = "/code/html/index.html";
    } else {
        // Display error message if credentials are invalid
        document.getElementById('login-error').textContent = 'Nome o ID invalidi. Siete pregati di riprovare.';
        document.getElementById('login-error').style.display = 'block';
    }
}

function toggleIDVisibility() {
    const idField = document.getElementById('student-id');
    idField.type = idField.type === 'password' ? 'text' : 'password';
}

// Function to display a personalized welcome message on the chat page
function displayStudentName() {
    const studentName = localStorage.getItem('studentName');  // Get student name
    const studentId = localStorage.getItem('studentId');      // Get student ID
    const specialMessage = localStorage.getItem('specialMessage');  // Get special message if any

    if (studentId && studentName) {
        // Display special message or a general welcome with the student's name and ID
        if (specialMessage) {
            document.getElementById('welcome-message').innerHTML = specialMessage;
        } else {
            document.getElementById('welcome-message').innerHTML = `Benvenuto, Cadetto ${studentId}!`;
        }
    } else {
        // Redirect to login page if no valid login data is found
        window.location.href = "/code/html/login.html";
    }
}

// Trigger displayStudentName on page load for index.html
if (window.location.pathname.endsWith('/code/html/index.html')) {
    window.onload = displayStudentName;
}

// Function to handle logging out
function logout() {
    localStorage.removeItem('studentName');  // Clear the stored student name
    localStorage.removeItem('studentId');    // Clear the stored student ID
    window.location.href = "/code/html/login.html";     // Redirect to login page
}

//________________________________________________________//


// Function to flip the card
function flipCard() {
    const card = document.getElementById('flip-card');
    card.classList.toggle('flip');
}

// Function to toggle the visibility of the ID field
function toggleIDVisibility() {
    const idField = document.getElementById('student-id');
    idField.type = idField.type === 'password' ? 'text' : 'password';
}

// Existing handleLogin function (this handles login after the form is revealed)
function handleLogin(event) {
    event.preventDefault();  // Prevent form from submitting traditionally

    const studentName = document.getElementById('student-name').value;
    const studentId = document.getElementById('student-id').value;

    // Check if name and ID match any entry in validCredentials
    const user = validCredentials.find(
        credential => credential.name === studentName && credential.id === studentId
    );

    if (user) {
        // Store student details in localStorage
        localStorage.setItem('studentName', studentName);
        localStorage.setItem('studentId', studentId);
        if (user.specialMessage) {
            localStorage.setItem('specialMessage', user.specialMessage);
        } else {
            localStorage.removeItem('specialMessage');  // Remove if no special message
        }

        // Redirect to the chat interface
        window.location.href = "index.html";
    } else {
        // Display error message if credentials are invalid
        document.getElementById('login-error').textContent = 'Invalid name or student ID. Please try again.';
        document.getElementById('login-error').style.display = 'block';
    }
}

window.onload = function() {
    document.querySelector('.animated-dissolve').style.animationDelay = '0.1s';
};
