import express from "express";
import { Connection } from "./database/db.js";
import Routes from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Routes);

// app.use(express.static(path.join(__dirname, "../client/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

console.log(username, password);

Connection(username, password);

const PORT = 9000;

app.listen(PORT, () => {
  console.log(`Server is running successfully at PORT ${PORT}`);
});
