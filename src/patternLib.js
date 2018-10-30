let {
  repeatCharacter,
  generateLine,
  appendLine,
  starLineGenerator,
  hollowLineGenerator,
  dashLineGenerator,
  addDelimiter,
  modifyDelimiter,
  repeatCharacterGenerator,
  createJustify,
  topGenerator,
  bottomGenerator
} = require("./patternUtil.js");

const createNumbersUpto = function(length){
  let count = 0;
  let array = new Array(length).fill(count);
  let result = array.map(function(element){count++; return element+count;});
  return result;
}

exports.createNumbersUpto = createNumbersUpto;

const generateLeftTriangle = function(height){
  let rows = createNumbersUpto(height);
  let repeatCharacterTimes = repeatCharacterGenerator('*');
  return rows.map(repeatCharacterTimes).join("\n");
}

exports.generateLeftTriangle = generateLeftTriangle;

const generateRightTriangle = function(height){
  let rows = createNumbersUpto(height);
  let repeatCharacterTimes = repeatCharacterGenerator('*');
  let justifyByLength = createJustify(height);
  return rows.map(repeatCharacterTimes).map(justifyByLength).join("\n");
}

exports.generateRightTriangle = generateRightTriangle;

const repeatElement = function(length,element){
  return new Array(length).fill(element);
}

exports.repeatElement = repeatElement;

const generateFilledRectangle = function(height,width){
  let rows = repeatElement(height,width);
  let repeatCharacterTimes = repeatCharacterGenerator('*');
  return rows.map(repeatCharacterTimes).join("\n");
}

exports.generateFilledRectangle = generateFilledRectangle;

const generateEmptyRectangle = function(height,width){
  let emptyRectangle = [];
  emptyRectangle.push(starLineGenerator(width));
  if(height<2){
    return emptyRectangle.join('');
  }
  for(let row=0; row<height-2; row++){
    let line = hollowLineGenerator(width);
    emptyRectangle.push(line);
  }
  emptyRectangle.push(starLineGenerator(width));
  return emptyRectangle.join('\n');
}


exports.generateEmptyRectangle = generateEmptyRectangle;

const generateAlternateRectangle = function(height,width){
  let alternateRectangle=[];
  let lineGenerators = [starLineGenerator,dashLineGenerator];
  for(let row=0; row<height; row++){
    let lineGenerator = lineGenerators[row%2];
    let line = lineGenerator(width);
    alternateRectangle.push(line);
  }
  return alternateRectangle.join("\n");
}

exports.generateAlternateRectangle = generateAlternateRectangle;

const generateUpperPart = function(height,generator,startsFrom){
  let line = [];
  for(let i=startsFrom; i<(height/2 - startsFrom); i++){
    line.push(generator(2*i+1));
  }
  return line;
}

exports.generateUpperPart = generateUpperPart;

const generateLowerPart = function(height,generator,endsWith){
  let line = [];
  for(let i=Math.floor(height/2); i>endsWith; i--){
    line.push(generator(2*i-1));
  }
  return line;
}

exports.generateLowerPart = generateLowerPart;

const centerJustifyGenerator = function(length){
  return function(text){
    let noOfSpaces = (length-text.length)/2;
    let spaces = [];
    for(let index=0; index<noOfSpaces; index++){
      spaces.push(' ');
    }
    return spaces.join("") + text;
  }
}

const generateFilledDiamond = function(height){
  let upperPart = generateUpperPart(height,starLineGenerator,0);
  let lowerPart = generateLowerPart(height,starLineGenerator,0);
  let centerJustify = centerJustifyGenerator(height);
  let justifiedTop = upperPart.map(centerJustify);
  let justifiedBottom = lowerPart.map(centerJustify);
  return justifiedTop.concat(justifiedBottom).join('\n');
}

exports.generateFilledDiamond = generateFilledDiamond;

const generateHollowDiamond = function(height){
  let upperPart = generateUpperPart(height,hollowLineGenerator,0);
  let lowerPart = generateLowerPart(height,hollowLineGenerator,0);
  let centerJustify = centerJustifyGenerator(height);
  let justifiedTop = upperPart.map(centerJustify);
  let justifiedBottom = lowerPart.map(centerJustify);
  return justifiedTop.concat(justifiedBottom).join('\n');
}

exports.generateHollowDiamond = generateHollowDiamond;

const generateAngledDiamond = function(height){
  let centerJustify = centerJustifyGenerator(height);
  let tip = [centerJustify('*')];
  let upperPart = generateUpperPart(height,topGenerator,1);
  let lowerPart = generateLowerPart(height,bottomGenerator,1);
  let middlePart = hollowLineGenerator(height);
  let justifiedTop = upperPart.map(centerJustify);
  let justifiedBottom = lowerPart.map(centerJustify);
  return tip.concat(justifiedTop,middlePart,justifiedBottom,tip).join('\n');
}
exports.generateAngledDiamond = generateAngledDiamond;
