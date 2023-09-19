const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to CI-CD Pipeline.");
});
app.post('/user', (req, res) => {
    res.send({ "id": 100, "name": "Channary" });
});

app.listen(6000, () => {
    console.log('Express Server is Running at Port No 6000..');
});
