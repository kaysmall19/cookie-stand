

function CookieStand(
  locationName,
  minCustomersPerHour,
  maxCustomersPerHour,
  avgCookiesPerSale
) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
}

CookieStand.prototype.getCookiesSoldPerHour = function () {
  for (let i = 0; i < biznessHours.length; i++) {
    this.customersEachHour.push(
      getRandomNumberOfCustomersGivenARange(
        this.minCustomersPerHour,
        this.maxCustomersPerHour
      )
    );
  }
};

CookieStand.prototype.calcCookiesEachHour = function () {
  this.getCookiesSoldPerHour();
  for (let i = 0; i < biznessHours.length; i++) {
    const oneHour = Math.ceil(
      this.customersEachHour[i] * this.avgCookiesPerSale
    );
    console.log(`Adding cookie hr ${oneHour}`);
    this.cookiesEachHour.push(oneHour);
    this.totalDailyCookies += oneHour;
  }
};

CookieStand.prototype.render = function () {
  this.getCookiesSoldPerHour();
  const unorderedList = document.getElementById(this.locationName); // find a DIV with the same name as the city
  for (let i = 0; i < biznessHours.length; i++) {
    const listItem = document.createElement("li");
    // 6am: 16 cookies
    console.log(`${this.cookiesEachHour.length}`);
    for (let index = 0; index < cookiesEachHour.length; index++) {
      console.log(`${cookiesEachHour[index]}`);
    }
    listItem.innerText =
      biznessHours[i] + ": " + this.cookiesEachHour[i] + " cookies";
    unorderedList.appendChild(listItem);
  }
  const listItem = document.createElement("li");
  listItem.textContent = "Total: " + this.totalDailyCookies + " cookies";
  unorderedList.appendChild(listItem);
};

// Let's load up an array with instances of cookie stands
let allCookieStands = [
  new CookieStand("seattle", 23, 65, 6.3),
  new CookieStand("tokyo", 3, 24, 1.2),
  new CookieStand("dubai", 11, 38, 3.7),
  new CookieStand("paris", 20, 38, 2.3),
  new CookieStand("lima", 2, 16, 4.6),
];

// Iterate through the array of stands and render each one
for (let index = 0; index < allCookieStands.length; index++) {
  allCookieStands[index].render();
}


const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Define object factory (class) new way  Constructor
function Person(fname,lname) {
    this.firstName = fname;
    this.lastName = lname;
    this.kids = hours;
}

/// Methods
Person.prototype.getFullName = function()
{
    // build and return a string of first and last name
    return (`${this.firstName} ${this.lastName}`);
}

Person.prototype.avgCookies = function(numCookies)
{
    // build and return a string of first and last name
    return (`Returning num cookies ${numCookies} x 10 = ${numCookies*10}`);
}


// new CookieStand('Pike Place Market', 23, 65, 6.3, 'pike');