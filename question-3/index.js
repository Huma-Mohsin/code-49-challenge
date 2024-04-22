// //Question 147: Explain how to handle errors in a callback pattern.
// Explain & TIP: Handling errors in a callback pattern often involves passing an error as the first argument to the callback. This convention allows the callback function to check for errors before proceeding with its execution.
//// Example usage of the asynchronous function with error handling
// Simulated asynchronous function
function simulateAsyncOperation(input, callback) {
    // Simulate an asynchronous operation
    setTimeout(function () {
        // Simulate an error condition
        var Error_Variable = Math.random() < 0.5;
        if (Error_Variable) {
            // Create an error object
            var error = new Error('An error occurred during the operation');
            // Pass the error as the first argument to the callback
            callback(error, null);
        }
        else {
            // Simulate successful completion
            var result = input.toUpperCase();
            // Pass null as the first argument to indicate no error
            callback(null, result);
        }
    }, 1000); // Simulate a delay of 1 second
}
// Example usage of the asynchronous function with error handling
var userInput = 'hello';
simulateAsyncOperation(userInput, function (error, result) {
    if (error) {
        // Error handling: Log the error
        console.error('Error:', error.message);
        // Perform additional error handling tasks if needed
    }
    else {
        // Success case: Process the result
        console.log('Result:', result);
        // Proceed with further execution if necessary
    }
});
console.log('Async operation initiated...');
//Author-Huma Mohsin
