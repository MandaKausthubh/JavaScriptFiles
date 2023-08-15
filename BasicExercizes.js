
function PrintEven(n = 10){
    for(var i = 0; i <= 10; i += 2){
        console.log(i);
    }
}

function PrintMultiplicationTable(n){
    for(var i = 1; i <= 10; i++){
        console.log(`${i} x ${n} = ${i*n}`);
    }
}

PrintMultiplicationTable(90)

// function ReverseArray(arr) {
//     console.log(arr.push(1))
// }

// ReverseArray([6])