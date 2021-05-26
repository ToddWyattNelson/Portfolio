// req1
function reqOne() {
  const input = document.getElementById("req1Input").value;
  const outputElement = document.getElementById("req1Output");
  outputElement.innerHTML = "You entered: " + input;
}

// req 2
function reqTwo() {
  const input = document.getElementById("req2Input").value;
  const outputElement = document.getElementById("req2Output");

  console.log(input);
  if (!isNaN(input)) {
    outputElement.innerHTML = "total: " + sum(input);
  }
}

function sum(number) {
  let total = 0;
  for (let i = 1; i <= number; i++) {
    total += i;
  }
  return total;
}

// req 3
function add() {
  const num1Float = document.getElementById("req3Input1").value;
  const num2Float = document.getElementById("req3Input2").value;
  const outputElement = document.getElementById("req3Output");

  if (!isNaN(num1Float) && !isNaN(num2Float)) {
    let total = num1Float + num2Float;
    outputElement.innerHTML = `Total: ${total}`;
  }
}

// stretch solution
function getNum(numId) {
  const number = document.getElementById(numId).value;
  const numberFloat = parseFloat(number);
  if (numberFloat !== NaN) {
    return numberFloat;
  } else return 0;
}

function updateTotal(value) {
  const outputElement = document.getElementById("stretchOutput");
  outputElement.innerHTML = "Total: " + value;
}
// function declaration
function add2(num1, num2) {
  return num1 + num2;
}
// function expression
const sub2 = function (num1, num2) {
  return num1 - num2;
};
// arrow function
const mult2 = (num1, num2) => num1 * num2;

// example of using a callback to pull it all together
function performOperation(operation) {
  // the argument 'operation' is a function...so when we are ready we can call that function in our code below
  const total = operation(getNum("stretchNumber1"), getNum("stretchNumber2"));
  updateTotal(total);
}
