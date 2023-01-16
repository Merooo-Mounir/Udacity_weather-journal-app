/* SETUP ENDPOINT */

// Setup empty JS object to act as endpoint for all routes
projectData = {};

/* SETUP NODE, EXPRESS, DEPENDENCIES AND SERVER */

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');

app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = process.env.PORT || 8080;
/* Spin up the server */
// Function to test server with an arrow function
const server = app.listen(port, ()=>{
	console.log(`server running at http://localhost:${port}/`)
});

/* TODO-ROUTES! */
/**
 * SETUP GET ROUTE 
 * GET method route
 * Callback function to complete GET "/all"
 */

app.get ('/all', (req, res) => {
  console.log('Get Request successful');
  res.status(200).send(projectData);
}); 


/**
 * SETUP POST ROUTE
 * POST method route
 * Callback function to complete POST "/add"
 */

app.post('/add', (req, res) => {
  
  console.log('POST Request successful');
  
  projectData = {
    date: req.body.date,
    city: req.body.city,
    country : req.body.country,
    temp: req.body.temp,
    content: req.body.content,
    description: req.body.description,
    icon: req.body.icon
  }
    
  res.status(200).send(projectData);
  console.log(projectData);
});
