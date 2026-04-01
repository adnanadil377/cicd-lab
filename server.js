const express = require("express");
const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
    res.json({ "hello": "Adnan 23bcs35" });
});

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});