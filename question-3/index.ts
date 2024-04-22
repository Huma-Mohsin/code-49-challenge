// //Question 147: Explain how to handle errors in a callback pattern.

// Explain & TIP: Handling errors in a callback pattern often involves passing an error as the first argument to the callback. This convention allows the callback function to check for errors before proceeding with its execution.

//solution

//The callback pattern is a programming pattern commonly used in asynchronous programming, especially in languages like JavaScript. It allows you to define what happens after an asynchronous operation completes.

// Simulated asynchronous function
function simulateAsyncOperation(input, callback) {
    // Simulate an asynchronous operation
    setTimeout(() => {
        // Simulate an error condition
        const Error_Variable = Math.random() < 0.5;

        if (Error_Variable) {
            // Create an error object
            const error = new Error('An error occurred during the operation');
            // Pass the error as the first argument to the callback
            callback(error, null);
        } else {
            // Simulate successful completion
            const result = input.toUpperCase();
            // Pass null as the first argument to indicate no error
            callback(null, result);
        }
    }, 1000); // Simulate a delay of 1 second
}
//In this  above code:

// //We define a function simulateAsyncOperation that takes two parameters: input (the data to operate on) and callback (the function to call once the operation is complete).
// Inside the function, we use setTimeout to simulate an asynchronous operation that takes some time to complete (in this case, 1 second).
// We generate a random error condition (Error) to simulate whether the operation succeeds or fails.
// If an error occurs (Error is true), we create an Error object with a descriptive message and pass it as the first argument to the callback function.
// If the operation succeeds (Error is false), we transform the input data (convert it to uppercase in this case) and pass the result as the second argument to the callback function, with null as the first argument to indicate no error.

const userInput = 'hello';

simulateAsyncOperation(userInput, (error, result) => {
    if (error) {
        // Error handling: Log the error
        console.error('Error:', error.message);
        // Perform additional error handling tasks if needed
    } else {
        // Success case: Process the result
        console.log('Result:', result);
        // Proceed with further execution if necessary
    }
});

console.log('Async operation initiated...');
//In this above code :

// We define a variable userInput containing the input data for the asynchronous operation.
// We call the simulateAsyncOperation function with userInput and a callback function.
// Inside the callback function, we check if an error occurred (if (error)) by inspecting the first argument passed by the simulateAsyncOperation function.
// If an error occurred, we handle it by logging the error message to the console (console.error) and possibly performing additional error handling tasks.
// If the operation succeeded (no error), we process the result by logging it to the console (console.log('Result:', result)).
// Before the asynchronous operation completes, we log a message indicating that the operation has been initiated (console.log('Async operation initiated...')).
// This breakdown illustrates how the asynchronous function is called and how error handling is performed using the callback pattern.
//Author-Huma Mohsin