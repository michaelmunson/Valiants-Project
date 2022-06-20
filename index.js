import express from "express";
import path from "path";

const app = express();

const dir = path.resolve("./dist/index.html");

app.use(express.static('dist'));
app.get('/', (req, res) => {
    res.sendFile(dir)
});

// Start the server
const PORT = parseInt(process.env.PORT) || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

