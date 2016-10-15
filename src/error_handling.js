function divide(jsonString) {
    if((typeof jsonString) !== "string" ) {
        throw 'Not a string.';
    }
    var output;
    try {
        output = a/c;
    } catch(e) {
        output = "hello";
    }
    console.log(output);
    try {
        var output2 = JSON.parse(jsonString);
    } catch(e) {
        return 'Not a valid JSON string or may be already a JSON object.';
    }
    return output2;

}

try {
    console.log(1);
    console.log(2);
    console.log(divide({"a": 2}));
    console.log(3);

} catch(e) {
    console.log('xyz');
}
