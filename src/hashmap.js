var Node = function(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.hash = function(){

    };
}

var HashMap = function(K, V) {
    var currentNode = new Node(K, V);
    this._first = currentNode;
};
console.log(map.toString());
