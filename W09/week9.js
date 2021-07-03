"use strict";

document.getElementById("submit").addEventListener("click", showInfo);

function showInfo() {
  //   let typeShip = getRadio();

  getInfo().then(function (data) {
    console.log(data);
    const results = data;
    document.getElementById("result").innerHTML = JSON.stringify(results);
  });
}

function getRadio() {
  var radios = document.getElementsByName("ship");

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) return radios[i].value;
  }
}

function getInfo(url = "https://swapi.dev/api/starships/2/") {
  // make the request
  return (
    fetch(url)
      // check to make sure it's good
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .catch(function (error) {
        console.log(error);
      })
  );
}
