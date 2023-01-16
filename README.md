<!-- Add banner here -->
![Banner](Readme/header.png)

# Project Title ( Weather-Journal App Project)

<!-- Describe project in brief -->
- Second project of Egypt FWD initiative with Udacity collaboration (Front End Developer Udacity Nanodegree).
- A simple application that is an exercise on web APIs, fetch API and `async` functions, build with `Node.js`, `html`, `css` and `javascript`.
- Entering a zip code will fire an api call to [OpenWeatherMap](https://openweathermap.org/) to fetch some data including: temperature, city, small description about the weather.
- All made by fetch methods `GET` and `POST`, and javascript `promises`.

## Demo-Preview

This project is built for `Udacity web development professional track` as a task.

![GIF](https://user-images.githubusercontent.com/32793798/92805647-9440de80-f3b9-11ea-81f8-33ba9d8dc8d2.gif)

## Table of Contents

- [Project Name](#project-title--weather-journal-app-project)
- [Demo-Preview](#demo-preview)
- [Getting Started](#getting-started)
  - [Introduction](#introduction)
  - [Project Rubric](#project-rubric)
  - [Get the Starter Code](#get-the-starter-code)
- [Instructions](#instructions)
- [Usage](#usage)
  -[Tools Required](#tools-required)
  -[Features](#features)
  -[Dependencies](#dependencies)
-[Installation](#installation-running-the-app)
  -[Running Locally](#running-locally)
  -[Using Another API Key](#using-another-api-key)
-[Requirements](#requirements)
  -[Project Environment Setup](#project-environment-setup)
  -[APIs and Routes](#apis-and-routes)
  -[Dynamic UI](#dynamic-ui)
- [License](#license)
- [References](#references)
- [Footer](#references)
  -[Versions](#versions)

## Getting Started

- [Back to top](#table-of-contents)

### Introduction

[(Back to top)](#table-of-contents)

This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI for a Weather-Journal App.

### Project Rubric

[(Back to top)](#table-of-contents)

The project will be evaluated by a Udacity code reviewer according to the Weather Journal App project [rubric](https://review.udacity.com/#!/rubrics/2655/view).

### Get the Starter Code

[(Back to top)](#table-of-contents)

The starter code can be found in [The Weather Journal project repository](https://github.com/udacity/fend/tree/refresh-2019/projects/weather-journal-app) repo provided by Udacity.

## Instructions

[(Back to top)](#table-of-contents)

1. ***Start by setting up your project environment.***
   Make sure Node is installed from the terminal. Install the packages `Express`, `Body-Parser`, and `Cors` from the terminal and include them in your `server.js` file.
     - Create a server running on the port of your choosing (here `http://localhost:8080`)
     - Add a `console.log()` to the server callback function, and test that your server is running using Node in the terminal to run the file `server.js`.
2. ***Add a GET route that returns the `projectData` object in your server code.***
   Then, add a POST route that adds incoming data to `projectData`.
     - The POST route should anticipate receiving three pieces of data from the request body
         1. temperature
         2. date
         3. user response
     - Make sure your POST route is setup to add each of these values with a key to `projectData`.
3. ***Acquire API credentials from OpenWeatherMap [website](https://openweathermap.org/api).***
   Use your credentials and the base url to create global variables at the top of your `app.js` code.
     - Write an `async` function in `app.js` that uses `fetch()` to make a GET request to the OpenWeatherMap API.
     - Create an event listener for the element with the id: `generate`, with a callback function to execute  when it is clicked.
     - Inside that callback function call your `async` GET request with the parameters:
         1. base url
         2. user entered zip code (see input in html with id `zip`)
         3. personal API key
4. ***Chain another Promise that updates the UI dynamically.***
   Write another `async` function that is called after the completed POST request. This function should retrieve data from our app, select the necessary elements on the DOM (`index.html`), and then update their necessary values to reflect the dynamic values for:
     1. Temperature
     2. Date
     3. User input

For details now how these functionalities have been implemented, refer the source code.

## Requirements

[(Back to top)](#table-of-contents)

### Project Environment Setup

- [x]  Node and Express Environment:
  - [x]  Node and Express should be installed on the local machine. The project file `server.js` should require `express()`, and should create an instance of their app using express.
  - [x]  The Express app instance should be pointed to the project folder with .html, .css, and .js files.
- [x]  Project Dependencies:
  - [x]  The ‘cors’ package should be installed in the project from the command line, required in the project file server.js, and the instance of the app should be setup to use cors().
  - [x]  The body-parser package should be installed and included in the project.
- [x]  Local Server:
  - [x]  Local server should be running and producing feedback to the Command Line through a working callback function.
- [x]  API Credentials:
  - [x]  Create API credentials on [OpenWeatherMap.com](http://openweathermap.com/)

### APIs and Routes

- [x]  APP API Endpoint:
  - [x]  There should be a JavaScript Object named projectData initiated in the file server.jsto act as the app API endpoint.
- [x]  Integrating OpenWeatherMap API:
  - [x]  The personal API Key for OpenWeatherMap API is saved in a named const variable.
  - [x]  The API Key variable is passed as a parameter to fetch()
  - [x]  Data is successfully returned from the external API.
- [x]  Return Endpoint Data:
  - [x]  There should be a GET route setup on the server side with the first argument as a string naming the route, and the second argument a callback function to return the JS object created at the top of server code.
- [x]  Return Endpoint Data:
  - [x]  There should be an asynchronous function to fetch the data from the app endpoint
- [x]  POST Route:
  - [x]  You should be able to add an entry to the project endpoint using a POST route setup on the server side and executed on the client side as an asynchronous function.
  - [x]  The client side function should take two arguments, the URL to make a POST to, and an object holding the data to POST.
  - [x]  The server side function should create a new entry in the apps endpoint (the named JS object) consisting of the data received from the client side POST

### Dynamic UI

- [x]  Naming HTML Inputs and Buttons For Interaction:
  - [x]  The input element with the placeholder property set to “enter zip code here” should have an id of zip.
  - [x]  The textarea included in project HTML should have an id of feelings.
  - [x]  The button included in project HTML should have an id of generate.
- [x]  Assigning Element Properties Dynamically:
  - [x]  The div with the id, entryHolder should have three child divs with the ids:
        - `date`
        - `temp`
        - `content`
- [x]  Event Listeners:
  - [x]  Adds an event listener to an existing HTML button from DOM using Vanilla JS.
  - [x]  In the file app.js, the element with the id of generate should have an addEventListener() method called on it, with click as the first parameter, and a named callback function as the second parameter.
- [x]  Dynamically Update UI:
  - [x]  Sets the properties of existing HTML elements from the DOM using Vanilla JavaScript.
  - [x]  Included in the async function to retrieve that app’s data on the client side, existing DOM elements should have their innerHTML properties dynamically set according to data returned by the app route.

## Usage

[(Back to top)](#table-of-contents)

### Tools Required

You would require the following tools to develop and run the project:

- [node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/)

### Features

- Local server (*server.js*) is running on ```port 8080```.

- Data is retrieved from external [OpenWeatherMap API](https://openweathermap.org/current#zip) in ```JSON``` format.
  - API calls use ```zip code``` entered by the user. Search works only for US zips.
- The following values are updated dynamically:
  - date
  - temperature
  - user input

### Dependencies

Cool tech stuff used in this project:

- Node.js
  - [Official Guides for Node](https://nodejs.org/en/docs/guides/)
- Express framework
  - [Example of an Express server](https://expressjs.com/en/starter/hello-world.html)
  - [Routing for Express](https://expressjs.com/en/guide/routing.html)
- Node.js packages:
  - [cors](https://www.npmjs.com/package/cors)
  - [body-parser](https://www.npmjs.com/package/body-parser)

## Installation (Running the App)

[(Back to top)](#table-of-contents)

### Running Locally

To run **Weather Journal** locally:

1. Clone this repository.
2. ```cd``` into project directory.
3. Start the local server from command line.

   ``` node server.js ```

4. Open ```http://localhost:3030``` in your browser.

### Using Another API Key

[(Back to top)](#table-of-contents)

1. Before starting the server, go to the `website/app.js` folder. On line 3,

     ``` const apiKey = '&APPID=*** ```

     replace the `***` with the unique apiKey that was generate for you on OpenWeatherMap.

2. Open terminal in the root directory and run the following command:

     ``` npm run start ``` or ``` node server.js ``` or ``` nodemon server.js ```

3. open [http://localhost:8080](http://localhost:8000) in your browser.

## License

[(Back to top)](#table-of-contents)

[LICENSE](Readme/LICENSE.txt)
This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or any later version.

## References

[(Back to top)](#table-of-contents)

- [Node environment with Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)
- [a server with GET and POST routes](https://expressjs.com/en/guide/routing.html)
- [openweathermap](https://openweathermap.org/current)  Credentials for a Web API
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [chain Promises](https://javascript.info/promise-chaining)
- [Fetch the Weather with OpenWeatherMap API and JavaScript](https://bithacker.dev/fetch-weather-openweathermap-api-javascript)
- [Node](https://nodejs.org/en/about/)
- [Express](http://expressjs.com/)
- [Stack Overflow](https://stackoverflow.com/) for resolveing errors
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Rules](https://github.com/DavidAnson/markdownlint/blob/v0.26.2/doc/Rules.md#md040)
- [imperial units](https://openweathermap.force.com/s/article/switching-between-temperature-units-2019-10-24-21-47-24)
- [HTML DOM Element addEventListener()](https://www.w3schools.com/jsref/met_element_addeventlistener.asp)
- [Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
- [Promises chaining](https://javascript.info/promise-chaining)
- [What Is package.json?](https://heynode.com/tutorial/what-packagejson/)
- [Create a package.json File](https://heynode.com/tutorial/create-packagejson-file/)
- [JavaScript Callbacks](https://www.w3schools.com/js/js_callback.asp)

## Footer

[(Back to top)](#table-of-contents)

### Versions

This is version 2.0 of the Weather-Journal App Project.

Original template is provided by Udacity.
Initial project code © [Element: Udacity]

<!-- Add the footer -->
![Footer](Readme/fooooooter.png)
