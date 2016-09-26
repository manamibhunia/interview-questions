function isPrime(n)
{
  var divisor = 3,
      limit = Math.sqrt(n);
      console.log('limit- ', limit);

           var i = 1;
  //check simple cases
  if (n == 2 || n == 3)
     return true;
  if (n % 2 == 0)
     return false;

  while (divisor <= limit)
  {
      i++;
    if (n % divisor == 0) {
        console.log(i);
      return false;
    }
    else {
      divisor += 2;
    }
  }
  console.log(i);

  return true;
}

// console.log(isPrime(238));


function primeFactors(n){
  var factors = [],
      divisor = 2;

  while(n>2){
    if(n % divisor == 0){
       factors.push(divisor);
       n = n / divisor;
    }
    else{
      divisor++;
    }
  }
  return factors;
}

console.log(primeFactors(237));
