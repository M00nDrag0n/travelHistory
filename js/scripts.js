function travelHistory() {
  this.locations = [],
  this.currentId = 0;
}

travelHistory.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
}

travelHistory.prototype.addLocation = function(location) {
  location.id = this.assignId();
  this.locations.push(location);
}


travelHistory.prototype.findLocation = function(id) {
  for (var i = 0; i< this.Locations.length; i++) {
    if (this.Locations[i]) {
      if (this.Locations[i].id === id) {
        return this.Locations[i];
      }
    }
  };
  return false;
}




function Location(continent, country, city, season, landmarks, people) {
  this.continent = continent;
  this.country = country;
  this.city = city;
  this.season = season;
  this.landmarks = landmarks;
  this.people = people;
}


var book1 = new travelHistory();
var hawaii = new Location("North America", "Hawaii", "Maui", "Summer", "Tall Mountains, Oceans, Palm Trees, wildlife", "Bob, Crabby, John, BillyBobJoe, Sharry");

var littleRock = new Location("North America", "Arkansas", "littleRock", "Winter", "Frustrating humans, Rocks, Some Trees, Occasional wildlife", "Just Crabby");

var germany = new Location("Europe", "Germany", "Berlin", "Spring", "Tall Mountains, Castles, Churches, Meat", "Elvis, Michael, Jackson");

var australia = new Location("Australia", "Australia", "The Outback", "Fall", "Kangaroos, Rivers, Nothingness", "Drake, Justin, Selena");

var russia = new Location("Europe", "Russia", "Cheboksary", "Winter", "Tall Mountains, Snow, Churches, Pine Trees", "Putin, Jay-z, NF");

var china = new Location("Asia", "China", "Suzhou", "Autumn", "Confucius Temple, Suzhou Silk Factory, Tea Shop", "Laura from Spain");


book1.addLocation(hawaii);
book1.addLocation(littleRock);
book1.addLocation(germany);
book1.addLocation(australia);
book1.addLocation(russia);
book1.addLocation(china);

$(document).ready(function(){
  $("#hawaii").click(function(event){
    
  });
  $("#russia").click(function(event){

  });
  $("#china").click(function(event){

  });
  $("#australia").click(function(event){

  });
  $("#berlin").click(function(event){

  });
  $("#littleRock").click(function(event){

  });

  $("#output1").text(Location());
});
