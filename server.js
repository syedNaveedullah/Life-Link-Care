const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
//for .env file
const dotenv = require("dotenv");
dotenv.config();
// require("dotenv").config(); //we can require it like this also

//for llama
const Groq = require("groq-sdk");
//song schema
const Song = require("./public/ourServices/audioPage/models/musicSchema");

const app = express();
const port = process.env.PORT || 8080;

//making connection with DB======================================
main()
  .then((res) => {
    console.log("connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

// Verify the API key is loaded
if (!process.env.GROQ_API_KEY) {
  console.error(
    "ERROR: GROQ_API_KEY is not defined. Please check your .env file."
  );
  process.exit(1);
}

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());

//Serve Views file
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Function to get chat completion from Groq API
async function getGroqChatCompletion(userMessage) {
  try {
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: userMessage,
        },
      ],
      model: "llama3-70b-8192",
    });
    return (
      response.choices[0]?.message?.content || "No response from the model."
    );
  } catch (error) {
    console.error(
      "Error communicating with Groq API:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Error communicating with Groq API");
  }
}

// Endpoint to handle chatbot requests
app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const botResponse = await getGroqChatCompletion(userMessage);
    res.json({ response: botResponse });
  } catch (error) {
    res.status(500).send("Error communicating with Groq API");
  }
});

//index route///////////////////////////
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// starting the server //////////////////////
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

//fetching songs from mongooDB
app.get("/api/songs", async (req, res) => {
  try {
    const songs = await Song.find({});
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch songs" });
  }
});
