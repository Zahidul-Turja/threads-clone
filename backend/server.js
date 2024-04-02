import express from "express";
import dotev from "dotenv";

dotev.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
