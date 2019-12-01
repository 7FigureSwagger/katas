let camelCase = function(input) {
  // Your code here
  let txtInput = input.split(" ");
  let txtOutput = [];

  for (let element of txtInput) {
    if(element != txtInput[0]) {
      txtOutput.push(element[0].toUpperCase() + element.slice(1));
    } else {
      txtOutput.push(element);
    }
  }
  return txtOutput.join("");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));