function b() {
   var myVar;
   console.log('function b ' + 'myVar = ' + myVar);
}

function a() {
   var myVar = 2;
   console.log('function a ' + 'myVar = ' + myVar);
   b();
}

var myVar = 1;
console.log('myVar is not in a function ' + 'myVar = ' +  myVar);
a();

console.log('myVar after execution context' + ' myVar = ' + myVar);