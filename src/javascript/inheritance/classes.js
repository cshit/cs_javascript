/*
  Lets assume 2 hirarchical lines animals and minerlas
  Lets create 2 clases and inherit and then samething but with
  functions
*/


// animals -> dog
// animals -> human

class Animal {
  constructor(){
    this.heart = 1;
    this.brain = 1;
  }

  eat(food){
    return food;
  }
}

class Dog extends Animal {
  constructor(){
    super();
    this.tail = 1;
  }

  eat(food){
    // let animalFood = this.__proto__.eat('Animal food');
    // let animalFood = 'can use super form instance method...';
    return `${animalFood} and I love dog food. Like ${food}!!`;
  }
}

dog = new Dog();
console.log(dog.eat('Hot Dog'));


// The constructor function way:

var Vehicle = function (){

  this.wheels = 4;
  this.runs = function(){
    return 10;
  };
};

var Bicicle = function (){

  this.saddle = 1;

  this.rides = function (){
    return 5;
  };
};

Bicicle.prototype = new Vehicle();

let b = new Bicicle();
console.log(b.wheels);
console.log(b.rides());
console.log(b.runs());
