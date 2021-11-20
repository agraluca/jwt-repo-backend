import express from "express";
import env from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import routes from "./routes/index.js";

env.config();

const port = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());

connectDb();

app.use(routes);

app.listen(port, () => console.log("Server rodando"));
