//use strict declaration
'use strict';

//arrays
var hours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];
var allStores = [];
var allStoreHourTotal = [];
var allStoreDayTotal = 0;
var allTosserHourTotal = [];
var allDayTosserTotal = 0;
var submitButton = document.getElementById('submitForm');

//constructor function
function CookieStand(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.custPerHour = [];
  this.tossersPerHour = [];
  this.totalTossers = 0;
  this.cookiesPerHour = [];
  this.totalCookies = 0;
  this.calcCustPerHour();
  this.calcCookiesPerHour();
  this.calcTossersPerHour();
  allStores.push(this);
}

CookieStand.prototype.calcCustPerHour = function(){
  for(var i = 0; i < hours.length; i++) {
    this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};

CookieStand.prototype.calcCookiesPerHour = function(){
  for(var i = 0; i < this.custPerHour.length; i++) {
    var oneHourCookies = Math.ceil(this.custPerHour[i] * this.avgCookie);
    this.cookiesPerHour.push(oneHourCookies);
    this.totalCookies += oneHourCookies;
  }
};

CookieStand.prototype.calcTossersPerHour = function () {
  for(var i = 0; i < this.custPerHour.length; i++) {
    var oneHourTossers = Math.ceil(this.custPerHour[i] / 20);
    if (oneHourTossers < 2) {
      oneHourTossers = 2;
    }
    this.tossersPerHour.push(oneHourTossers);
    this.totalTossers += oneHourTossers;
  }
};

CookieStand.prototype.renderCookies = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  var tableEl = document.getElementById('cookies');
  tableEl.appendChild(trEl);
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

CookieStand.prototype.renderStaff = function() {
  this.renderCookies();
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  var tableEl = document.getElementById('staff');
  tableEl.appendChild(trEl);
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  for (var i = 0; i < this.cookiesPerHour.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.tossersPerHour[i];
    if (this.tossersPerHour[i] > 2) {
      tdEl.className = 'peak';
    }
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.className = 'total';
  tdEl.textContent = this.totalTossers;
  trEl.appendChild(tdEl);
};

//calc totals by hour and day
function calcAllStoreHrTotal() {
  allStoreHourTotal = [];
  allStoreDayTotal = 0;
  for(var i = 0; i < hours.length; i++) {
    var total = 0;
    for(var j = 0; j < allStores.length; j++) {
      total += allStores[j].cookiesPerHour[i];
    }
    allStoreHourTotal.push(total);
    allStoreDayTotal += allStoreHourTotal[i];
  }
}

function calcAllTosserHourTotal() {
  allTosserHourTotal = [];
  allDayTosserTotal = 0;
  for(var i = 0; i < hours.length; i++) {
    var total = 0;
    for(var j = 0; j < allStores.length; j++) {
      total += allStores[j].tossersPerHour[i];
    }
    allTosserHourTotal.push(total);
    allDayTosserTotal += allTosserHourTotal[i];
  }
}

//making table headers and footers
function makeCookiesHeaderRow () {
  var tableEl = document.getElementById('cookies');
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

function makeCookiesFooterRow () {
  calcAllStoreHrTotal();
  var cookieTableEl = document.getElementById('cookies');
  var trEl = document.createElement('tr');
  cookieTableEl.appendChild(trEl);
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

function makeStaffHeaderRow () {
  var tableEl = document.getElementById('staff');
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

function makeStaffFooterRow () {
  calcAllTosserHourTotal();
  var cookieTableEl = document.getElementById('staff');
  var trEl = document.createElement('tr');
  cookieTableEl.appendChild(trEl);
  var thEl = document.createElement('th');
  thEl.textContent = 'Hourly Totals';
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = allTosserHourTotal[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = allDayTosserTotal;
  trEl.appendChild(thEl);
}

//render function
function renderAll() {
  var cookieTable = document.getElementById('cookies');
  var staffTable = document.getElementById('staff');
  cookieTable.textContent = '';
  staffTable.textContent = '';
  makeCookiesHeaderRow();
  makeStaffHeaderRow();
  for(var i = 0; i < allStores.length; i++) {
    allStores[i].renderStaff();
  }
  makeCookiesFooterRow();
  makeStaffFooterRow();
}

//making each store
new CookieStand('1st and Pike', 23, 65, 6.3);
new CookieStand('SeaTac Airport', 3, 24, 1.2);
new CookieStand('Seattle Center', 11, 38, 3.7);
new CookieStand('Capitol Hill', 20, 38, 2.3);
new CookieStand('Alki', 2, 16, 4.6);

renderAll();

function formSubmit() {
  //prevents reload
  event.preventDefault();
  //prevents empty fields
  if (!event.target.inputName.value || !event.target.inputMinCust.value || !event.target.inputMaxCust.value || !event.target.inputAvgCookie.value) {
    return alert('Please fill all fields!');
  }
  //defining values
  var inputName = event.target.inputName.value;
  var inputMinCust = parseInt(event.target.inputMinCust.value);
  var inputMaxCust = parseInt(event.target.inputMaxCust.value);
  var inputAvgCookie = Number(event.target.inputAvgCookie.value);

  new CookieStand(inputName, inputMinCust, inputMaxCust, inputAvgCookie);
  event.target.reset();
  renderAll();
}

submitButton.addEventListener('submit', formSubmit);