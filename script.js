/*
Create an addBeer function that takes two arguments, "name" and "category".
Create an event handler that invokes addBeer when the '.post-beer' button gets
clicked, and pass in the "beer name" and "category" that the user entered.

PROJECT EXERCISE 2
Inside the addBeer function, create a new beer object with the new data and
push it to a global array called beers.

PROJECT EXERCISE 3
Create another function called updateBeers that takes no arguments. Inside this
function, empty the '.beers-list' ul first, then loop through the beers array
and append the beers to the '.beers-list' ul. Invoke this function inside your
'.post-beer' click handler just below where you're invoking the addBeer function.

Why are we removing everything and then adding it all back?
*/

var beers = [];

var addBeer = function(name, category, rating) {
  beers.push({name, category, rating});
  //beers = [{name, category}];
  //console.log(beers);
};

var updateBeers = function() {
  $(".beers-list").find('li').remove();
  for (i = 0; i < beers.length; i++) {
    $(".beers-list").append("<li></li>");
    $(".beers-list li:last").append(beers[i]["name"]+" - "+beers[i]["category"]+" - "+beers[i]["rating"]);
  };
};

$('.post-beer').click(function () {
  var $beerInput = $('.beer-input').val();
  var $categoryInput = $('.category-input').val();
  var $ratingInput = $('.rating-input').val();
  addBeer($beerInput, $categoryInput, $ratingInput);
  updateBeers();
});

console.log(beers);
