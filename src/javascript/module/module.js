/*
  The module pattern in JS can be achieved by using closure and executing a IIFE
  Immediately Invoked Function Expression.
  The idea behind is to encapsulate code and be able to access to functionality in
  and isolated and predictable manner.

  Frist example:
    In this example we create a counter module that allows for increment, decrement, reset.
    and it can be assign into a variable. Just to get to the point.

  Second example:
    Then the same functionality get self invoked and assigned to a variable more
    sort of a singleton.
*/


// ######### Frist example ###########
const counter = function() {

  // This portion is the closure scope

  let count = 0;

  function changeBy (amount){
    count += amount;
  }

  let obj = {
    increment(amount){
      console.log(this);
      changeBy(1);
      return count;
    },
    decrement(amount){
      changeBy(-1);
      return count;
    },
    reset(){
      count = 0;
      return;
    }
  };

  return obj;
};

let counter1 = counter();
let counter2 = counter();

counter1.increment();
counter1.increment();
counter2.increment();
let c = counter1.increment();
let e = counter1.decrement();
counter2.reset();
let d = counter1.decrement();
counter2.increment();
counter1.reset();
let f = counter2.increment();
let g = counter2.decrement();
let h = counter2.decrement();


console.log("------");
console.log(c);
console.log(d);
console.log(e);


console.log("------");
console.log(g);
console.log(f);
console.log(h);



// ######### Second example ###########



const counterSingletonStyle = (()=>{

  let count = 0;

  function changeBy(amount){
    count += amount;
  }

  return {
    increment(){
      changeBy(1);
      return count;
    },
    decrement(){
      changeBy(-1);
      return count;
    },
    reset(){
      return count;
    }
  };
})();

console.log('-------------');
console.log(counterSingletonStyle.increment());
console.log(counterSingletonStyle.increment());
console.log(counterSingletonStyle.increment());
console.log(counterSingletonStyle.decrement());
console.log(counterSingletonStyle.decrement());
console.log(counterSingletonStyle.decrement());
console.log(counterSingletonStyle.decrement());



const counterSingletonExplicit = (()=>{

  let count = 0;

  function changeBy(amount){
    count += amount;
  }

  function increment (){
    changeBy(1);
    return count;
  }

  function decrement (){
    changeBy(-1);
    return count;
  }

  function reset (){
    return count;
  }
                                                                     
  return {
    increment: increment,
    decrement: decrement,
    reset: reset
  };
})();

console.log('-------------');
console.log(counterSingletonExplicit.increment());
console.log(counterSingletonExplicit.increment());
console.log(counterSingletonExplicit.increment());
console.log(counterSingletonExplicit.decrement());
console.log(counterSingletonExplicit.decrement());
console.log(counterSingletonExplicit.decrement());
console.log(counterSingletonExplicit.decrement());
