//use strict declaration
'use strict';

var hours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];

//1ST AND PIKE
var firstAndPike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  custPerHour: [],
  calcCustPerHour: function(){
    for(var i = 0; i < hours.length; i++) {
      this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  },
  cookiesPerHour: [],
  calcCookiesPerHour: function(){
    for(var j = 0; j < this.custPerHour.length; j++) {
      this.cookiesPerHour.push(Math.floor(this.custPerHour[j] * this.avgCookie));
    }
  },
  render: function() {
    var ulEl = document.getElementById('pike');
    for (var k = 0; k < this.cookiesPerHour.length; k++) {
      //create element
      var liEl = document.createElement('li');

      //give it content
      liEl.textContent = hours[k] + ': ' + this.cookiesPerHour[k] + ' cookies';

      //append to DOM
      ulEl.appendChild(liEl);
    }
  }
};

firstAndPike.calcCustPerHour();
firstAndPike.calcCookiesPerHour();
firstAndPike.render();

//SEATAC AIRPORT
var seatacAirport = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  custPerHour: [],
  calcCustPerHour: function(){
    for(var i = 0; i < hours.length; i++) {
      this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  },
  cookiesPerHour: [],
  calcCookiesPerHour: function(){
    for(var j = 0; j < this.custPerHour.length; j++) {
      this.cookiesPerHour.push(Math.floor(this.custPerHour[j] * this.avgCookie));
    }
  },
  render: function() {
    var ulEl = document.getElementById('seatac');
    for (var k = 0; k < this.cookiesPerHour.length; k++) {
      //create element
      var liEl = document.createElement('li');

      //give it content
      liEl.textContent = hours[k] + ': ' + this.cookiesPerHour[k] + ' cookies';

      //append to DOM
      ulEl.appendChild(liEl);
    }
  }
};

seatacAirport.calcCustPerHour();
seatacAirport.calcCookiesPerHour();
seatacAirport.render();

//SEATTLE CENTER
var seattleCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  custPerHour: [],
  calcCustPerHour: function(){
    for(var i = 0; i < hours.length; i++) {
      this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  },
  cookiesPerHour: [],
  calcCookiesPerHour: function(){
    for(var j = 0; j < this.custPerHour.length; j++) {
      this.cookiesPerHour.push(Math.floor(this.custPerHour[j] * this.avgCookie));
    }
  },
  render: function() {
    var ulEl = document.getElementById('sc');
    for (var k = 0; k < this.cookiesPerHour.length; k++) {
      //create element
      var liEl = document.createElement('li');

      //give it content
      liEl.textContent = hours[k] + ': ' + this.cookiesPerHour[k] + ' cookies';

      //append to DOM
      ulEl.appendChild(liEl);
    }
  }
};

seattleCenter.calcCustPerHour();
seattleCenter.calcCookiesPerHour();
seattleCenter.render();

//CAPITOL HILL
var capitolHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  custPerHour: [],
  calcCustPerHour: function(){
    for(var i = 0; i < hours.length; i++) {
      this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  },
  cookiesPerHour: [],
  calcCookiesPerHour: function(){
    for(var j = 0; j < this.custPerHour.length; j++) {
      this.cookiesPerHour.push(Math.floor(this.custPerHour[j] * this.avgCookie));
    }
  },
  render: function() {
    var ulEl = document.getElementById('ch');
    for (var k = 0; k < this.cookiesPerHour.length; k++) {
      //create element
      var liEl = document.createElement('li');

      //give it content
      liEl.textContent = hours[k] + ': ' + this.cookiesPerHour[k] + ' cookies';

      //append to DOM
      ulEl.appendChild(liEl);
    }
  }
};

capitolHill.calcCustPerHour();
capitolHill.calcCookiesPerHour();
capitolHill.render();

//ALKI
var alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  custPerHour: [],
  calcCustPerHour: function(){
    for(var i = 0; i < hours.length; i++) {
      this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  },
  cookiesPerHour: [],
  calcCookiesPerHour: function(){
    for(var j = 0; j < this.custPerHour.length; j++) {
      this.cookiesPerHour.push(Math.floor(this.custPerHour[j] * this.avgCookie));
    }
  },
  render: function() {
    var ulEl = document.getElementById('ab');
    for (var k = 0; k < this.cookiesPerHour.length; k++) {
      //create element
      var liEl = document.createElement('li');

      //give it content
      liEl.textContent = hours[k] + ': ' + this.cookiesPerHour[k] + ' cookies';

      //append to DOM
      ulEl.appendChild(liEl);
    }
  }
};

alki.calcCustPerHour();
alki.calcCookiesPerHour();
alki.render();


console.log(firstAndPike, seatacAirport, seattleCenter, capitolHill, alki);