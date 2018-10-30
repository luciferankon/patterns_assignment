let {
  generateFilledDiamond,
  generateHollowDiamond,
  generateAngledDiamond
} = require("./src/patternLib.js");

let {
  getUserArgs,
  categorizeArguments
} = require("./src/patternUtil.js");

const drawPattern = function(categorizedArguments){
  let {
    type,
    height
  } = categorizedArguments;
  let identifier = {
    'filled' : generateFilledDiamond,
    'hollow' : generateHollowDiamond,
    'angled' : generateAngledDiamond
  };
  return identifier[type](height);
}

const main = function(){
  let userArgs = getUserArgs();
  let categorizedArguments = categorizeArguments(userArgs);
  let output = '';
  output = drawPattern(categorizedArguments);
  console.log(output);
}

main();
