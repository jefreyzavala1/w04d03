class Hamster{
    constructor(name){
        this.owner = '',
        this.name = name,
        this.price = 15
    }
    wheelRun(){
        console.log("squeak squeak")
    }
    eatFood(){
        console.log("nibble nibble")
    }
    getPrice(){
        return this.price
    }
}

class Person{
    constructor(name){
        this.name = name,
        this.age = 0,
        this.height = 0,
        this.weight = 0,
        this.mood = 0,
        this.hamsters = [],
        this.bankAccount = 0
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
    getWeight(){
        return this.weight
    }
    greet(){
        console.log(`Hi there my name is ${this.name}`)
    }
    eat(){
        this.weight+=5,
        this.mood+=2
    }
    exercise(){
        this.weight-=4
    }
    ageUp(){
        this.age+=1,
        this.height+=2,
        this.weight+=3,
        this.mood-=1,
        this.bankAccount+=10
    }
    buyHamster(hamster){
        this.hamsters.push(hamster);
        this.mood+=10,
        this.bankAccount-=hamster.getPrice()
    }
}

