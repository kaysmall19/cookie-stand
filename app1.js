let Seattle = {
    minCustomers: 23, 
    maxCustomers: 65,
    avgCookieSale: 6.3,
    customersPerHour: [],
    cookiesSoldPerHour: [],
    totalDailyCookies : 0,
    getCustomersPerHour: function () {
        for (let index = 0; index < biznessHours.length; index++) {
            this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers));           
        }
        console.log(`The min value is ${this.minCustomers} the max value is ${this.maxCustomers}`);
    },
    getCookiesSoldPerHour: function () {
        totalDailyCookies = 0;
        this.getCustomersPerHour();
        for (let index = 0; index < this.customersPerHour.length; index++) {
            let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);
            this.cookiesSoldPerHour.push(dailyCookies);
            this.totalDailyCookies+=dailyCookies;
        }
        console.log(`Here's what we got: ${this.cookiesSoldPerHour}`);
    },
    render() {
        this.getCookiesSoldPerHour();
        const unorderedList = document.getElementById('seattle');
        for (let i = 0; i < biznessHours.length; i++) {
            const listItem = document.createElement('li');
            // 6am: 16 cookies
            listItem.textContent = biznessHours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
            unorderedList.appendChild(listItem);
        }
        const listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem);
    }


}
someLocation.render();
Seattle.render();

let Tokyo = {
    minCustomers: 3,
    maxCustomers: 24,
    avgCookieSale: 1.2,
    customersPerHour: [],
    cookiesSoldPerHour: [],
    totalDailyCookies: 0,
    getCustomersPerHour: function () {
        for (let index = 0; index < biznessHours.length; index++) {
            this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers));
        }
        console.log(`The min value is ${this.minCustomers} the max value is ${this.maxCustomers}`);
    },
    getCookiesSoldPerHour: function () {
        totalDailyCookies = 0;
        this.getCustomersPerHour();
        for (let index = 0; index < this.customersPerHour.length; index++) {
            let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale)
            this.cookiesSoldPerHour.push(dailyCookies);
            this.totalDailyCookies+=dailyCookies;
        }
        console.log(`Here's what we got: ${this.cookiesSoldPerHour}`);
    },
    render() {
        this.getCookiesSoldPerHour();
        const unorderedList = document.getElementById('tokyo');
        for (let i = 0; i < biznessHours.length; i++) {
            const listItem = document.createElement('li');
            // 6am: 16 cookies
            listItem.textContent = biznessHours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
            unorderedList.appendChild(listItem);
        }
        const listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem);
    }
}
someLocation.render();
Tokyo.render();

let Dubai = {
    minCustomers: 11,
    maxCustomers: 38,
    avgCookieSale: 3.7,
    customersPerHour: [],
    cookiesSoldPerHour: [],
    totalDailyCookies: 0,
    getCustomersPerHour: function () {
        for (let index = 0; index < biznessHours.length; index++) {
            this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers));
        }
        console.log(`The min value is ${this.minCustomers} the max value is ${this.maxCustomers}`);
    },
    getCookiesSoldPerHour: function () {
        totalDailyCookies = 0;
        this.getCustomersPerHour();
        for (let index = 0; index < this.customersPerHour.length; index++) {
            let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale)
            this.cookiesSoldPerHour.push(dailyCookies);
            this.totalDailyCookies+=dailyCookies;
        }
        console.log(`Here's what we got: ${this.cookiesSoldPerHour}`);
    },
    render() {
        this.getCookiesSoldPerHour();
        const unorderedList = document.getElementById('dubai');
        for (let i = 0; i < biznessHours.length; i++) {
            const listItem = document.createElement('li');
            // 6am: 16 cookies
            listItem.textContent = biznessHours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
            unorderedList.appendChild(listItem);
        }
        const listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem);
    }
}
someLocation.render();
Dubai.render();

let Paris = {
    minCustomers: 20,
    maxCustomers: 38,
    avgCookieSale: 2.3,
    customersPerHour: [],
    cookiesSoldPerHour: [],
    totalDailyCookies: 0,
    getCustomersPerHour: function () {
        for (let index = 0; index < biznessHours.length; index++) {
            this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers));
        }
        console.log(`The min value is ${this.minCustomers} the max value is ${this.maxCustomers}`);
    },
    getCookiesSoldPerHour: function () {
        totalDailyCookies = 0;
        this.getCustomersPerHour();
        for (let index = 0; index < this.customersPerHour.length; index++) {
            let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale)
            this.cookiesSoldPerHour.push(dailyCookies);
            this.totalDailyCookies+=dailyCookies;
        }
        console.log(`Here's what we got: ${this.cookiesSoldPerHour}`);
    },
    render() {
        this.getCookiesSoldPerHour();
        const unorderedList = document.getElementById('paris');
        for (let i = 0; i < biznessHours.length; i++) {
            const listItem = document.createElement('li');
            // 6am: 16 cookies
            listItem.textContent = biznessHours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
            unorderedList.appendChild(listItem);
        }
        const listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem);
    }
}
someLocation.render();
Paris.render();

let Lima = {
    minCustomers: 2,
    maxCustomers: 16,
    avgCookieSale: 4.6,
    customersPerHour: [],
    cookiesSoldPerHour: [],
    totalDailyCookies: 0,
    getCustomersPerHour: function () {
        for (let index = 0; index < biznessHours.length; index++) {
            this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers));
        }
        console.log(`The min value is ${this.minCustomers} the max value is ${this.maxCustomers}`);
    },
    getCookiesSoldPerHour: function () {
        totalDailyCookies = 0;
        this.getCustomersPerHour();
        for (let index = 0; index < this.customersPerHour.length; index++) {
            let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale)
            this.cookiesSoldPerHour.push(dailyCookies);
            this.totalDailyCookies+=dailyCookies;
        }
        console.log(`Here's what we got: ${this.cookiesSoldPerHour}`);
    },
    render() {
        this.getCookiesSoldPerHour();
        const unorderedList = document.getElementById('lima');
        for (let i = 0; i < biznessHours.length; i++) {
            const listItem = document.createElement('li');
            // 6am: 16 cookies
            listItem.textContent = biznessHours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
            unorderedList.appendChild(listItem);
        }
        const listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem);
    }
}
someLocation.render();
Lima.render();