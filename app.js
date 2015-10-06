var CookieStand = function(standLoc, minCust, maxCust, avgCookiePerCust) {
  this.standLoc = standLoc;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerCust = avgCookiePerCust;
  this.hour = [];

  this.randCustPerHour = function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  };
  this.totalCookiePerHour = function(){
    var total = 0;
    total = Math.floor (this.randCustPerHour() * this.avgCookiePerCust);
    this.hour.push(total);
    return total;
  };
  this.totalCookiePerDay = function() {
    var dailyCookies = 0;
    for (var i = 0; i < 8; i++) {
      dailyCookies += this.totalCookiePerHour();
      console.log('Cookie count ' + dailyCookies);
    };
    return dailyCookies;
  };
}
var pikePlace = new CookieStand('Pike Place Markert', 17, 88, 5.2 );
var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2 );
var southcenter = new CookieStand('Southcenter Mall', 11, 38, 1.9);
var bellSq = new CookieStand('Bellevue', 20, 48, 3.3);
var alki = new CookieStand('Alki Beach', 3, 24, 2.6);

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

makeUL(pikePlace.hour, 'pike');
makeUL(seaTac.hour, 'seaTac');
makeUL(southcenter.hour, 'southcenter');
makeUL(bellSq.hour, 'bellSq');
makeUL(alki.hour, 'alki');







