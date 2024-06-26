import express from "express";
import dotev from "dotenv";
import cookieParser from "cookie-parser";

import connectDB from "./db/connectDB.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";

dotev.config();
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

// ! Middlewares
app.use(express.json()); //! To parse JSON data in the req.body
app.use(express.urlencoded({ extended: true })); //! To parse form data in the req.body
app.use(cookieParser());

// ! Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
