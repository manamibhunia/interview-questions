var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function mergeSort(array) {
    if(array.length <2) {
        return array;
    }
    var middle = parseInt(array.length / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle, array.length);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [];
    while(left.length && right.length) {
        if(left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while(left.length) {
        result.push(left.shift());
    }

    while(right.length) {
        result.push(right.shift());
    }
    return result;
}

console.log(mergeSort(a));
