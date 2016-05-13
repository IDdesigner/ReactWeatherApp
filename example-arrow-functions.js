var names = ['Andy', 'Tina', 'Erich', 'Erica', 'Daniel'];
//
// names.forEach(function(name) {
//   console.log('forEach', name);
// });
//
// // Arrow function
// names.forEach((name) => {
//   console.log('arrow func', name);
// });
//
// names.forEach((name) => console.log('shorter arrow func', name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Rye'));

// This won't work because of the 'this' error thingy so convert to arrow function!
// var person = {
//   name: 'Rye',
//   greet: function() {
//     names.forEach(function(name) {
//       console.log(this.name + " says hi to " + name);
//     });
//   }
// };

// Arrow function version
var person = {
  name: 'Rye',
  greet: function() {
    names.forEach((name) => {
      console.log(this.name + " says hi to " + name);
    });
  }
};

person.greet();

// challenge
function add(a,b) {
  return a + b;
}

// addStatement
var addStatement = (a,b) => {
  return a + b;
};
console.log(addStatement(4,7));

// addExpression
var addExpression = (a,b) => a + b;
console.log(addExpression(2,3));
