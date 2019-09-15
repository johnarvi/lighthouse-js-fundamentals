
/*
const sayHello = function () {

  console.log("Hello, world");

}

sayHello();
*/

/*
const sayHello = function (name) {

  console.log("Hello, " + name);

}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");
*/

// console.log vs return statments

/*
// function prints hello john 
const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 
*/
// function returns hello john and assigns it to a variable
const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');

console.log(greeting);