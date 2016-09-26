function insertionSort(items) {

    for (var i=0, len = items.length; i < len; i++) {
        var value = items[i];
        for (var j=i-1; j > -1 && items[j] > value; j--) {
            items[j+1] = items[j];
        }

        items[j+1] = value;
    }
    return items;
}

function insertionsort(arr) {
        for(var i = 0, len = arr.length; i < len-1; i++ ) {
            var value = arr[i];
            for(var j = i-1; j>-1 && arr[j] > value; j--) {
                arr[j+1] = arr[j];
            }
            arr[j+1] = value;
        }
        return arr;
}

var arr = [9, 2, 1, 3, 0, 8, 7, 6, 5, 4, 10];
console.log(insertionsort(arr));
