// WELCOME MESSAGE
console.log('Hi there, welcome to my weather journal app');

//---------------------------------------------------------------------------------------------------------
  /* Global Variables */  
//---------------------------------------------------------------------------------------------------------
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.toDateString();

const errorText = document.getElementById('error');
//---------------------------------------------------------------------------------------------------------
  /* WEB API WITH FETCH DEMO--  */  
//---------------------------------------------------------------------------------------------------------

/**
 * // API credentials
 * @var {string} baseURL -> The URL to retrieve weather information from his API (country : US).
 * @var {string} apiKey -> Personal API Key for OpenWeatherMap API.
 * To get the Celsius Temperature (&units=metric)
 * &units=imperial to get the Fahrenheit Temperature as rubric
*/ 

const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = ',&appid=80697106a9031e0f5e8afa8de37507b4&units=metric';

// the URL of the server to post data
const server = 'http://localhost:8080';

/*  SETUP SUBMIT BUTTON  */
// Event listener to add function to existing HTML DOM element (observe for user interaction)

document.getElementById('generate').addEventListener('click', performAction);     // submits and generates everything

/**
 * // performAction //
 * function to get input values
 * call getWeatherData to fetch the data from API
 * create object from API object by using destructuring
 * post the data in the server
 * get the data to update UI
 */
 
function performAction(e){

  e.preventDefault();

  //get value after click on the button
  // inputs
  const zipCode = document.getElementById('zip').value;     // zip needs to be in function scope not global scope
  const feelings = document.getElementById('feelings').value;     // feeling needs to be in function scope not global scope

  //Test for values
  if (inputTest(zipCode, feelings) == true) {return};

  //getWeatherData return promise
  getWeather (baseURL, zipCode, apiKey)

  // CHAIN POST PROMISE
  .then((data) => {
    
    // TODO-Call Function
    // Call the postData function to add data to the post route
    postData('/add', {
      date: newDate,
      city: data.name,
      country: data.sys.country,
      temp: Math.round(data.main.temp),
      content: feelings,
      description: data.weather[0].description,
      icon: data.weather[0].icon
    });

    // Call the updateUI function to generate the UI
    updateUI();

    document.querySelector('.entry').style.opacity = 1;
    errorText.style.opacity = 0;
  })
}

//---------------------------------------------------------------------------------------------------------
  /* Function to GET Web API Data */  
//---------------------------------------------------------------------------------------------------------

/**
 * TODO-Async GET
 * SETUP ASYNC GET REQUEST WITH PROMISE AND FETCH API
 * @param {*string} baseURL -> The URL to retrieve weather information from his API (country : US).
 * @param {*input} zipCode -> Zip code for whom we want the information.
 * @param {*string} apiKey -> Personal API Key for OpenWeatherMap API.
 * @returns {JSON} representing current weather info specific to our zip code.
 */

const getWeather = async (baseURL, zipCode, apiKey) => {

  const madeURI = baseURL + zipCode + apiKey;
  const response = await fetch(madeURI);
  console.log('Async GET Request response successful');
  console.log(response);

  try {
    const data = await response.json();     // Transform into JSON
    
      if (data.cod != 200) {
        // display the error message on UI
        errorText.innerHTML = `Error: ${data.cod}, ${data.message}`;
        setTimeout(_=> errorText.innerHTML = '', 5000)
        throw `${data.message}`;
      }

    console.log(data);
    return data;
  }

  catch (error) {
    console.log("Could not retrieve Weather Data", error);     // appropriately handle the error
  }

};

//---------------------------------------------------------------------------------------------------------
  /* Function to POST data */  
//---------------------------------------------------------------------------------------------------------
/**
 * SETUP ASYNC POST REQUEST WITH PROMISE AND FETCH API
 * an async function to make a POST request that has two arguments.
 * @description  Post data
 * @param {*string} url -> a url to make the POST to
 * @param {*object} data -> a JavaScript object holding the data to post
 */

// POST method implementation
const postData = async (url = '', data = {}) => {
  
  console.log('Async POST Request response successful');

  const response = await fetch(url, {
    method: 'POST',     // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin',     // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',     // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),     // body data type must match "Content-Type" header
  });

  try {
    const newData = await response.json();
    console.log(`You just saved`, newData);
    return newData;
  }
  
  catch (error) {
    console.log("error", error);     // appropriately handle the error
  }

};

//---------------------------------------------------------------------------------------------------------
  /* Function to GET Project Data and updating UI by this data */  
//---------------------------------------------------------------------------------------------------------

const updateUI = async () => {
  
  const request = await fetch(server + '/all');
  //document.querySelector('.entry').style.opacity = 1;
  console.log('Update UI Async GET Request response successful');
  console.log(request);
  
  //retrieve data from our app
  try{
    const allData = await request.json();     // Transform into JSON

    //select the necessary elements on the DOM (index.html), 
    //update their necessary values to reflect the dynamic values for temp, date, user input
    document.getElementById('date').innerHTML = allData.date;
    document.getElementById('city').innerHTML = allData.city + ', ' + allData.country;
    document.getElementById('temp').innerHTML = allData.temp + '&degC' ;
    document.getElementById("description").innerHTML = `<img id="icon" src = "https://openweathermap.org/img/wn/${allData.icon}.png" alt = "Weather icon"> ` + allData.description;
    document.getElementById('content').innerHTML = 'You Feel ' + allData.content;
    document.getElementById('zip').value = '';
    document.getElementById('feelings').value = '';
}

  catch(error){
    console.log("There is some error in getting the data", error);     // appropriately handle the error
  }
}

//---------------------------------------------------------------------------------------------------------
  /* Test to make sure there is input. */  
//---------------------------------------------------------------------------------------------------------
const inputTest = (zip, feelings) => {
  if (!zip) {
    errorText.innerHTML = "Please enter zip code.";
    setTimeout(_=> errorText.innerHTML = '', 5000)
    return true;
  };
  if (!feelings) {
    errorText.innerHTML = "Please describe your mood today.";
    setTimeout(_=> errorText.innerHTML = '', 5000)
    return true;
  };
};