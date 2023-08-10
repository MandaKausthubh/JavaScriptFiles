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

Array1.pop()
console.log(Array1,'After using pop()')

Array1.push([4,5])
console.log(Array1, 'After using push()')


let filtered_Array = Array1.filter((Array1) => typeof(Array1) == `number`);
console.log(filtered_Array, 'After using the filter method')

let found = filtered_Array.find((filtered_Array) => typeof(filtered_Array) == 'number');
console.log(found, `returns the first element of an arry satisfying the given condition.`)

let it = (Array1) => Array1 == "Kausthubh"
let unknown_index = Array1.findIndex(it)
console.log(unknown_index)

//Array.findLast() has not been put out yet
//let it2 = (Array2) => typeof(Array2) == 'number';
//let unknown_index_behind = Array2.findLast();

console.log(Array1.map((x) => x**2))
console.log(Array1)