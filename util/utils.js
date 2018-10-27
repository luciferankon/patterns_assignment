const repeatCharacter = function(character,times) {
  let repeated="";
  for(let count=0; count<times; count++){
    repeated+=character;
  }
  return repeated;
}

exports.repeatCharacter = repeatCharacter;

const repeatCharacterGenerator = function(character){
  return function(times){
    return repeatCharacter(character,times);
  }
}

exports.repeatCharacterGenerator = repeatCharacterGenerator;

const justify = function(text,length){
  let noOfSpaces = length-text.length;
  let spaces = [];
  for(let index=0; index<noOfSpaces; index++){
    spaces.push(' ');
  }
  return spaces.join("") + text;
}

exports.justify = justify;

const createJustify = function(length){
  return function(text){
    return justify(text,length);
  }
}

exports.createJustify = createJustify;

const createLine = function(width, leftChar, middleChar, rightChar) {
  let leftBorderWidth = 1 % (width + 1);
  let rightBorderWidth = 1 % width;
  let left = repeatCharacter(leftChar, leftBorderWidth);
  let middle = repeatCharacter(middleChar, width - 2);
  let right = repeatCharacter(rightChar, rightBorderWidth);
  return left + middle + right;
}

const createLineGenerator = function(leftChar,middleChar,rightChar) {
  return function(length){
    return createLine(length,leftChar,middleChar,rightChar);
  }
}

const appendLine = function(previous,firstStringToAdd,secondStringToAdd){
  return previous+firstStringToAdd+secondStringToAdd;
}

exports.appendLine = appendLine;

const starLineGenerator = createLineGenerator("*",'*','*');
const hollowLineGenerator = createLineGenerator("*",' ','*');
const dashLineGenerator = createLineGenerator("-",'-','-');

exports.starLineGenerator = starLineGenerator;
exports.hollowLineGenerator = hollowLineGenerator;
exports.dashLineGenerator = dashLineGenerator;

const addDelimiter = function(line,delimiter){
  return delimiter+line;
}

exports.addDelimiter = addDelimiter;

const modifyDelimiter = function() {
  return "\n";
}

exports.modifyDelimiter = modifyDelimiter;
