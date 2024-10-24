// Function to display the student's name on the index.html page
function displayStudentName() {
    const studentName = localStorage.getItem('studentId');  // Retrieve student name from localStorage
    }
    if (studentId) {
        document.getElementById('welcome-message').innerHTML = `Benvenuto, cadetto ${studentId}!`;
    }
    else {
        // If no student name is found, redirect back to login page
        window.location.href = "/code/html/login.html";
    }


// Call the displayStudentName() function when index.html is loaded
if (window.location.pathname.endsWith('/code/html/index.html')) {
    window.onload = displayStudentName;
}


// Function to handle logging out
function logout() {
    localStorage.removeItem('studentName');  // Clear the stored student name
    localStorage.removeItem('studentId');    // Clear the stored student ID
    window.location.href = "/code/html/login.html";     // Redirect to login page
}

