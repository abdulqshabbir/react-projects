// set-up constructor to take name and age (default to 0)
// getDescription - Andrew Mead is 26 year(s) old

class Person {
    constructor(name, age = 0) {
        this.name = name;
        this.age = age;
    }
    getDescription() {
        console.log(`${this.name} is ${this.age} years old`)
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age); 
        this.major = major;
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description = description + `and my major is ${this.major}`
        }
        return description
    }
}


// Traveller -> Person
// Add support for homeLocation
// Override getGreedting
// 1. Hi. I am Andrew Mead. I'm visiting from Phili
// 2. Hi. I am Andrew Mead.

class Traveller extends Person {
    constructor(name, age, location){
        super(name, age)
        this.location = location
    }
    getDescription() {
        let description = super.getDescription()
        
        if(!!this.location) {
            description = description + `I'm visiting from ${this.location}`;
        }
        console.log(description)
    }
}

let newTraveller = new Traveller('Abdul', 26, 'Taichung')

newTraveller.getDescription()