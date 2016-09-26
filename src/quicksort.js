function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items, left, right) {

    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;


    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}

function quickSort(items, left, right) {

    var index;

    if (items.length > 1) {

        index = partition(items, left, right);

        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }

        if (index < right) {
            quickSort(items, index, right);
        }

    }

    return items;
}

var items = [0,2,1,10];
// first call
var result = quickSort(items, 0, items.length - 1);
console.log(result);



Array.prototype.quickSort = function() {

    if(this.length === 0) {
        return [];
    }

    var left = [];
    var right = [];
    var pivot = this[0];

    for(var i = 1, length = this.length; i < length; i++) {
        if(this[i] < pivot) {
            left.push(this[i]);
        } else {
            right.push(this[i]);
        }
    }
    return left.quickSort().concat(pivot, right.quickSort());
}

console.log([0,2,2,1,10].quickSort());
