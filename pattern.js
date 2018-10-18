const repeatCharacter = function(character,times) {
  let repeated="";
  for(let count=0; count<times; count++){
    repeated+=character;
  }
  return repeated;
}

const generateLine = function(character) {
  return function(length){
    return repeatCharacter(character,length);
  }
}

const appendLine = function(previous,firstStringToAdd,secondStringToAdd){
  return previous+firstStringToAdd+secondStringToAdd;
}

const generateStar = generateLine("*");
const generateSpace = generateLine(" ");
const generateDash = generateLine("-");

const organizeLine = function(length,repeatTimes,firstNonBlank,lastNonBlank){
  let line="";
  line = appendLine(generateSpace(length-1-repeatTimes),firstNonBlank,generateSpace(2*repeatTimes+1))
  line = appendLine(line,lastNonBlank,"\n");
  return line;
}

const generateUpperPart = function(height,firstNonBlank,lastNonBlank){
  let upperPart="";
  upperPart = appendLine(upperPart,generateSpace(height),"*");
  upperPart = appendLine(upperPart,"\n","");
  for(let repeatTimes=0; repeatTimes<height-1; repeatTimes++){
    upperPart = appendLine(upperPart,organizeLine(height,repeatTimes,firstNonBlank,lastNonBlank),"");
  }
  return upperPart;
}

const generateLowerPart = function(height,firstNonBlank,lastNonBlank){
  let lowerPart = "";
  for(let repeatTimes=height-2; repeatTimes>=0; repeatTimes--){
    lowerPart = appendLine(lowerPart,organizeLine(height,repeatTimes,firstNonBlank,lastNonBlank),"");
  }
  lowerPart = appendLine(lowerPart,generateSpace(height),"*");
  return lowerPart;
}

const addDelimiter = function(line,delimiter){
  return delimiter+line;
}

const modifyDelimiter = function() {
  return "\n";
}

const generateFilledDiamond = function(height){
  let topHalf = "";
  let bottomHalf = "";
  let delimiter = "";
  for(let repeatTimes=0; repeatTimes<height; repeatTimes++){
    let line = generateSpace(height-repeatTimes)+generateStar(2*repeatTimes+1);
    topHalf = appendLine(topHalf,delimiter,line);
    bottomHalf = appendLine(line,delimiter,bottomHalf);
    delimiter=modifyDelimiter();
  } 
  return topHalf+"\n"+generateStar(2*height+1)+"\n"+bottomHalf;
}

const generateHollowDiamond = function(height){
  let line="";
  let hollowDiamond="";
  hollowDiamond += generateUpperPart(height,"*","*");
  hollowDiamond += "*"+generateSpace(2*height-1)+"*"+"\n";
  hollowDiamond += generateLowerPart(height,"*","*");
  return hollowDiamond;
}

const generateAngledDiamond = function(height){
  let line="";
  let angledDiamond="";
  angledDiamond += generateUpperPart(height,"/","\\");
  angledDiamond += "*"+generateSpace(2*height-1)+"*"+"\n";
  angledDiamond += generateLowerPart(height,"\\","/");
  return angledDiamond;
}

const generateLeftTriangle = function(height){
  let line="";
  let leftTriangle="";
  let delimiter="";
  for(let row=0; row<2*height+1; row++){
    line=generateStar(row+1);
    leftTriangle += addDelimiter(line,delimiter);
    delimiter=modifyDelimiter(delimiter);
  }
  return leftTriangle;
}

const generateRightTriangle = function(height){
  let line="";
  let rightTriangle="";
  let delimiter="";
  for(let row=0; row<2*height+1; row++){
    line=generateSpace(2*height-row)+generateStar(row+1);
    rightTriangle += addDelimiter(line,delimiter);
    delimiter=modifyDelimiter(delimiter);
  }
  return rightTriangle;
}

const generateFilledRectangle = function(height,width){
  let line="";
  let filledRectangle="";
  let delimiter="";
  for(let row=0; row<2*height+1; row++){
    line=generateStar(width);
    filledRectangle += addDelimiter(line,delimiter);
    delimiter=modifyDelimiter(delimiter);
  }
  return filledRectangle;
}

const generateEmptyRectangle = function(height,width){
  let line="";
  let emptyRectangle="";
  let delimiter="";
  emptyRectangle += generateStar(width)+"\n";
  for(let row=1; row<2*height; row++){
    line="*"+generateSpace(width-2)+"*";
    emptyRectangle += addDelimiter(line,delimiter);
    delimiter = modifyDelimiter(delimiter);
  }
  emptyRectangle += "\n"+generateStar(width);
  return emptyRectangle;
}

const generateAlternateRectangle = function(height,width){
  let line="";
  let alternateRectangle="";
  let delimiter="";
  for(let row=0; row<2*height; row++){
    line=generateStar(width);
    if(row%2!=0){
      line=generateDash(width);
    }
    alternateRectangle += addDelimiter(line,delimiter);
    delimiter = modifyDelimiter(delimiter);
  }
  return alternateRectangle;
}

const checkType = function(type,height,width){
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

const main = function(){
  let height = Math.floor(+process.argv[3]/2);
  let width = +process.argv[4];
  let type = process.argv[2];
  let output = "";
  output=checkType(type,height,width);
  console.log(output);
}

main();
