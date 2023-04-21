//Task 1: Create Hamster Class
class Hamster {
  constructor(name) {
    (this.owner = ""), (this.name = name), (this.price = 15);
  }
  wheelRun() {
    console.log("squeak squeak");
  }
  eatFood() {
    console.log("nibble nibble");
  }
  getPrice() {
    return this.price;
  }
}

const hammy = new Hamster("Max");
console.log(hammy);
hammy.wheelRun();
hammy.eatFood();
hammy.getPrice();
console.log(hammy.getPrice());

//Task 2: Create Person Class
class Person {
  constructor(name) {
    (this.name = name),
      (this.age = 0),
      (this.height = 0),
      (this.weight = 0),
      (this.mood = 0),
      (this.hamsters = []),
      (this.bankAccount = 0);
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet() {
    console.log(`Hi there my name is ${this.name}`);
  }
  eat() {
    (this.weight += 5), (this.mood += 2);
  }
  exercise() {
    this.weight -= 4;
  }
  ageUp() {
    (this.age += 1),
      (this.height += 2),
      (this.weight += 3),
      (this.mood -= 1),
      (this.bankAccount += 10);
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    (this.mood += 10), (this.bankAccount -= hamster.getPrice());
  }
}

function ageMe(person, years) {
  for (let i = 0; i < years; i++) {
    person.ageUp();
  }
}

function eatCount(person,times){
    for(let i = 0; i < times;i++){
       person.eat();
    }
}

function exerciseTimes(person,times){
    for(let i = 0; i < times;i++){
        person.exercise();
    }
}
const person1 = new Person("Tom");
person1.age = 20;
person1.height = 55;
(person1.weight = 100), (person1.mood = 2), console.log(person1);

//Task 3: Create a Story with Person Class
const timmy = new Person("Timmy");
console.log(timmy)
ageMe(timmy, 5);
console.log(timmy)
eatCount(timmy,5)
console.log(timmy)

exerciseTimes(timmy,5)
console.log(timmy)

ageMe(timmy,9)
console.log(timmy)

const gus = new Hamster("Gus")
gus.owner = "Timmy"
console.log(gus)

timmy.buyHamster(gus)
console.log(timmy)

ageMe(timmy,15)
console.log(timmy)

eatCount(timmy, 2)
exerciseTimes(timmy,2)
console.log(timmy)

//Task 4: Create Chef Factory and Dinner Class
class Dinner{
   constructor(appetizer,entree,dessert){
    this.appetizer =appetizer,
    this.entree = entree
    this.dessert =  dessert
   }
}

class Chef{
   makeDinner(appetizer,entree,dessert){
    return new Dinner(appetizer,entree,dessert)
   }
}

const chef1 = new Chef();
const chef2 = new Chef();
const chef3 = new Chef();

const dinner1 = chef1.makeDinner('wings','pasta','chocolate fudge')
const dinner2 = chef1.makeDinner('fried calamari','smoked salmon with a side of rice','cheesecake')
const dinner3 = chef3.makeDinner('nachos','steak with a side of broccoli and smashed potatoes','ice cream cake')

console.log(dinner1)
console.log(dinner2)
console.log(dinner3)



