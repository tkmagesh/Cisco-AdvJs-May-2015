Create an object and assign it to a variable "spinner"
the object is expected to exhibit the following behavior

spinner.up() // => 1
spinner.up() // => 2
spinner.up() // => 3
spinner.up() // => 4


spinner.down() // => 3
spinner.down() // => 2
spinner.down() // => 1
spinner.down() // => 0
spinner.down() // => -1

function getSpinner(){
    var count = 0;
    function increment(){
       return ++count;
    }
    function decrement(){
        return --count;
    }
    return {
        up : increment,
        down : decrement
    }
}



function getPrimeFinder(){
  var cache = {};
  function isPrime(n){
    console.log("Processing ", n);
    if (n <= 3) return true;
    for(var i=2; i <= (n/2); i++)
       if (n % i === 0) return false;
    return true;
  }
  function checkPrime(n){
    if (typeof cache[n] === "undefined")
       cache[n] = isPrime(n);
    return cache[n];
  }
  return checkPrime;
}
