var objectLiteral = {
  firstname: 'Mary',
  isAPropgrammer: true
}

console.log(objectLiteral);

// .json files
// {
//   "firstname": "Mary",
//   "isAProgrammer": true
// }
// Each property has to be wrapped in quotes

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{"firstname": "Mary", "isAProgrammer": true}');

console.log("--------");
console.log(jsonValue)