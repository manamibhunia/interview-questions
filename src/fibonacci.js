function printFib(n) {
    var fib = [];

    fib[0] = 0;
    fib[1] = 1;
    for(var i=2; i<n; i++)
    {
        fib[i] = fib[i-2] + fib[i-1];
    }
    return fib;
}
console.log(printFib(6));

function fibonacci(n) {
    if(n <=1)
        return n;
    else
        return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(4));
