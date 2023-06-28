// Developer Skills & Editor Setup
// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]
// GOOD LUCK �

// Does input arr contains only number or anything else
// Loop through entire loop and then for each loop is each day but iteration +1 becozz iteration starts from 0 to <length or

/*Method 1 this will print the data in each single stmt not combined
const printForecast = function (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] != "number") {
        continue;
      } else {
        const returnStmt = "".concat(`${arr[i]}°C in ${i + 1} days...`);
        console.log(returnStmt);
      }
    }
    return returnStmt;
  };
  const finalStmt = printForecast([17, 21, 23]);
  console.log(finalStmt);
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C in ${i + 1} days... `;
  }
  console.log("..." + str);
};
printForecast([17, 21, 23]);
