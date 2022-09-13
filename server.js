const express = require("express");
const server = express();
// ROUTES
const router = require("./routes/routes");
const notFound = require("./middleware/route-not-found");
// DATABASE
const connectDB = require("./db/connectDB");
require("dotenv").config();
const cors = require("cors");
const path = require("path");
//MIDDLEWARE
server.use(express.static(path.join(__dirname, "build")));
server.use(cors());
server.use(express.json());
server.use("/api/v1/items", router);
server.use(express.urlencoded({ extended: true }));
server.use(notFound);


server.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

const port = process.env.PORT || 2000;

const start = async () => {
  try {
    await connectDB(process.env.NODE_APP_MONGO_URI);
    server.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
