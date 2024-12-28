//requring mongoose
const mongoose = require("mongoose");
//requring modele named Listing in listing.js file
const Song = require("./musicSchema");
//accessing variable from .env
const dotenv = require("dotenv");

dotenv.config({ path: "../../../../.env" }); // adjust the path to the .env file

/////////Songs Array Starts////////////////////////
let songArray = [
  {
    songName: "Deep Focus",
    artist: "Music",
    filePath: "songs/1.mp3",
    coverPath: "./cardImgs/1img.png",
  },
  {
    songName: "Tum HI HO",
    artist: "Arijit Singh",
    filePath: "songs/2.mp3",
    coverPath: "./cardImgs/2img.png",
  },
  {
    songName: "Banjaara",
    artist: "Mohammed Irfan",
    filePath: "songs/3.mp3",
    coverPath: "./cardImgs/3img.png",
  },
  {
    songName: "Tere Hawaale",
    artist: "Arijit Singh",
    filePath: "songs/4.mp3",
    coverPath: "./cardImgs/4img.png",
  },
  {
    songName: "Tu hi Haqeeqat",
    artist: "Pritam, Javed",
    filePath: "songs/5.mp3",
    coverPath: "./cardImgs/5img.png",
  },
  {
    songName: "Tum Mile",
    artist: "Javed Ali",
    filePath: "songs/6.mp3",
    coverPath: "./cardImgs/6img.png",
  },
  {
    songName: "Tere Mera Pyar Amar",
    artist: "Ahmed Jahanzeb",
    filePath: "songs/7.mp3",
    coverPath: "./cardImgs/7img.jpg",
  },
  {
    songName: "Pahle Bhi Main",
    artist: "Vishal Mishra",
    filePath: "songs/8.mp3",
    coverPath: "./cardImgs/8img.png",
  },
  {
    songName: "Sajni",
    artist: "Arijit Singh",
    filePath: "songs/9.mp3",
    coverPath: "./cardImgs/9img.png",
  },
  {
    songName: "Falak Tak Chal",
    artist: "Udit Narayana",
    filePath: "songs/10.mp3",
    coverPath: "./cardImgs/10img.png",
  },
  {
    songName: "10 mins Hindi Lofi Songs",
    artist: "Hindi Songs",
    filePath: "songs/11.mp3",
    coverPath: "./cardImgs/11img.png",
  },
  {
    songName: "O Maahi",
    artist: "Arijit Singh",
    filePath: "songs/12.mp3",
    coverPath: "./cardImgs/12img.png",
  },
  {
    songName: "Main Rang Sharbaton Ka",
    artist: "Arijit Singh/Atif Aslam",
    filePath: "songs/13.mp3",
    coverPath: "./cardImgs/13img.png",
  },
  {
    songName: "Mahiye jinna Sohna",
    artist: "Darshan Raval",
    filePath: "songs/14.mp3",
    coverPath: "./cardImgs/14img.jpeg",
  },
];

// //////////////////Songs Array End///////////////////////

//connecting to data base
// calling main to connect DB
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  // await mongoose.connect({ path: "./config/.env" });
  await mongoose.connect(process.env.MONGO_URL);
}

//function to insert data
const initDB = async () => {
  //empty the random data from DB
  await Song.deleteMany({});
  //inserting data
  await Song.insertMany(songArray);
  console.log("data was initialize");
};

//calling the initDB func and then closing the DB connection
initDB().then(() => {
  mongoose.disconnect();
  console.log("Database connection closed");
});
