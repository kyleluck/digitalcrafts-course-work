/*
## Try/Catch

Given this add function:

function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('Arguments must be numbers');
  }
  return x + y;
}

Use this function to add two numbers. Then use it to add two strings, while gracefully handling any errors that occurs using the try/catch statement.
*/

function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('Arguments must be numbers');
  }
  return x + y;
}
try {
  console.log(add('1', 2));
} catch(err) {
  console.log('Error: ', err.message);
}
