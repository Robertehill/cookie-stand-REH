var listOfStands = [];//list array to check if a store can be replaced
var CookieStand = function(standLoc, minCust, maxCust, avgCookiePerCust) {
  this.standLoc = standLoc;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerCust = avgCookiePerCust;
  this.hour = [];
  this.cookieTotal = 0;
  listOfStands.push(this.standLoc.toLowerCase());

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
    // Store cookieTotal to be passed to html table
    this.cookieTotal = dailyCookies;
    return dailyCookies;
  };
  //called here so it adds values to the hour array and saves the total when an intance of the object is created
  this.totalCookiePerDay();
  function makeTable(loc, array, total) {
    //Make new table row with the name of the store
    var table = document.getElementById('sales');
    var row = document.createElement('tr');
    row.appendChild(document.createTextNode(loc));
    table.appendChild(row);
    row.id = loc.toLowerCase();

    //add random hourly numbers to table
    for(var i = 0; i < array.length; i++) {
        var data = document.createElement('td');
        data.appendChild(document.createTextNode(array[i]));
        row.appendChild(data);
      };
    // Add total cookies to table
    var totalData = document.createElement('td');
    totalData.appendChild(document.createTextNode(total));
    row.appendChild(totalData);

  }
  //call makeTable here to pass values to the html table when an instance of the object is created
  makeTable(this.standLoc, this.hour, this.cookieTotal);
 //even rows get shaded
  var table = document.getElementById("sales");
  var rows = table.getElementsByTagName("tr");
  for(i = 0; i < rows.length; i++){
      if(i % 2 == 0){
          rows[i].className = "even";
      }
      else{
        rows[i].className = "odd";
      }

  };

}
//hard wired stores
var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2 );
var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2 );
var southcenter = new CookieStand('Southcenter Mall', 11, 38, 1.9);
var bellSq = new CookieStand('Bellevue Square', 20, 48, 3.3);
var alki = new CookieStand('Alki Beach', 3, 24, 2.6);

// Start form/button area
var storeSubmit = function(e) {
  e.preventDefault();
  var storeLoc = document.getElementById('storeLoc');
  var minCust = document.getElementById('minCust');
  var maxCust = document.getElementById('maxCust');
  var avgCookies = document.getElementById('avgCookies');
  // check to see if all inputs have data
  if (!storeLoc.value || !minCust.value || !maxCust.value || !avgCookies.value ) {
      return alert('Please enter a value in each box');
  }
  //check that all inputs that should be numbers are really numbers
  else if (isNaN(minCust.value) || isNaN(maxCust.value) || isNaN(avgCookies.value)) {
      return alert('Please enter numbers in the boxes for Min/Max Customers and Average cookie per Customer');
  }
  //check the make sure min is smaller than max
  else if(minCust.value > maxCust.value){
      return alert('Please make sure the Minimum Customers is a smaller number than Maximum Customers');
  }
  //start of replace check
  for (var i = 0; i < listOfStands.length; i++) {
      if(listOfStands[i] != null){
        if(listOfStands[i].toLowerCase() === storeLoc.value.toLowerCase()){
          var replace = confirm('This stand location already exists would you like to replace it?');
          if (replace){
            var parent = document.getElementById('sales');
            var child = document.getElementById(storeLoc.value.toLowerCase());
            parent.removeChild(child);
            // console.log(storeLoc.value.toLowerCase() +' "replace" if statement');
            // remove value from list arrary
            listOfStands.splice( i, 1 );
            var newstore = new CookieStand(storeLoc.value, minCust.value, maxCust.value, avgCookies.value);
            storeLoc.value = null;
            minCust.value = null;
            maxCust.value = null;
            avgCookies.value = null;
            // return to stop "for" loop
            return;
          }
          else{
            //create newstore here if the user choose not to replace store
            var newstore = new CookieStand(storeLoc.value, minCust.value, maxCust.value, avgCookies.value);
            listOfStands.push(newstore.standLoc.toLowerCase());
            storeLoc.value = null;
            minCust.value = null;
            maxCust.value = null;
            avgCookies.value = null;
            // return to stop "for" loop
            return;
          }

        }
      }
  };
  //end of replace section
  var newstore = new CookieStand(storeLoc.value, minCust.value, maxCust.value, avgCookies.value);
  //here for debugging
  // console.log('new store location = ' + storeLoc.value);
  // console.log('min customers for ' + storeLoc.value +' = ' + minCust.value);
  // console.log('max customers for ' + storeLoc.value +' = ' +maxCust.value);
  // console.log('avg cookie per customer for ' + storeLoc.value +' = ' +avgCookies.value);
  //end debug
  //clear all input boxes here to prevent duplicate stores on table
  storeLoc.value = null;
  minCust.value = null;
  maxCust.value = null;
  avgCookies.value = null;

};
//Start of remove section
var removeStore = function(e) {
  e.preventDefault();
  var remove = document.getElementById('removeInput');

  for (var i = 0; i < listOfStands.length; i++) {
    if(listOfStands[i] != null){
      if(listOfStands[i].toLowerCase() === remove.value.toLowerCase()){
        console.log('Have target to remove');
        var parent = document.getElementById('sales');
        var child = document.getElementById(remove.value.toLowerCase());
        parent.removeChild(child);
        listOfStands.splice( i, 1 );
        remove.value = null;
        return;

      }

    }
  }
}
//end remove section
//buttons
var addButton = document.getElementById('addButton');
addButton.addEventListener('click', storeSubmit);
var removeButton = document.getElementById('removeButton');
removeButton.addEventListener('click', removeStore);
//end form/button area













