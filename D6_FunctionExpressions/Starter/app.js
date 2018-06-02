greet();

// function statement
function greet() {
  console.log('hi')
}

// anonymousGreet();

// function expression
var anonymousGreet = function() {
  console.log('hi')
}

anonymousGreet();

function log(a) {
  a();
}

log(function() {
  console.log('hi')
});