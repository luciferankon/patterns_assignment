let {generateLeftTriangle,
    generateRightTriangle,
    generateFilledRectangle,
    generateEmptyRecatangle,
    generateAlternateRectangle,
    checkType,
    generateFilledDiamond} = require("./src/patternLib.js");

const getUserArgs = function(){  
  return process.argv.slice(2);
}

const main = function(){
  let userArgs = getUserArgs();
  let output = "";
  let type = userArgs[0];
  let height = +userArgs[1];
  let width = +userArgs[2];
  output=checkType(type, height, width);
  console.log(output);
}

main();
