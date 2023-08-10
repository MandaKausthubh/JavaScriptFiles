let Array1 = [1, 2, 3, "Kausthubh", [4, 5]]
let Array2 = [6, 7, 8, 90]
let Array3 = Array1.concat(Array2)
let iterators = Array1.entries()// Generates an iterator object(array in a basic sense) that has 
//Properties of Arrays are attributes/meathods of the

console.log(Array1.length)
console.log(Array1[0])          //This return the element stored at the given index
console.log(Array3)

console.log("Start iterating")
for([index, val] of iterators){
    console.log(`Value at index: ${index} is ${val}`);
}

console.log("End iterating")
