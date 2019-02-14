var appid = "d5b3174ed99c6d6a5ffac3180d17668c";

function onWeather(err, data) {
  if(err) {
    /*
     * Toggle the results display for the response display.
     * Print an error message in the error element and change its display so
     * that it is no longer hidden.
     */

    var el = document.getElementById("error");
    var results = document.getElementById("results");
    var response = document.getElementById("response");

    el.innerHTML = "Error! API could not find weather information for zip code.";

    response.style.display = "";
    results.style.display = "none";
    el.style.display = "";

    return;
  }

  // Empty the error element and hide it.
  var el = document.getElementById("error");
  el.innerHTML = '';
  el.style.display = "none";

  var temp = data.main.temp;
  document.getElementById("temp").innerHTML = temp + " &deg;F";

  var windspeed = data.wind.speed;

  // Set the element with ID windspeed's content to the windspeed above,
  // with the unit "mph" afterwards
  document.getElementById("windspeed").innerHTML = windspeed + " mph";

  var iconUrl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var iconEl = document.getElementById("icon");
  
  // Create an img tag with src set to iconUrl, and set the content of the
  // icon element to that image.
  if (iconEl.childNodes[0]) {
    iconEl.removeChild(iconEl.childNodes[0]);
  }
  var img = document.createElement("img");
  img.setAttribute("src", iconUrl);
  iconEl.appendChild(img);


  var locationEl = document.getElementById("location");
  locationEl.innerHTML = data.name;

  // Make the response element and results elements both visible
  var results = document.getElementById("results");
  var response = document.getElementById("response");

  response.style.display = "";
  results.style.display = "";

}

function onZipCode(err, data) {
  if(err) {
    /* 
     * Toggle the results display for the response display.
     * Print an error message in the error element and change its display so
     * that it is no longer hidden.
     */
    var el = document.getElementById("error");
    var results = document.getElementById("results");
    var response = document.getElementById("response");

    el.innerHTML = "Error! Provided zip code does not exist.";

    response.style.display = "";
    results.style.display = "none";
    el.style.display = "";

    return;
  }

  /*
   * Get the city name, state name and country from the place data returned by
   * the Zippopotamus API.
   */

  var firstMatch = data.places[0];
  var city = firstMatch["place name"];
  var state = firstMatch["state"];
  var country = data["country abbreviation"];

  var url = "http://api.openweathermap.org/data/2.5/weather";

  /*
   * Access the url above with the query string below:
   *   ?APPID=[APPID]&units=imperial&q=[CITY],[STATE],[COUNTRY]
   * Where the things in brackets were found above.
   */

  url += "?APPID=" + appid + "&units=imperial&q=" + city + "," + state + "," + country;

  AJAX.getJSON(url, onWeather);


}

function getWeather(e) {
  e.preventDefault(); // stop submit
  var zipCode = document.getElementById("zipCode").value;
  if(!zipCode) {
    /* 
     * Toggle the results display for the response display.
     * Print an error message in the error element and change its display so
     * that it is no longer hidden.
     */
    var el = document.getElementById("error");
    var results = document.getElementById("results");
    var response = document.getElementById("response");

    el.innerHTML = "Error! Did not enter zip code.";

    response.style.display = "";
    results.style.display = "none";
    el.style.display = "";

    return;
  }

  /* 
   * Access the url http://api.zippopotam.us/us/ZZZZZ where ZZZZZ is the given
   * zip code.
   */
   var url = "http://api.zippopotam.us/us/" + zipCode;
   AJAX.getJSON(url, onZipCode);

}




