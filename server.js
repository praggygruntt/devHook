// IMPORT EXPRESS
const express = require('express');

// Instantiate Express with the app variable
const app = express();

app.get("/", (req, res) => {
    res.send("DEVHOOK")
})

// If deployed, the PORT variable becomes the process.env.PORT, otherwise, locally it will run on port 5000
const PORT = process.env.PORT || 5000;

// Server listens for connections on port variable, and if once running, fires a callback to console.log a message
app.listen(PORT, () => {
    console.log("DEVHOOK API NOW RUNNING ON PORT " + PORT);
})

