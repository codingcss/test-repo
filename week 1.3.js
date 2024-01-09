// var counter = 1;

// function printCounter() {
//     console.clear();
//     console.log(counter);
//     counter = counter + 1;
// }

// setInterval(printCounter, 3000)

// function sum(num1, num2, fnToCall) {
//     let result = num1 + num2;
//     fnToCall(result);
// }

// function displayResult(data)  {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("sum's result is : " + data );
// }

// const ans = sum(1, 3, displayResult)
// console.log(ans);

// firstRequest()
//   .then(function (response) {
//     return secondRequest(response);
//   })
//   .then(function (nextResponse) {
//     return thirdRequest(nextResponse);
//   })
//   .then(function (finalResponse) {
//     console.log("Final response: " + finalResponse);
//   })
//   .catch(failureCallback);


// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error));


// async function runProcess() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const json = await response.json();
//   console.log(json);
// }

// runProcess();

function square(n) {
  return n * n;
}

function cube(n) {
  console.log("clg n ");
  return n * n * n;
}

function sumOfSomething(a, b, fn) {
  let sq1 = fn(a);
  let sq2 = fn(b);
  return sq1 + sq2;
}

let ans = sumOfSomething(1, 2, cube);
console.log(ans);


