function binarySearch(array, value) {
    var startIndex = 0;
    var endIndex = array.length - 1;
    var middle = Math.floor((endIndex + startIndex) / 2);

    while(array[middle] !== value && startIndex < endIndex) {

        if(value > array[middle]) {
            startIndex = middle + 1;
        } else {
            endIndex = middle - 1;
        }
        middle = Math.floor((endIndex + startIndex) / 2);
    }
    return (array[middle] === value) ? middle : -1;
}

console.log(binarySearch(['a', 'b', 'c', 'd', 'f', 'h', 'j'], 'c'));
