// use arrow functions

// getFirstName('mike smith') => 'mike'
// create regular arrow function
// create arrow function using shorthand syntax

const user = {
    name: 'abdul shabbir', 
    age: 26, 
    cities: ['toronto', 'manama', 'taichung'],
    printPlacesLived() {
        return cityMessages = this.cities.map(city => this.name + ' has lived in ' + city + '!'); 
    }
};

console.log(user.printPlacesLived()); 

const multiplier = {
    numbers: [1, 2, 4, 8, 16],
    multiplyBy: 2,
    multiply() {
        return multiplicationResult = this.numbers.map(number => number * this.multiplyBy)
    }
}; 

console.log(multiplier.multiply())
