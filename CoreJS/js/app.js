// IIFE : Immediately Invoking Function Expression
const myName = 'Saeid Ghasemi'

function greetUser() {
    console.log('Welcome to our app');
}

(function(app, fullName) {
    fullName = fullName; // property on anonymous function
    app.greetUser = function() {
        console.log(`Hello ${fullName}`);
    }
    app.Person = class {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
})(window.app = window.app || {}, myName);
console.log(window.app);
greetUser()
app.greetUser();
const p = new app.Person('Saeid', 'Ghasemi');
const q = new app.Person('Mohaddeseh', 'AmiriNezhad');
console.log(q.lastName);


(function(app) {
    app.sayGoodbye = function() {
        console.log('Goodbye my favorite user');
    }
})(window.app = window.app || {})
app.sayGoodbye();


(function(app) {
    app.greetUser = function() {
        console.log('Welcome to our other app');
    }
})(window.otherApp = window.otherApp || {})
otherApp.greetUser();