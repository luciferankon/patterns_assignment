let {repeatCharacter,
    generateLine,
    appendLine,
    starLineGenerator,
    hollowLineGenerator,
    dashLineGenerator,
    addDelimiter,
    modifyDelimiter,
    repeatCharacterGenerator,
    createJustify} = require("../util/utils.js");

const createArrayForTriangle = function(length){
  let array = [];
  for(let index=0; index<length; index++){
    array[index] = index + 1;
  }
  return array;
}

exports.createArrayForTriangle = createArrayForTriangle;

const generateLeftTriangle = function(height){
  let rows = createArrayForTriangle(height);
  let repeatCharacterTimes = repeatCharacterGenerator('*');
  return rows.map(repeatCharacterTimes).join("\n");
}

exports.generateLeftTriangle = generateLeftTriangle;

const generateRightTriangle = function(height){
  let rows = createArrayForTriangle(height);
  let repeatCharacterTimes = repeatCharacterGenerator('*');
  let justifyByLength = createJustify(height);
  return rows.map(repeatCharacterTimes).map(justifyByLength).join("\n");
}

exports.generateRightTriangle = generateRightTriangle;

const createArrayForRectangle = function(length,element){
  return new Array(length).fill(element);
}

exports.createArrayForRectangle = createArrayForRectangle;

const generateFilledRectangle = function(height,width){
  let rows = createArrayForRectangle(height,width);
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
  for(let row=0; row<height; row++){
    let line=starLineGenerator(width);
    if(row%2!=0){
      line=dashLineGenerator(width);
    }
    alternateRectangle.push(line);
  }
  return alternateRectangle.join("\n");
}

exports.generateAlternateRectangle = generateAlternateRectangle;

const checkType = function(type,height,width){
  let output;
  if(type=="filled"){
    output=generateFilledDiamond(height);
  }else if(type=="hollow"){
    output=generateHollowDiamond(height);
  }else if(type=="angled"){
    output=generateAngledDiamond(height);
  }else if(type=="left"){
    output=generateLeftTriangle(height);
  }else if(type=="right"){
    output=generateRightTriangle(height);
  }else if(type=="filledrec"){
    output=generateFilledRectangle(height,width);
  }else if(type=="empty"){
    output=generateEmptyRectangle(height,width);
  }else if(type=="alternate"){
    output=generateAlternateRectangle(height,width);
  }
  return output;
}

exports.checkType = checkType;

