// Import the Express library
// Define a constant port

const express = require("express");
const app = express();
const PORT = 6969;

// express.static("public") serves static files from "public" directory
// express.json() parses(breaking down complex sets of data structures) incoming JSON requests to make data available

app.use(express.static("public"));
app.use(express.json());


// Logs error message on console if error occurs during file transmission

app.get("/index", (req, res) => {
    res.sendFile("index.html", (err) => {
        if (err)
            console.log(err);
    });
});

app.get("/signup", (req, res) => {
    res.sendFile(__dirname + "/signup.html", (err) => {
        if (err) console.log(err);
    });
});

// Logs signup form data to the console
// Sends JSON response containing submitted data back to user

app.post("/signup", (req, res) => {
    const { fName, lName, email} = req.body;

    console.log(`Data: ${fName}, ${lName}, ${email}`);
    res.json({ fName, lName, email });
})

// Starts server on specified port
// Logs message to console indicating server is running

app.listen(PORT, () => {
    console.log(`Server is on port: ${PORT}`);
});