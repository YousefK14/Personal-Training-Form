import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";


const app = express();
const PORT = 3000;

//MiddleWares
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies (form submissions)
app.use(express.static("public"));  // Serve static files from the "public" directory

//GET request for home page
app.get("/",(req,res)=>{
  res.render("index.ejs"); // Render the EJS template for the home page
})


//Listening for requests on localhost:3000;
app.listen(PORT,()=>{
  console.log(`Server listening on port ${PORT}`); // Log a message when the server starts
})