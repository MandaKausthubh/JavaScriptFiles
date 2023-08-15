
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


function ReverseArray(arr) {
    if(arr.length === 0) ;
    else{
        //console.log(arr);
        let temp = arr.shift();
        //console.log(arr);
        ReverseArray(arr);
        arr.push(temp);
    }
}

function Sort_Numbers(arr, l, r) {
    if(arr.length === 0 || l === r) ;
    else{
        //console.log(arr);
        //console.log(((l+r)/2));
        let mid = Math.floor((l+r)/2);
        console.log(mid);
        Sort_Numbers(arr, l, mid);
        Sort_Numbers(arr, mid+1, r);

        var temp = []
        let i = l; let j = mid+1;
        while(i < mid && j < r) {
            if(arr[i] < arr[j]){temp.push(arr[i++]);}
            else{temp.push(arr[j++]);}
        }
        while(i < mid){temp.push(arr[i++]);}
        while(j < mid){temp.push(arr[j++]);}

        for(let x = l; x <= r; x++) {
            arr[x] = temp[x-l];
        }
    }
}

let arr = [6,3,2]
Sort_Numbers(arr, 0, arr.length-1)
console.log(arr)