let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }


$(function() {
  let apiKey = "5b958646b09a4ebda8af2c2ce1f938fd"; // don't steal it please
  let url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=" + apiKey;
  $.get(url, function(data) {
    console.log(data); // have a look at what "data" is in the browser console
    $(".news").empty();
    for (let i=0; i<data.results.length; i++) {
      let article = data.results[i];
      let html = '<div class="col-4">';
      html = html + '<div class="nycard">';
      html = html + '<img class="nycard-img-top" src="' + article.multimedia[0].url + '">';
      html = html + '<div class="nycard-bodyny">';
      html = html + '<h4 class="nycard-titleny">' + article.title + '</h4>';
      html = html + '<p class="nycard-texnyt">' + article.abstract + '</p>';
      html = html + '</div></div></div>';
      $(".news").append(html);
    }
    $(".news").fadeIn(2000);
  });
});
