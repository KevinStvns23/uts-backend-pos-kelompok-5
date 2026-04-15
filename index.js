require("dotenv").config();

console.log(process.env.MONGO_URI); // 👈 TAMBAH DI SINI

const app = require("./src/core/server");
const connectDB = require("./src/core/config"); // 👈 TAMBAH

// 👇 TAMBAH INI
connectDB();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server jalan di port ${PORT}`);
});