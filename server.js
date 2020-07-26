// Create Dependencies
const express = require('express');
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up ROUTES
// =========================================================

// Get NOTE file:
app.get("/notes", (req, res)=>{
    res.sendFile(path.join(__dirname, "./Develop/public/notes.html"))
});
// Get Welcome Page:
app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"))
});

// Start the server to begin listening
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});