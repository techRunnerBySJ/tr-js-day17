// Event Loop in JavaScript
console.log('Start');

setTimeout(() => {
  console.log('Async Timer 1');
}, 2000);

setTimeout(() => {
  console.log('Async Timer 2');
}, 1000);

console.log('End');
