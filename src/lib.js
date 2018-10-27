let {repeatCharacter,
    generateLine,
    appendLine,
    generateStar,
    generateSpace,
    generateDash,
    addDelimiter,
    modifyDelimiter,
    repeatCharacterGenerator,
    createJustify} = require("../util/utils.js");

const createArray = function(length){
  let array = [];
  for(let index=0; index<length; index++){
    array[index] = index + 1;
  }
  return array;
}

const generateLeftTriangle = function(height){
  let rows = createArray(height);
  let repeatCharacterTimes = repeatCharacterGenerator('*');
  return rows.map(repeatCharacterTimes).join("\n");
}

exports.generateLeftTriangle = generateLeftTriangle;

const generateRightTriangle = function(height){
  let rows = createArray(height);
  let repeatCharacterTimes = repeatCharacterGenerator('*');
  let justifyByLength = createJustify(height);
  return rows.map(repeatCharacterTimes).map(justifyByLength).join("\n");
}

exports.generateRightTriangle = generateRightTriangle;

const generateFilledRectangle = function(height,width){
  let line="";
  let filledRectangle="";
  let delimiter="";
  for(let row=0; row<height; row++){
    line=generateStar(width);
    filledRectangle += addDelimiter(line,delimiter);
    delimiter=modifyDelimiter(delimiter);
  }
  return filledRectangle;
}

exports.generateFilledRectangle = generateFilledRectangle;

const generateEmptyRectangle = function(height,width){
  let line="";
  let emptyRectangle="";
  let delimiter="";
  emptyRectangle += generateStar(width)+"\n";
  for(let row=1; row<height-1; row++){
    line="*"+generateSpace(width-2)+"*";
    emptyRectangle += addDelimiter(line,delimiter);
    delimiter = modifyDelimiter(delimiter);
  }
  if(height==2){
    return emptyRectangle += generateStar(width);
  }
  emptyRectangle += "\n"+generateStar(width);
  return emptyRectangle;
}

exports.generateEmptyRectangle = generateEmptyRectangle;

const generateAlternateRectangle = function(height,width){
  let line="";
  let alternateRectangle="";
  let delimiter="";
  for(let row=0; row<height; row++){
    line=generateStar(width);
    if(row%2!=0){
      line=generateDash(width);
    }
    alternateRectangle += addDelimiter(line,delimiter);
    delimiter = modifyDelimiter(delimiter);
  }
  return alternateRectangle;
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

