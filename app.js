const express = require("express");
const app = express();
const bookmarksController = require("./controllers/bookmarksController.js");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
  res.send("Welcome to our bookmarks app");
});

app.use("/bookmarks", bookmarksController);

app.get("*", (req, res)=>{
  res.status(404).json({ error: "Page not found" });
})

module.exports = app; 