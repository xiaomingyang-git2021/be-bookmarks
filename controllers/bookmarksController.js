const express = require("express");
const bookmarkRoutes = express.Router();
const bookmarksArr = require("../models/bookmark.js");

// /bookmarks
bookmarkRoutes.get("/", (req, res)=>{
  res.json(bookmarksArr);
});

// /bookmarks/1
bookmarkRoutes.get("/:index", (req, res)=>{
  const { index } = req.params
  if(bookmarksArr[index]){
    res.json(bookmarksArr[index]);
  } else {
    res.status(404).json({message: "Bookmrk not found"});
  } 
});

// /bookmarks
bookmarkRoutes.post("/", (req, res)=>{
  bookmarksArr.push(req.body);
  res.json(bookmarksArr[bookmarksArr.length-1]);
})

// /bookmarks/1
bookmarkRoutes.delete("/:index", (req, res)=>{
  const { index } = req.params;
  if(bookmarksArr[index]){
    let removed = bookmarksArr.splice(index, 1);
    res.json(removed[0]);
  } else {
    res.status(404).json({error: "Not found"});
  }
})

// /bookmarks/1
bookmarkRoutes.put("/:index", (req, res)=>{
  let { index } = req.params;

  if(!bookmarksArr[index]){
    res.status(422).json({
      error: "Not found"
    })
    return;
  }

  let { name, url, isFavorite, category } = requ.body;
  if(name && url && isFavorite !== undefined && category){
    bookmarksArr[index] = {
    name, url, isFavorite, category
  };
  res.json(bookmarksArr[index]);
  } else {
    res.status(422).json({
      error: "Please provide all fields"
    })
  }
})

module.exports = bookmarkRoutes;