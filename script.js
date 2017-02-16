var BeerReviewApp = function () {
  var beers = [];

  var addBeer = function(name, category, rating) {
    beers.push({name, category, rating});
  };

  var updateBeers = function() {
    $(".beers-list").find('li').remove();
    for (i = 0; i < beers.length; i++) {
      $(".beers-list").append("<li></li>");
      $(".beers-list li:last").append(beers[i]["name"]+" - "+beers[i]["category"]+" - "+beers[i]["rating"]);
    };
  };

  return {
    addBeer: addBeer,
    updateBeers: updateBeers
  }
}

var beerReviewApp = BeerReviewApp();

$('.post-beer').click(function () {
  var $beerInput = $('.beer-input').val();
  var $categoryInput = $('.category-input').val();
  var $ratingInput = $('.rating-input').val();
  beerReviewApp.addBeer($beerInput, $categoryInput, $ratingInput);
  beerReviewApp.updateBeers();
});

console.log(beers);
