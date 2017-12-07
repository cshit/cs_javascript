
/*
  Block scoped:
    Can redifine.
    A variable defined using a let statement is only known in the block it
    is defined in, from the moment it is defined onward.
*/


function letTest() {
  // console.log(x) not hoisted... ReferenceError: x is not defined

  let x = 1;

  // var and let in funcs the same
  function upperInnerLog(){
    console.log('upperInnerLog', x);
    //let x = 2;  // SyntaxError: Identifier 'me' has already been declared
  }

  // var and let in blocks deffer..
  if (true) {
    let x = 2;  // different variable
    console.log('inside if', x);  // 2
  }

  function lowerInnerLog(){
    console.log('lowerInnerLog', x);
  }

  // var in the loop do re-binds it to each iteration of the loop.
  for (let x = 0; x < 5; ++x) {
    setTimeout(function () {
      console.log(x); // output 0, 1, 2, 3, 4
    }, 100);
  }

  upperInnerLog();
  lowerInnerLog();
  console.log('letTest', x);  // 1
}


letTest();
