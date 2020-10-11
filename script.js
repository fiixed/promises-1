const id = "fiixed";

function updateUI() {
  console.log("ui updated");
}

function showError() {
  console.error("something went wrong");
}

function getLocationURL(city, state) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=ebf3cd3b0e251d6441381b1fcc0ef9b4`;
}

function getUser(id) {
  return new Promise(function (resolve, reject) {
    $.getJSON({
      url: `https://api.github.com/users/${id}`,
      success: resolve,
      error: reject,
    });
  });
}

function getWeather(location, successCallback, failureCallback) {
  $.getJSON({
    url: getLocationURL(location),
    success: successCallback,
    error: failureCallback,
  });
}

// ebf3cd3b0e251d6441381b1fcc0ef9b4

document.getElementById("get-user").addEventListener("click", function () {
  getUser(
    "fiixed",
    function (userInfo) {
      getWeather(
        userInfo.location.split(", "),
        function (weather) {
          updateUI(weather);
        },
        showError
      );
    },
    showError
  );
});
