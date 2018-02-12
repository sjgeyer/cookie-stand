//use strict declaration
'use strict';

var hours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];

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
  }
};

firstAndPike.calcCustPerHour();
firstAndPike.calcCookiesPerHour();
console.log(firstAndPike);