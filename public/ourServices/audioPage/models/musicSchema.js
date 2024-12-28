const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// schema
const songSchema = new Schema({
  songName: String,
  artist: String,
  filePath: String,
  coverPath: String,
});

// defining model
const Song = mongoose.model("Song", songSchema);
module.exports = Song;

//  songName: "Mahiye Jinna Sohna",
//  artist: "Darshan Raval",
//  filePath: "songs/1.mp3",
//  coverPath: "./cardImgs/1img.png",
