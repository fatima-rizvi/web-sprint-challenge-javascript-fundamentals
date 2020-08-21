// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

//So, nestedFunction needs to console log the variabel internal. FIrst it looks within itself, but the variable internal isn't declared or located inside of the nestedFunction. So the nestedFunction has to look outside of it's function to myFunction. myFunction has the variable internal, so nestedFunction can access it. This only works because even though internal is declared with a const, the function nestedFunction is within myFunction, so it has access to internal. If nestedFunction was outside of myFunction, it would not be able to access the variable internal with the above code. Variables can be passed down but not up.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num){
  let sum = num;
  while(num > 1){
    num = num - 1;
    sum = sum + num;
  };
  return sum;
};

console.log(summation(4));