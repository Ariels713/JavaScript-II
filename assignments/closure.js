// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const areWeThereYet = () => {
  const ellie = 'Papa Are we there yet';
  const papa = 'Almost bug, almost.';
    console.log(`${ellie}`)
    const iNeedClosure = () => {
      //my first closure
      console.log(`${ellie}? ${papa}`)

      const iHave2Closures = () => {
        //I have two Closures
        console.log(`Papa papa ${ellie}!!!`)

      }
      iHave2Closures()
    }

    iNeedClosure()
    console.log(papa)
}

areWeThereYet()

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let counter = 0;
  return function(){

    return ++counter
  }
}
counter()
const newCounter = counter()//?
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

function sayHello(name){
  console.log(`Hello, ${name}`)
}
function callsayHello(userName, callback) {
  const innerName = userName
  callback(innerName);
}

callsayHello('Ariel', sayHello)//?