function bubblesort(arr) {
    var length = arr.length;
    for(var i = length - 1; i >= 0; i--) {
        for(var j = 0; j <= i; j++) {
            if(arr[j + 1] < arr[j]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

var arr = [9, 2, 1, 3, 0, 8, 7, 6, 5, 4, 10];
console.log(bubblesort(arr));
