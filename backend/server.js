
const express = require("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static("frontend"));

// dummy users in real life this would be a database
const users = [
    { username: "Boluwatife82", password: "boluwatife82" },
    { username: "admin", password: "admin123" }
];


app.post("/login", function(req, res) {

    var username = req.body.username;
    var password = req.body.password;

  
    if (!username || !password) {
        return res.json({
            success: false,
            message: "Please fill in all fields."
        });
    }

    
    var foundUser = users.find(function(user) {
        return user.username === username && user.password === password;
    });

    if (foundUser) {
        
        res.json({
            success: true,
            message: "Login successful! Welcome, " + username + "."
        });
    } else {
      
        res.json({
            success: false,
            message: "Incorrect username or password. Please try again."
        });
    }

});


app.listen(3000, function() {
    console.log("Server is running on http://localhost:3000");
});