function book() {
  this.locations = [];
}

book.prototype.addLocation = function(location) {
  this.locations.push(location);
}

function Location(continent, country, city, season, landmarks, people) {
  this.continent = continent;
  this.country = country;
  this.city = city;
  this.season = season;
  this.landmarks = landmarks;
  this.people = people;
}


var book1 = new book();
var hawaii = new Location("North America", "Hawaii", "Maui", "Summer", "Tall Mountains, Oceans, Palm Trees, wildlife", "Bob, Crabby, John, BillyBobJoe, Sharry");
book1.addLocation(hawaii);


$(document).ready(function(){


});
