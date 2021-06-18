const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
 console.log ('welcome to the password validator tool')
reader.question("Enter your password", function(input){
	if (input.length >= 10){
    console.log('success')
  } else {
    console.log('failure')
  }

});