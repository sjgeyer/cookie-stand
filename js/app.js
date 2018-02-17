//use strict declaration
'use strict';

//global variables
var hours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];
var allStores = [];
var allStoreHourTotal = [];
var allStoreDayTotal = 0;
var allTosserHourTotal = [];
var allDayTosserTotal = 0;
var submitButton = document.getElementById('submitForm');
var cookieTable = document.getElementById('cookies');
var staffTable = document.getElementById('staff');

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
  this.custPerHour = [];
  for(var i = 0; i < hours.length; i++) {
    this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};

CookieStand.prototype.calcCookiesPerHour = function(){
  this.totalCookies = 0;
  this.cookiesPerHour = [];
  for(var i = 0; i < this.custPerHour.length; i++) {
    var oneHourCookies = Math.ceil(this.custPerHour[i] * this.avgCookie);
    this.cookiesPerHour.push(oneHourCookies);
    this.totalCookies += oneHourCookies;
  }
};

CookieStand.prototype.calcTossersPerHour = function () {
  this.totalTossers = 0;
  this.tossersPerHour = [];
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
  cookieTable.appendChild(trEl);
  newElement('td', this.name, trEl);
  for (var i = 0; i < this.cookiesPerHour.length; i++) {
    newElement('td', this.cookiesPerHour[i], trEl);
  }
  newElement('td', this.totalCookies, trEl, 'total');
};

CookieStand.prototype.renderStaff = function() {
  this.renderCookies();
  var trEl = document.createElement('tr');
  staffTable.appendChild(trEl);
  newElement('td', this.name, trEl);
  for (var i = 0; i < this.cookiesPerHour.length; i++) {
    newElement('td', this.tossersPerHour[i], trEl);
    //missing peak element highlight!
  }
  newElement('td', this.totalTossers, trEl, 'total');
};

//make new element function
function newElement(elementType, content, parent, classIfNeeded) {
  var newEl = document.createElement(elementType);
  newEl.className = classIfNeeded;
  newEl.textContent = content;
  parent.appendChild(newEl);
}

//calc column totals
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
  var trEl = document.createElement('tr');
  cookieTable.appendChild(trEl);
  newElement('th', 'Locations', trEl);
  for (var i = 0; i < hours.length; i++) {
    newElement('th', hours[i], trEl);
  }
  newElement('th', 'Location Totals', trEl);
}

function makeCookiesFooterRow () {
  calcAllStoreHrTotal();
  var trEl = document.createElement('tr');
  cookieTable.appendChild(trEl);
  newElement('th', 'Hourly Totals', trEl);
  for (var i = 0; i < hours.length; i++) {
    newElement('th', allStoreHourTotal[i], trEl);
  }
  newElement('th', allStoreDayTotal, trEl);
}

function makeStaffHeaderRow () {
  var trEl = document.createElement('tr');
  staffTable.appendChild(trEl);
  newElement('th', 'Locations', trEl);
  for (var i = 0; i < hours.length; i++) {
    newElement('th', hours[i], trEl);
  }
  newElement('th', 'Location Totals', trEl);
}

function makeStaffFooterRow () {
  calcAllTosserHourTotal();
  var trEl = document.createElement('tr');
  staffTable.appendChild(trEl);
  newElement('th', 'Hourly Totals', trEl);
  for (var i = 0; i < hours.length; i++) {
    newElement('th', allTosserHourTotal[i], trEl);
  }
  newElement('th', allDayTosserTotal, trEl);
}

//render function
function renderAll() {
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

//rendering!!
renderAll();

//event handler
function formSubmit(event) {
  //prevents reload
  event.preventDefault();

  //defining values
  var inputName = event.target.inputName.value;
  var inputMinCust = parseInt(event.target.inputMinCust.value);
  var inputMaxCust = parseInt(event.target.inputMaxCust.value);
  var inputAvgCookie = parseFloat(event.target.inputAvgCookie.value);

  //prevents empty fields
  if(!inputName || !inputMinCust || !inputMaxCust || !inputAvgCookie) {
    return alert('Please fill all fields!');
  }

  //prevents invalid min/max values
  if (inputMaxCust < inputMinCust) {
    return alert('Maximum cannot be less than minimum!');
  }

  //checks if already a store in table
  for(var i = 0; i < allStores.length; i++){
    if(inputName === allStores[i].name) {
      //reassign properties
      allStores[i].minCust = inputMinCust;
      allStores[i].maxCust = inputMaxCust;
      allStores[i].avgCookie = inputAvgCookie;

      //recalculate
      allStores[i].calcCustPerHour();
      allStores[i].calcCookiesPerHour();
      allStores[i].calcTossersPerHour();

      renderAll();
      event.target.reset();
      return;
    }
  }
  new CookieStand(inputName, inputMinCust, inputMaxCust, inputAvgCookie);
  renderAll();
  event.target.reset();
}

//event listener
submitButton.addEventListener('submit', formSubmit);