//code.stephenmorley.org
function Queue() {
    var a=[],b=0;
    this.getLength=function() {
        return a.length-b
    };
    this.isEmpty=function() {
        return 0==a.length
    };
    this.enqueue=function(b) {
        a.push(b)
    };
    this.dequeue=function() {
        if(0!=a.length) {
            var c=a[b];
            2*++b>=a.length&&(a=a.slice(b),b=0);return c}};
    this.peek=function() {
        return 0<a.length?a[b]:void 0
    }
};

function findIndex(arr, data) {
    var index;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].data === data) {
            index = i;
        }
    }
    return index;
}

function Node(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
}

function Tree(data) {
    var node = new Node(data);
    this._root = node;
}

Tree.prototype.traverseDF = function(callback) {

    (function recurse(currentNode) {
        for(var i=0, length=currentNode.children.length; i<length; i++) {
            recurse(currentNode.children[i]);
        }
        callback(currentNode);
    })(this._root);
};

Tree.prototype.traverseBF = function(callback) {

    var queue = new Queue();
    queue.enqueue(this._root);
    var currentTree = queue.dequeue();
    while(currentTree) {
        for(var i=0, length=currentTree.children.length; i<length; i++) {
            queue.enqueue(currentTree.children[i]);
        }
        callback(currentTree);
        currentTree = queue.dequeue();
    }
};

Tree.prototype.contains = function(callback, traversal) {
    traversal.call(this, callback);
};

Tree.prototype.add = function(data, toData, traversal) {

    var child = new Node(data);
    var parent = null;
    var callback = function(node) {
        if(node.data === toData) {
            parent = node;
        }
    };
    this.contains(callback, traversal);
    if(parent) {
        console.log('adding ');

        parent.children.push(child);
        child.parent = parent;
    } else {
        console.log('Can not attach node to a non-existing node');
    }
}

Tree.prototype.remove = function(data, fromData, traversal) {
    var tree = this;
    var parent = null;
    var index;

    var callback = function(node) {
        if(node.data === fromData) {
            parent = node;
        }
    }
    this.contains(callback, traversal);
    if(parent) {
        index = findIndex(parent.children, data);
        console.log('index- ', index);
        if(index === undefined) {
            console.log('Can not remove something that does not exist');
        } else {
            console.log('removed- ', parent.children.splice(index, 1));

        }
    } else {
        console.log('parent does not exist');
    }
}

var tree = new Tree('one');

tree._root.children.push(new Node('two'));
tree._root.children[0].parent = tree;

tree._root.children.push(new Node('three'));
tree._root.children[1].parent = tree;

tree._root.children.push(new Node('four'));
tree._root.children[2].parent = tree;

tree._root.children[0].children.push(new Node('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];

tree._root.children[0].children.push(new Node('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];

tree._root.children[2].children.push(new Node('seven'));
tree._root.children[2].children[0].parent = tree._root.children[2];

/*
tree.traverseDF(function(node) {
    console.log(node.data)
});

tree.traverseBF(function(node) {
    console.log(node.data)
});

tree.contains(function(node){
    if(node.data === 'two') {
        console.log('matched- ', node.data);
    }
}, tree.traverseBF);
*/

tree.add('eight', 'seven', tree.traverseBF);


tree.traverseBF(function(node) {
    console.log(node.data)
});
console.log("=========== removing ========================");
tree.remove('eight', 'seven', tree.traverseBF);
tree.traverseBF(function(node) {
    console.log(node.data)
});
