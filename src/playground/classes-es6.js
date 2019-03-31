console.log("classes.js folder loaded");

class Person {
  constructor(name, age, location = "london") {
    this.name = name;
    this.age = age;
    this.location = location;
  }
  getGreeting() {
    return `My name is ${this.name}`;
  }
  getName() {
    console.log(this.name);
  }

  getDescription() {
    return `My name is ${this.name} and I am ${
      this.age
    } years old and I am from ${this.location}`;
  }
}

class Student extends Person {
  constructor(name, age, location, major = "") {
    super(name, age, location);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor() === true) {
      description = `My name is ${this.name} and I am ${
        this.age
      } years old and I am a student from ${this.location}`;
    }
    return description;
  }
}

class Traveller extends Person {
  constructor(name, homeLocation) {
    super(name);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting = `My name is ${this.name} and I am visiting from ${
        this.homeLocation
      }`;
    }
    return greeting;
  }
}

const carman = new Traveller("Carman Trinh", "Manchester");
console.log(carman.getGreeting());
const zaya = new Student("Zaya Jones", 25, "Sacramento", "biology");

const me = new Person("Stefan Trinh", 27);
console.log(me.getDescription());
console.log(zaya.getDescription());
console.log(zaya.hasMajor());
