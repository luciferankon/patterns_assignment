const repeatCharacter = function(character,times) {
  let repeated="";
  for(let count=0; count<times; count++){
    repeated+=character;
  }
  return repeated;
}

exports.repeatCharacter = repeatCharacter;

const generateLine = function(character) {
  return function(length){
    return repeatCharacter(character,length);
  }
}

const appendLine = function(previous,firstStringToAdd,secondStringToAdd){
  return previous+firstStringToAdd+secondStringToAdd;
}

exports.appendLine = appendLine;

const generateStar = generateLine("*");
const generateSpace = generateLine(" ");
const generateDash = generateLine("-");

exports.generateStar = generateStar;
exports.generateSpace = generateSpace;
exports.generateDash = generateDash;

const addDelimiter = function(line,delimiter){
  return delimiter+line;
}

exports.addDelimiter = addDelimiter;

const modifyDelimiter = function() {
  return "\n";
}

exports.modifyDelimiter = modifyDelimiter;

const generateLeftTriangle = function(height){
  let line="";
  let leftTriangle="";
  let delimiter="";
  for(let row=0; row<height; row++){
    line=generateStar(row+1);
    leftTriangle += addDelimiter(line,delimiter);
    delimiter=modifyDelimiter(delimiter);
  }
  return leftTriangle;
}

exports.generateLeftTriangle = generateLeftTriangle;

const generateRightTriangle = function(height){
  let line="";
  let rightTriangle="";
  let delimiter="";
  for(let row=0; row<height; row++){
    line=generateSpace(height-row-1)+generateStar(row+1);
    rightTriangle += addDelimiter(line,delimiter);
    delimiter=modifyDelimiter(delimiter);
  }
  return rightTriangle;
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

