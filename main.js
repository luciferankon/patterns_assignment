let {generateLeftTriangle,
    generateRightTriangle,
    generateFilledRectangle,
    generateEmptyRecatangle,
    generateAlternateRectangle,
    checkType,
    generateFilledDiamond} = require("./src/patternLib.js");

const main = function(){
  let height = +process.argv[3];
  let width = +process.argv[4];
  let type = process.argv[2];
  let output = "";
  output=checkType(type,height,width);
  console.log(output);
}

main();
