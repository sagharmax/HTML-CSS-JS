const firstName = 'Saeid';
const middleName = 'SagharMax';
const lastName = 'Ghasemi';
// if (firstName.toLowerCase() === 'saeid') {
if (firstName === 'Saeid' && lastName == 'Ghasemi') {
    console.log('Hello programmer');
} else if (firstName === 'Saeid') {
    console.log('Hello other Saeid');
} else if (lastName === "Ghasemi") {
    console.log('Cool last name');
} else {
    console.log('Hello anyway');
}

if ((firstName === "Saeid" || lastName === "Ghasemi") && middleName === "SagharMax") {
    console.log('That\'s pretty cool name');
}

const x = '1';
const y = 1;
if (x === y) { // === is type and value comparison
    console.log('The two values are equal');
}

const day = 'Tuesday';
switch (day) {
    case 'Monday':
        console.log('Welcome to the first of the week.');
        break;
    case 'Tuesday':
        console.log('I hope your week is going well.');
        break;
    default:
        console.log('I do not know what day of the week that is.');
        break;
}