// grab the form and fields from the HTML
var loginForm = document.getElementById("loginForm");
var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");

// grab the error spans and message divs
var usernameError = document.getElementById("usernameError");
var passwordError = document.getElementById("passwordError");
var successMsg = document.getElementById("successMsg");
var errorMsg = document.getElementById("errorMsg");


// this runs when the user clicks the Login button
loginForm.addEventListener("submit", function(e) {
    e.preventDefault(); // stop the page from refreshing

    // clear any old messages first
    clearMessages();

    var username = usernameInput.value.trim();
    var password = passwordInput.value.trim();

    var isValid = true;

    // check username field
    if (username === "") {
        usernameError.textContent = "Username is required.";
        isValid = false;
    } else if (username.length < 3) {
        usernameError.textContent = "Username must be at least 3 characters.";
        isValid = false;
    }

    // check password field
    if (password === "") {
        passwordError.textContent = "Password is required.";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
    }

    // if both fields are valid, send the data to the backend server
    if (isValid) {

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(function(response) {
            return response.json(); // read the response from the server
        })
        .then(function(data) {
            // check what the server replied
            if (data.success === true) {
                successMsg.textContent = data.message;
                successMsg.style.display = "block";
                loginForm.reset(); // clear the input fields
            } else {
                errorMsg.textContent = data.message;
                errorMsg.style.display = "block";
            }
        })
        .catch(function(err) {
            // this runs if the server is down or something went wrong
            errorMsg.textContent = "Something went wrong. Please try again.";
            errorMsg.style.display = "block";
            console.log("Error:", err);
        });

    }

});


// this runs when the Reset button is clicked
function resetForm() {
    clearMessages();
}


// clears all error messages and banners
function clearMessages() {
    successMsg.style.display = "none";
    errorMsg.style.display = "none";
    successMsg.textContent = "";
    errorMsg.textContent = "";
    usernameError.textContent = "";
    passwordError.textContent = "";
}


// clear the red error under username when user starts typing
usernameInput.addEventListener("input", function() {
    usernameError.textContent = "";
});

// clear the red error under password when user starts typing
passwordInput.addEventListener("input", function() {
    passwordError.textContent = "";
});