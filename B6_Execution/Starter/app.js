function b() {
   console.log('Called b!');
}

b();

console.log(a);

var a = 'Hello World!';

console.log(a);

console.log('---------------------------------------');


function c() {
   console.log('c() was run because d() was run')
};

function d() {
   console.log('calling function c()')
   c();
}

d();
var e;