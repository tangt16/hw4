



// Buzzfeed articles
  jQuery(function(){
    let apiKeyNews = "8fca8cf08ded4741bc212ec4742eab34";
    let urlNews = "https://newsapi.org/v2/top-headlines?sources=buzzfeed&apiKey=" + apiKeyNews
    jQuery.get(urlNews, function(data) {
      console.log(data);
      jQuery(".buzzfeed").empty();
      for (let i=1; i<10; i++){
        let report = data.articles[i];
        let html = '<div class="card">';
        html = html + '<img class="card-img-top" src="' + report.urlToImage + '">';
        html = html + '<div class="card-body">';
        html = html + '<h4 class="card-title"><a href=' + report.url+'>' + report.title + '</h4>' + '</a>';
        html = html + '<p class="card-text">' + report.description + '</p>';
        html = html + '</div></div></div>';
        jQuery(".buzzfeed").append(html);
  }
    jQuery(".buzzfeed").fadeIn(2000);
    });
  });
