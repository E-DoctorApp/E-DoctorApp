const express = require("express");
const app = express();
const db = require("./database/index");
const PORT = 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`Server is listening on port : ${PORT}`));
