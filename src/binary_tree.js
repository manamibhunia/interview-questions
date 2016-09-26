function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function Tree(data) {
    var node = new Node(data);
    this._root = node;
}

Tree.prototype.contains = function(data, callback) {
    var current = this._root;
    while(current) {
        if(data < current.data) {
            current = current.left;
        } else if(data > current.data) {
            current = current.right;
        } else {
            callback(current);
            break;
        }
    }
    console.log('not found');
}

Tree.prototype.add = function(data) {
    var newNode = new Node(data);

    if(this._root === null) {
        this._root = newNode;
    } else {
        var current = this._root;
        while(true) {
            if(data < current.data) {
                if(current.left === null) {
                    current.left = newNode;
                    break;
                } else {
                    current = current.left;
                }
            } else if(data > current.data) {
                if(current.right === null) {
                    current.right = newNode;
                    break;
                } else {
                    current = current.right;
                }
            } else {
                console.log('node already exists');
                break;
            }
        }
    }
}

Tree.prototype.remove = function(data) {
    if(this._root) {
        var current = this._root;
        while(current) {
            if(data < current.data) {
                current = current.left;
            } else if(data > current.data) {
                current = current.right;
            } else {

            }
        }
    }
}

Tree.prototype.traverse = function(callback) {

    function inOrder(node) {
        if(node) {
            if(node.left) {
                inOrder(node.left);
            }
            callback.call(this, node);
            if(node.right) {
                inOrder(node.right);
            }
        }
    }
    inOrder(this._root);
}

Tree.prototype.size = function() {

    var length = 0;
    this.traverse(function(node) {
        length++;
        console.log(node);
    });
    return length;
}

Tree.prototype.toArray = function() {

    var newArray = [];
    this.traverse(function(node) {
        newArray.push(node.data);
    });
    return newArray;
}

Tree.prototype.toString = function() {

    return this.toArray().toString();
}

Tree.prototype.findLargest = function(k) {
    var c = 0;
    function findKthLargest(node) {
        if(!node || c >= k) {
            return;
        }
        findKthLargest(node.right);
        c++;
        if(c === k) {
            console.log(k + 'th largest elment is ', node.data);
            return;
        } else {
            findKthLargest(node.left);
        }
    }
    findKthLargest(this._root);
}

Tree.prototype.findSmallest = function(k) {

    var c = 0;
    function findKthSmallest(node) {
        if(!node || c >=k ) {
            return;
        }
        findKthSmallest(node.left);
        c++;
        if( c === k) {
            console.log(k + 'th smallest element is ', node.data);
            return;
        }
        findKthSmallest(node.right);
    }
    findKthSmallest(this._root);
}

var tree = new Tree(8);

// console.log(tree);
tree.add(1);
// console.log(tree);
tree.add(3);
// console.log(tree);
tree.add(6);
// console.log(tree);
tree.add(7);
// console.log(tree);
tree.add(4);
// console.log(tree);
tree.add(14);
// console.log(tree);
tree.add(13);
// console.log(tree);
tree.add(10);
// console.log(JSON.stringify(tree, null, 2));
// console.log(tree);

// tree.contains(135, function(node) {
//     console.log(node.data);
// });

// console.log(tree.size());
console.log(tree.toArray());
// console.log(tree.toString());

console.log(tree.findLargest(2));

console.log(tree.findSmallest(3));
