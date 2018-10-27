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
