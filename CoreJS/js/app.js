const people = ['Saeid', 'Mohaddeseh', 'Sepanta', 'Shakila', 'Tamay'];


for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
};


for (const person of people) {
    console.log(person);
}


people.forEach(function(person) {
    console.log(person);
});


while (people.length > 0) {
    console.log(people.pop());
}
console.log(people);