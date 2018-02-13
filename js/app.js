//use strict declaration
'use strict';

//hours array
var hours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];

//constructor function
function Store(name, minCust, maxCust, avgCookie, id) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.custPerHour = [];
  this.calcCustPerHour = function(){
    for(var i = 0; i < hours.length; i++) {
      this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  };
  this.cookiesPerHour = [];
  this.calcCookiesPerHour = function(){
    this.calcCustPerHour();
    for(var i = 0; i < this.custPerHour.length; i++) {
      var oneHourCookies = Math.ceil(this.custPerHour[i] * this.avgCookie);
      this.cookiesPerHour.push(oneHourCookies);
      this.totalCookies += oneHourCookies;
    }
  };
  this.totalCookies = 0;
  this.render = function() {
    this.calcCookiesPerHour();
    var ulEl = document.getElementById(id);
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      //create element
      var liEl = document.createElement('li');
      //give it content
      liEl.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      //append to DOM
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.className = 'total';
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    ulEl.appendChild(liEl);
  };
}

var firstAndPike = new Store('1st and Pike', 23, 65, 6.3, 'pike');
var seatacAirport = new Store('SeaTac Airport', 3, 24, 1.2, 'seatac');
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7, 'sc');
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3, 'ch');
var alki = new Store('Alki', 2, 16, 4.6, 'ab');

firstAndPike.render();
seatacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();