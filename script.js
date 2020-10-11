const id = "fiixed";

function updateUI() {
  console.log("ui updated");
}

function showError() {
  console.error("something went wrong");
}

function getLocationURL(city, state) {}

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
