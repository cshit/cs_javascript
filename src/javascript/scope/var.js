/*
  Lexical scoping:
    The set of variables visible inside a function is determined by the place of
    that function in the program text. All variables from blocks around a
    function’s definition are visible—meaning both those in function bodies
    that enclose it and those at the top level of the program.
*/

var title = 'This is the result of landscape!';
var mountainTitle = 'Executing Mountain';
var lakeTitle = 'Executing Lake';

function landscape(){
  console.log(result); // Hoiting result

  var result = 0;

  function mountain(max){
    console.log(mountainTitle);
    var counter = 0;

    while(counter < max){ result += 1; counter++;}
  }

  function lake(max){
    console.log(lakeTitle);
    var counter = 0;

    while(counter < max){ result += 1; counter++;}
  }

  // var in the loop dont re-binds it to each iteration of the loop.
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

  console.log(title);
  mountain(3);
  lake(5);
  mountain(3);
  lake(5);
  mountain(3);

  console.log(result);
}

landscape();
