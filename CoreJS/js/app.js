// class = blueprint, class instance = house
class Person {
    #socialSecurityNumber = '';

    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get ssn() {
        return `***-**-${this.#socialSecurityNumber.substring(this.#socialSecurityNumber.length - 4)}`;
    }
    set ssn(social) {
        this.#socialSecurityNumber = social;
    }
    // getFullName = () => `${this.firstName} ${this.lastName}`;
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const person1 = new Person('Saeid', 'Ghasemi');
console.log(person1.firstName);
console.log(person1.lastName);
const person2 = new Person('Mohaddeseh', 'AmiriNezhad');
console.log(person2.firstName);
console.log(person2.lastName);


person1.ssn = '123-45-6789';
console.log(person1.ssn);
console.log(person1.getFullName());