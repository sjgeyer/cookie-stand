//use strict declaration
'use strict';

//arrays
var hours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];
var allStores = [];
var allStoreHourTotal = [];
var allStoreDayTotal = 0;

//constructor function
function CookieStand(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;
  allStores.push(this);
}

CookieStand.prototype.calcCustPerHour = function(){
  for(var i = 0; i < hours.length; i++) {
    this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};

CookieStand.prototype.calcCookiesPerHour = function(){
  this.calcCustPerHour();
  for(var i = 0; i < this.custPerHour.length; i++) {
    var oneHourCookies = Math.ceil(this.custPerHour[i] * this.avgCookie);
    this.cookiesPerHour.push(oneHourCookies);
    this.totalCookies += oneHourCookies;
  }
};

CookieStand.prototype.render = function() {
  this.calcCookiesPerHour();
  var tableEl = document.getElementById('stores');
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  for (var i = 0; i < this.cookiesPerHour.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.className = 'total';
  tdEl.textContent = this.totalCookies;
  trEl.appendChild(tdEl);
};

//making table header and footer
function makeHeaderRow () {
  var tableEl = document.getElementById('stores');
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  var thEl = document.createElement('th');
  thEl.textContent = 'Locations';
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Location Totals';
  trEl.appendChild(thEl);
}

function makeFooterRow () {
  var tableEl = document.getElementById('stores');
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  var thEl = document.createElement('th');
  thEl.textContent = 'Hourly Totals';
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = allStoreHourTotal[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = allStoreDayTotal;
  trEl.appendChild(thEl);
}

//calc totals by hour and day
function calcAllStoreHrTotal() {
  for(var i = 0; i < hours.length; i++) {
    var total = 0;
    for(var j = 0; j < allStores.length; j++) {
      total += allStores[j].cookiesPerHour[i];
    }
    allStoreHourTotal.push(total);
  }
}

function calcAllStoreDayTotal() {
  for(var i = 0; i < allStores.length; i++) {
    allStoreDayTotal += allStores[i].totalCookies;
  }
}

//making each store
var firstAndPike = new CookieStand('1st and Pike', 23, 65, 6.3);
var seatacAirport = new CookieStand('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new CookieStand('Seattle Center', 11, 38, 3.7);
var capitolHill = new CookieStand('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStand('Alki', 2, 16, 4.6);

//calling all functions!!
makeHeaderRow();
firstAndPike.render();
seatacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();
calcAllStoreHrTotal();
calcAllStoreDayTotal();
makeFooterRow();