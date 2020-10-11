const promise = new Promise((resolve, reject) => {
  var randomTime = Math.floor(Math.random() * 10000 + 1000);
  setTimeout(() => {
    resolve(randomTime); // Change status to 'fulfilled'
  }, randomTime);
});

// console.log(`Promise before being resolved `, promise);

// setTimeout(() => {
//   console.log(`Promise after being resolved`, promise);
// }, 12000);

promise.then(function (value) {
  console.log(value);
});
