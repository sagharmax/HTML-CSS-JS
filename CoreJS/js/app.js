const people = ['Saeid', 'Mohaddeseh', 'Sepanta', 'Shakila'];
people.push('Tamay');
const lastPerson = people.pop()
console.log(people);
console.log(people.indexOf('Shakila'));
console.log(people.indexOf('Tamay'));
console.log(Array.isArray(people));
console.log(Array.isArray(lastPerson));
console.log(lastPerson.startsWith('Ta'));
people.push('Bahman');
people.push('Ferina');
people.push('Naeimeh');
const coolPeople = people.filter(function(person) {
    return person.startsWith('S') === true;
})
console.log(coolPeople);
console.log(people);
console.log(lastPerson.substring(0, 3));
const firstLetters = people.map(function(person) {
    return person.substring(0, 1);
});
console.log(firstLetters);