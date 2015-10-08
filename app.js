var CookieStand = function(standLoc, minCust, maxCust, avgCookiePerCust) {
  this.standLoc = standLoc;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerCust = avgCookiePerCust;
  this.hour = [];
  this.cookieTotal = 0;

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
      // console.log('Cookie count ' + dailyCookies);
    };
    // Store cookieTotal to be passed to table
    this.cookieTotal = dailyCookies;
    return dailyCookies;
  };
  this.totalCookiePerDay();
  function makeTable(loc, array, total) {
    var place = document.getElementById('sales');
    var row = document.createElement('tr');
    row.appendChild(document.createTextNode(loc));
    place.appendChild(row);

    for(var i = 0; i < array.length; i++) {
        var hour = row;
        var data = document.createElement('td');
        data.appendChild(document.createTextNode(array[i]));
        hour.appendChild(data);
    };
    //attemping to target every other row...not working
    // for (var i = 0; i < row.rowIndex.length; i++) {
    //   if(row.rowIndex[i] % 2 === 0){
    //     row.className = 'even';
    //   }

    // };
    var totalData = document.createElement('td');
    totalData.appendChild(document.createTextNode(total));
    hour.appendChild(totalData);

  }
  makeTable(this.standLoc, this.hour, this.cookieTotal)
}
var pikePlace = new CookieStand('Pike Place Markert', 17, 88, 5.2 );
var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2 );
var southcenter = new CookieStand('Southcenter Mall', 11, 38, 1.9);
var bellSq = new CookieStand('Bellevue Square', 20, 48, 3.3);
var alki = new CookieStand('Alki Beach', 3, 24, 2.6);










