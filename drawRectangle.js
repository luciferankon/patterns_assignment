let {
  generateFilledRectangle,
  generateEmptyRectangle,
  generateAlternateRectangle
} = require("./src/patternLib.js");

let {
  getUserArgs,
  categorizeArguments
} = require("./src/patternUtil.js");

const drawPattern = function(categorizedArguments){
  let {
    type,
    height,
    width
  } = categorizedArguments;
  let identifier = {
    'filled' : generateFilledRectangle,
    'hollow' : generateEmptyRectangle,
    'alternate' : generateAlternateRectangle
  };
  return identifier[type](+height,+width);
}

const main = function(){
  let userArgs = getUserArgs();
  let categorizedArguments = categorizeArguments(userArgs);
  let output = '';
  output = drawPattern(categorizedArguments);
  console.log(output);
}

main();
