const express = require("express");

const app = express();

app.get("/", async (req, res) => {
    res.send("Hello World");
})

app.get("/coin", async (req, res) => {
    try {

    const response = await fetch("https://api.coingecko.com/api/v3/ping");
    console.log("response ", response);
    const json = await response.json();
    console.log("responseponse ", json);
    res.send(json);
    } catch (err) {
        console.log("Error ", err);
        res.status(500).send(err.message);
    }
})

app.listen(5000, () => console.log("Server is running"));