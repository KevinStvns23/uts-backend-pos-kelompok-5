const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// Middleware agar server bisa menerima JSON
app.use(express.json());

// Contoh Route Dasar (Bisa jadi endpoint pertama kamu)
app.get('/', (req, res) => {
    res.send('API Point of Sales Berhasil Dijalankan!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});