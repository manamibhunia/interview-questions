//Record
/*
var RecordCls = Immutable.Record({
    name: 'default Name',
    phone: 'default phone',
    address: 'default address'
});
console.log('constructor- ', typeof RecordCls);
var aRecord = new RecordCls();

console.log(aRecord.toJSON());
console.log(aRecord.toJS());
console.log(aRecord.toObject());
console.log(aRecord.toString());

var bRecord = new RecordCls({name: 'Jyo'});
var cRecord = new RecordCls({phone: '124'});
console.log(bRecord.toJS());
console.log(cRecord.toJS());
var a = aRecord.set('name', 'Jyoti')
console.log(a.toJS());
*/



//MAP
/*
var person = Immutable.Map({
    name: 'Jyo',
    phone: 12312124,
    address: 'asdasfasf'
});

var person1 = person.set('name', 'Jyoti');
console.log(person1.toJS());
console.log(person.get('name'));
var person2 = Immutable.fromJS(person.toJS());
console.log(person === person2);
console.log(person.equals(person2));
*/



//List
/*
var aList = Immutable.List();
var bList = aList.push('a');
console.log(aList.toJS());
console.log(bList.toJS());
var cList = bList.pop().pop();
console.log(cList.toJSON());

var dList = bList.unshift('b').unshift('c');
console.log(dList.toJSON());

var eList = dList.shift();
console.log(eList.toJS());

var fList = eList.concat('d', 'e', 'f');
console.log(fList.toJS());

var gList = eList.concat(['d', 'e', 'f']);
console.log(gList.toJS());

console.log(gList.size);

*/


//Stack
/*
var aStack = Immutable.Stack(['a', 'b']);
console.log(aStack.toJS());
console.log(aStack.size);
console.log(aStack.get());  //'a'
console.log(aStack.get(0)); // 'a'
console.log(aStack.get(1)); // 'b'
console.log(aStack.get(2)); // undefined

var bStack = aStack.push('c').push('d');
console.log(bStack.toJS());

var cStack = bStack.pop().pop();
console.log(cStack.toJS());

var dStack = bStack.pop();
console.log(dStack.toJS());
console.log(JSON.stringify(dStack));

*/


//set
var set1 = Immutable.Set();
var set2 = Immutable.Set([1, 2]);
var set3 = Immutable.Set([3, 4]);
var set4 = Immutable.Set([2,2]);

console.log( set1.count(), set2.size, set3.count() ); // 2 2 1

console.log( set1.toJS(), set2.toArray(), set3.toJSON() ); // [2, 1] [2, 3] [1]

var s1S2IntersectArray = set1.intersect( set2 );
console.log(s1S2IntersectArray.toJSON()); // [2]

var set5 = set1.add(1).add(2).add(3);
console.log(set5.toJS());

var set6 = set5.delete(2);
console.log(set5.toJS());
console.log(set6.toJS());

var unionArray = set2.union(set6);
console.log(unionArray.toJS());
