const arr = [5,2,7,1,9,3,4];

function sort(n){
    for(let i = 0;  i < arr.length; i++){
        setTimeout(()=> console.log(arr[i]), arr[i]);
    }
}

sort(arr);