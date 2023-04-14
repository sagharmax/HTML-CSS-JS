function add(x = 2, y = 6) {
    return x + y;
}
let result = add(2, 3);
console.log(result);
result = add(4, 5);
console.log(result);
console.log(add(2, 3));
const moreResult = add(3, 8) + add (2, 11);
console.log(moreResult);
console.log(add(5));


function greetUser() {
    console.log('Hello User');
    console.log('Welcome to our website.');
    console.log('We hope you enjoy it.');
    console.log(`The value of 5 + 3 = ${add(5, 3)}`);
}
greetUser()


/*
const subtract = (x, y) => {
    return x - y;
}
*/
const subtract = (x, y) => x - y;
console.log(subtract(9, 3));
const people = ['Saeid', 'Mohaddeseh', 'Sepanta'];
//const filtered = people.filter(p => p.substring(0, 1) === 'S');
const filtered = people.filter(function(p) {
    return p.substring(0, 1) === 'S';
})
console.log(filtered);