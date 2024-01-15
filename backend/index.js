const express = require('express');
const app = express();
let counter = 0;

app.get('/counter', (req, res) => {
    res.json({ counter });
});

app.post('/counter', (req, res) => {
    counter += 1;
    res.json({ counter });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
