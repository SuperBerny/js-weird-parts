var Brian = {
  firstname: 'Brian',
  lastname: 'Patrick',
  address: {
    street: '123 Main St',
    city: 'San Diego',
    state: 'CA'
  }
};

function greet(person) {
  console.log('Hi ' + person.firstname);
};

greet(Brian);

greet({firstname: 'Mary', lastname: 'Doe'});

Brian.address2 = {
  street: '321 Backup St.'
}

console.log(Brian);