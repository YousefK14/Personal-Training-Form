import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies (form submissions)
app.use(express.static("public"));  // Serve static files from the "public" directory
app.set("view engine", "ejs"); // Set EJS as the view engine

// GET request for home page
app.get("/", (req, res) => {
  res.render("index"); // Render the EJS template for the home page (no .ejs needed)
});

// POST request to handle form submission
app.post("/submit", (req, res) => {
  const firstName = req.body["fName"].split(' ')[0]; // Get first word of first name
  const lastName = req.body["lName"].split(' ')[0]; // Get first word of last name
  const email = req.body["email"]; // Get email
  const age = req.body["age"]; // Get age
  const positionValue = req.body["dropdown"]; // Get position from dropdown
  const trainingOptions = req.body["training"]; // Get training options
  const comments = req.body["comments"]; // Get comments

  // Map position value to meaningful text
  let position;
  switch (positionValue) {
    case "1":
      position = "Motivated";
      break;
    case "2":
      position = "Unmotivated";
      break;
    case "3":
      position = "Not sure";
      break;
    default:
      position = "Not specified";
  }

  // Here you can perform further processing (e.g., save to a database)

  // Render the response page with user data
  res.render("results", {
    firstName,
    lastName,
    email,
    age,
    position,
    trainingOptions,
    comments
  });
});

// Listening for requests on localhost:3000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`); // Log a message when the server starts
});
