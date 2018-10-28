let {generateLeftTriangle,
    generateRightTriangle} = require("./src/patternLib.js");

let {getUserArgs,
    categorizeArguments} = require("./src/patternUtil.js");

const drawPattern = function(categorizedArguments){
  let {type,height} = categorizedArguments;
  let identifier = {'left' : generateLeftTriangle,
                    'right': generateRightTriangle};
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
