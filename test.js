 const { echo, listCakes } = require('./index.js');

function testEcho() {
  const input = "Delicious!";
  console.assert(echo(input) === input, "Echo test failed");
}

function testListCakes() {
  const cakes = listCakes();
  console.assert(Array.isArray(cakes), "listCakes should return array");
  console.assert(cakes.length === 4, "Should have 4 cake types");
}

function runTests() {
  testEcho();
  testListCakes();
  console.log("All tests passed!");
}

runTests();
