function sumKardo(num1,num2){
    return num1 + num2;
  }

console.log(sumKardo(17,18));

function greetings(name = "guest"){
  return(`Welcome ${name}, have a good day!`);
}

console.log(greetings());        //Welcome guest, have a good day!
console.log(grettings("Swami")); //Welcome Swami, have a good day!


const greetings = (name) => {
  console.log("Hello, " + name + "!");
};

/*
 *Same as
 *  function greetings(name) {
      console.log("Hello, " + name + "!");
    }
 
 * Example with only one parameters don't need parentheses
    const greetings = name => {
      console.log("Hello, " + name + "!");
    };
*/

const greetings = name => console.log("Hello, " + name + "!");

// This will produce syntax errors (the one below):
//function greetings name console.log("Hello, " + name + "!");

//ab sojao
