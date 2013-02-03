function getWinoCellarWines() {
  console.log("get wino cellar");
  $.getJSON('https://youreawino.com/api/v1/wines.json', function(data) {
    $("#wino-cellar").html(data);
  });
}