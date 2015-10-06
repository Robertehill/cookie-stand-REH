var pikeHours = [];
var seaTacHours = [];
var southcenterHours = [];
var bellSqHours = [];
var alkiHours = [];

var pikePlace = {
  location: 'Pike Place Market',
  minCust: 17,
  maxCust: 88,
  avgCookiePerCust: 5.2,

  randCustPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  totalCookiePerHour: function(){
    var total = 0;
    total = Math.floor (this.randCustPerHour() * this.avgCookiePerCust);
    pikeHours.push(total);
    return total;
  },
  totalCookiePerDay: function() {
    var dailyCookies = 0;
    for (var i = 0; i < 8; i++) {
      dailyCookies = dailyCookies + this.totalCookiePerHour();
      console.log(dailyCookies);
    };
    return dailyCookies;
  }
}

var seaTac = {
  location: 'Seatac Airport',
  minCust: 6,
  maxCust: 44,
  avgCookiePerCust: 1.2,

  randCustPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  totalCookiePerHour: function(){
    var total = 0;
    total = Math.floor (this.randCustPerHour() * this.avgCookiePerCust);
    seaTacHours.push(total);
    return total;
  },
  totalCookiePerDay: function() {
    var dailyCookies = 0;
    for (var i = 0; i < 8; i++) {
      dailyCookies = dailyCookies + this.totalCookiePerHour();
      console.log(dailyCookies);
    };
    return dailyCookies;
  }
}
var southcenter = {
  location: 'Southcenter Mall',
  minCust: 11,
  maxCust: 38,
  avgCookiePerCust: 1.9,

  randCustPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  totalCookiePerHour: function(){
    var total = 0;
    total = Math.floor (this.randCustPerHour() * this.avgCookiePerCust);
    southcenterHours.push(total);
    return total;
  },
  totalCookiePerDay: function() {
    var dailyCookies = 0;
    for (var i = 0; i < 8; i++) {
      dailyCookies = dailyCookies + this.totalCookiePerHour();
      console.log(dailyCookies);
    };
    return dailyCookies;
  }
}
var bellSq = {
  location: 'Bellevue Square',
  minCust: 20,
  maxCust: 48,
  avgCookiePerCust: 3.3,

  randCustPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  totalCookiePerHour: function(){
    var total = 0;
    total = Math.floor (this.randCustPerHour() * this.avgCookiePerCust);
    bellSqHours.push(total);
    return total;
  },
  totalCookiePerDay: function() {
    var dailyCookies = 0;
    for (var i = 0; i < 8; i++) {
      dailyCookies = dailyCookies + this.totalCookiePerHour();
      console.log(dailyCookies);
    };
    return dailyCookies;
  }
}
var alki = {
  location: 'Alki',
  minCust: 3,
  maxCust: 24,
  avgCookiePerCust: 2.6,

  randCustPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  totalCookiePerHour: function(){
    var total = 0;
    total = Math.floor (this.randCustPerHour() * this.avgCookiePerCust);
    alkiHours.push(total);
    return total;
  },
  totalCookiePerDay: function() {
    var dailyCookies = 0;
    for (var i = 0; i < 8; i++) {
      dailyCookies = dailyCookies + this.totalCookiePerHour();
      console.log(dailyCookies);
    };
    return dailyCookies;
  }
}
function makeUL(array, locID) {
    for(var i = 0; i < array.length; i++) {
        var dayList = document.getElementById(locID);
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(array[i]));
        dayList.appendChild(item);

    };
    return dayList;
}
var pikeTotal = document.getElementById('pikeTotal');
pikeTotal.innerHTML = Math.floor(pikePlace.totalCookiePerDay());

var seaTacTotal = document.getElementById('seaTacTotal');
seaTacTotal.innerHTML = Math.floor(seaTac.totalCookiePerDay());

var southcenterTotal = document.getElementById('southcenterTotal');
southcenterTotal.innerHTML = Math.floor(southcenter.totalCookiePerDay());

var bellSqTotal = document.getElementById('bellSqTotal');
bellSqTotal.innerHTML = Math.floor(bellSq.totalCookiePerDay());

var alkiTotal = document.getElementById('alkiTotal');
alkiTotal.innerHTML = Math.floor(alki.totalCookiePerDay());

makeUL(pikeHours, 'pike');
makeUL(seaTacHours, 'seaTac');
makeUL(southcenterHours, 'southcenter');
makeUL(bellSqHours, 'bellSq');
makeUL(alkiHours, 'alki');







