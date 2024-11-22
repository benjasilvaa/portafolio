const express = require('express');
const app = express;

app.get('/', (req, res) => {
    res.send('¡servidor funcionando!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('servidor corriendo en http://localhost:${PORT}')
});