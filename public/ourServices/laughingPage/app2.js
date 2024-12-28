let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let audioElement = new Audio("songs/day.mp3");

let albuminfo1 = document.getElementById("album-info1");
let albuminfo2 = document.getElementById("album-info2");

//playing song image===================
let playingSongImg = document.getElementById("playingSongImg");

/////////Songs Array Starts////////////////////////
let songs = [
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

//handle play/pause click //master play
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-face-frown-open");
    masterPlay.classList.add("fa-face-grin-squint-tears");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-face-grin-squint-tears");
    masterPlay.classList.add("fa-face-frown-open");
    makeAllPlay();
    resetCardImages();
  }
});

//running pogress bar
audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  let pogress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myPogressBar.value = pogress;
});

//seeking manually on pogress-bar
myPogressBar.addEventListener("change", () => {
  audioElement.currentTime = (myPogressBar.value * audioElement.duration) / 100;
});

//accessing the class
let nameIconPlay = document.querySelectorAll(".nameIconPlay");
let cardImages = document.querySelectorAll(".card .IMAGE");

function makeAllPlay() {
  for (let element of nameIconPlay) {
    element.classList.remove("fa-face-grin-squint-tears");
    element.classList.add("fa-face-frown-open");
  }
}

function resetCardImages() {
  cardImages.forEach((img) => {
    img.classList.remove("image-enlarged");
    img.classList.add("image-normal");
  });
}

// playing from Icon
for (let element of nameIconPlay) {
  console.log(element);
  element.addEventListener("click", (e) => {
    console.log(e.target);
    makeAllPlay(); // user define function

    songIndex = parseInt(e.target.id);

    e.target.classList.remove("fa-face-frown-open");
    e.target.classList.add("fa-face-grin-squint-tears");

    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();

    resetCardImages();
    e.target
      .closest(".card")
      .querySelector(".IMAGE")
      .classList.add("image-enlarged");

    masterPlay.classList.remove("fa-face-frown-open");
    masterPlay.classList.add("fa-face-grin-squint-tears");
  });
}

//next button=================================================================
document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 14) {
    songIndex = 1;
  } else {
    songIndex += 1;
  }

  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();

  resetCardImages();
  document
    .querySelector(`#${songIndex}`)
    .closest(".card")
    .querySelector(".IMAGE")
    .classList.add("image-enlarged");

  masterPlay.classList.remove("fa-face-frown-open");
  masterPlay.classList.add("fa-face-grin-squint-tears");
});
//previous button=============================================================
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 1) {
    songIndex = 1;
  } else {
    songIndex -= 1;
  }

  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();

  resetCardImages();
  document
    .querySelector(`#${songIndex}`)
    .closest(".card")
    .querySelector(".IMAGE")
    .classList.add("image-enlarged");

  masterPlay.classList.remove("fa-face-frown-open");
  masterPlay.classList.add("fa-face-grin-squint-tears");
});

// startFromFirst=====================================

let startFromFirst = document.querySelector("#startFromFirst");

startFromFirst.addEventListener("click", () => {
  audioElement.src = `songs/1.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  songIndex = 1;

  resetCardImages();
  document
    .querySelector(`#${songIndex}`)
    .closest(".card")
    .querySelector(".IMAGE")
    .classList.add("image-enlarged");

  masterPlay.classList.remove("fa-face-frown-open");
  masterPlay.classList.add("fa-face-grin-squint-tears");
});

// volume=================================================

let volumeRange = document.getElementById("volume");

volumeRange.addEventListener("mousemove", function () {
  audioElement.volume = volumeRange.value / 100;
});

// like songs ==============================================

let heart = document.querySelector("#heart");

heart.addEventListener("click", () => {
  heart.classList.toggle("fa-solid");
  heart.classList.toggle("heart-red");
});

//shuffel==========================================

let shuffel = document.querySelector("#shuffel");

shuffel.addEventListener("click", () => {
  shuffel.classList.toggle("red");
});
