const person = {
    firstName: 'Saeid',
    lastName: 'Ghasemi',
    age: 39,
    isAlive: true,
    address: {
        city: 'Urmia',
        country: 'Iran'
    },
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.isAlive);
console.log(person.address.city);
console.log(person.address.country);
person.address.country = 'Turkey';
console.log(person.address.country);
console.log(person.fullName());


function greetUser(p) {
    console.log(`Hello ${p.fullName()}`);
}
greetUser(person)


// Deconstructor
const { firstName:fn, age, address: {city} } = person;
// const fn = person.firstName;
// const age = person.age;
// const city = person.address.city;
// console.log(firstName);
console.log(age);
console.log(city);
console.log(fn);


for (const prop in person) {
    console.log(prop);
    console.log(`${prop}: ${person[prop]}`);
    if (person.hasOwnProperty(prop)) {
        console.log(`${prop}: ${person[prop]}`);
    }
}
delete person.fullName;
// console.log(person.fullName());
// console.log(JSON.stringify(person));
const recivedInfo = JSON.stringify(person);
const parsedInfo = JSON.parse(recivedInfo);
console.log(parsedInfo.firstName);