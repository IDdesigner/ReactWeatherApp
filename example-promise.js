// function getTempCallBack(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallBack('Philidelphia', function(err, temp) {
//   if(err) {
//     console.log('Error!', err)
//   } else {
//     console.log('Success!!', temp)
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject("City not found!")
//     }, 1000);
//   });
// }
//
// getTempPromise('Philidelphia').then(function(temp) {
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('promise error', err);
// });

function addPromise(a, b){
  return new Promise(function(resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject("One or both were not numbers!")
    }
  });
}

addPromise(2,9).then(function(total) {
  console.log("The total is:", total);
}, function(err) {
  console.log("Error", err);
});

addPromise("two",9).then(function(total) {
  console.log("The total is:", total);
}, function(err) {
  console.log("Error", err);
});
