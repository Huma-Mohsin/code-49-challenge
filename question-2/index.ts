// //Question 146: Show an example of a callback function used to filter an array of numbers.

// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function. This method is commonly used to search through an array and create a subset of it based on certain criteria.


//consider a scenerio to filter out even numbers from an array.

let numbers:number[]=[1,2,3,4,56,7,8,9,10,11,12,13,14,15]
 
let even=(num) => {
return num%2==0
}
//using filter method with callback function.

const evenNum=numbers.filter(even);

console.log("Even Numbers In A List:",evenNum);
//Author-Huma Mohsin
