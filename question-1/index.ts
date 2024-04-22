// //Question 145: Create a function that accepts a callback and invokes it with some arguments.

// Explain & TIP: Callbacks are functions passed as arguments to another function. This design pattern is very common in JavaScript for asynchronous operations, event listeners, or to customize the behavior of a function with custom actions.

function mathsOperation(value1, value2, operation, callback) {
  //This function is responsible for performing mathematical operations and invoking a callback with the result.

  let result; //it stores the value of result.
  switch (operation) {
    case "add":
      result = value1 + value2;
      break;
    case "subtract":
      result = value1 - value2;
      break;
    case "multiply":
      result = value1 * value2;
      break;
    case "divide":
      result = value1 / value2;
      break;
    case "modulus":
      result = value1 % value2;
      break;
    default:
      return callback(new Error("Invalid operation")); //default return callback(new Error('Invalid operation'));: If the operation is not one of the specified cases, we invoke the callback with an error indicating that the operation is invalid.
  }

  //invoke call back.
  callback(null, result); //Invoke the callback function here with null as the error (indicating success) and the result of the mathematical operation.
}
function handleResult(error, result) {
  //here , declare a function named handleResult that takes two parameters: error and result. This function is responsible for handling the result of the mathematical operation.

  if (error) {
    console.log("Error:", error.message); //If an error occurred during the operation, we log the error message to the console.
  } else {
    console.log("Result:", result);
  }
}
mathsOperation(5, 4, "add", handleResult); //result obtained successfully.

mathsOperation(15, 0, "divison", handleResult); //this causes an error.

mathsOperation(15, 4, "modulus", handleResult);

//Author-Huma Mohsin
