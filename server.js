
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", project: "HimShakti Backend" });
});

app.get("/api/items", (req, res) => {
  res.json([
    { id: 1, name: "Sample Item 1" },
    { id: 2, name: "Sample Item 2" }
  ]);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
