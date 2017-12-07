/*
Definition:
  Closure is the combination of a function and the lexical environment within
  which that function was declared.

“A closure is a special kind of object that combines two things: a function,
 and the environment in which that function was created. The environment
 consists of any local variables that were in-scope at the time that
 the closure was created.”
*/

function simpleCounter(){
  let count = 0;

  function increment(){
    return count++;
  }

  return increment;
}

let countThis = simpleCounter();
console.log(countThis());
console.log(countThis());
console.log(countThis());


/*
MODULE PATTERN using closures
JavaScript does not provide a native way of doing this, but it is possible to
emulate private methods using closures. Private methods aren't just useful for
restricting access to code: they also provide a powerful way of managing your
global namespace, keeping non-essential methods from cluttering up the public
interface to your code.

The following code illustrates how to use closures to define public functions
that can access private functions and variables. Using closures in this way is
known as the module pattern:
*/

var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1



/*
Prior to the introduction of the let keyword in ECMAScript 2015, a common
problem with closures occurred when they were created inside a loop. 
*/
for (var x = 0; x < 5; ++x) {
  setTimeout(function () {
    console.log(x); // output 5,5,5,5,5
  }, 100);
}

for (var x = 0; x < 5; ++x) {
  (function(index){
    setTimeout(function () {
      console.log(index); // output 0,1,2,3,4
    }, 100);
  })(x);
}
