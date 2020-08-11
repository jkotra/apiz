const express = require('express');

const app = express()
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.get('/coinflip', (req, res) => {
    let rng = Math.random();

    let response = {};
    response['result'] = (rng > 0.5) ? 'tails' : 'heads';
    response['rng'] = rng.toPrecision(4);

    res.send(response);
});

app.listen(PORT, () => { console.log(`server started on ${PORT}`) })
