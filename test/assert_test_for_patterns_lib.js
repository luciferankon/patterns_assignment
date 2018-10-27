let assert = require("assert");
let {generateLeftTriangle,
    generateRightTriangle,
    generateFilledRectangle,
    generateEmptyRectangle,
    generateAlternateRectangle,
    checkType} = require("../src/lib.js");
let {repeatCharacter,
    appendLine,
    generateStar,
    generateSpace,
    generateDash,
    addDelimiter,
    modifyDelimiter} = require("../util/utils.js");

//tests for repeatCharacter function
assert.equal(repeatCharacter('*',5),'*****');
assert.equal(repeatCharacter('a',1),'a');
assert.equal(repeatCharacter('1',0),'');

//tests for generateLine function
assert.equal(appendLine('**','@@','!!'),'**@@!!');
assert.equal(appendLine('**','dd',''),'**dd');

//test for generateStar function
assert.equal(generateStar(3),'***');
assert.equal(generateStar(0),'');
assert.equal(generateStar(-1),'');

//test for generateSpace function
assert.equal(generateSpace(3),'   ');
assert.equal(generateSpace(0),'');
assert.equal(generateSpace(-1),'');

//test for generateDash function
assert.equal(generateDash(3),'---');
assert.equal(generateDash(0),'');
assert.equal(generateDash(-1),'');

//tests for addDelimiter function
assert.equal(addDelimiter('ankon',''),'ankon');
assert.equal(addDelimiter('ankon','\n'),'\nankon');

//tests for modifyDelimiter function
assert.equal(modifyDelimiter('adca'),'\n');
assert.equal(modifyDelimiter(''),'\n');
assert.equal(modifyDelimiter('\n'),'\n');
assert.equal(modifyDelimiter(1),'\n');
assert.equal(modifyDelimiter(),'\n');

//tests for generateLeftTriangle function
let outputForLeftTriangle = '';
outputForLeftTriangle += '*';
outputForLeftTriangle += '\n**';
outputForLeftTriangle += '\n***';
outputForLeftTriangle += '\n****';
outputForLeftTriangle += '\n*****';
assert.equal(generateLeftTriangle(5),outputForLeftTriangle);
outputForLeftTriangle = '';
assert.equal(generateLeftTriangle(0),outputForLeftTriangle);

//tests for generateRightTriangle function
let outputForRightTriangle = '';
outputForRightTriangle += '    *';
outputForRightTriangle += '\n   **';
outputForRightTriangle += '\n  ***';
outputForRightTriangle += '\n ****';
outputForRightTriangle += '\n*****';
assert.equal(generateRightTriangle(5),outputForRightTriangle);
outputForRightTriangle = '';
assert.equal(generateRightTriangle(0),outputForRightTriangle);

//tests for generateFilledRectangle function
let outputForFilledRectangle = '';
outputForFilledRectangle += '****';
outputForFilledRectangle += '\n****';
outputForFilledRectangle += '\n****';
assert.equal(generateFilledRectangle(3,4),outputForFilledRectangle);
outputForFilledRectangle = '';
outputForFilledRectangle += '**';
assert.equal(generateFilledRectangle(1,2),outputForFilledRectangle);
outputForFilledRectangle = '';
outputForFilledRectangle += '*';
outputForFilledRectangle += '\n*';
outputForFilledRectangle += '\n*';
assert.equal(generateFilledRectangle(3,1),outputForFilledRectangle);

//tests for generateEmptyRectangle function
let outputForEmptyRectangle = '';
outputForEmptyRectangle += '***';
outputForEmptyRectangle += '\n* *';
outputForEmptyRectangle += '\n***';
assert.equal(generateEmptyRectangle(3,3),outputForEmptyRectangle);
outputForEmptyRectangle = '';
outputForEmptyRectangle += '*';
outputForEmptyRectangle += '\n**';
outputForEmptyRectangle += '\n*';
assert.equal(generateEmptyRectangle(3,1),outputForEmptyRectangle);

//tests for generateAlternateRectangle function
let outputForAlternateRectangle = '';
outputForAlternateRectangle += '*****';
outputForAlternateRectangle += '\n-----';
outputForAlternateRectangle += '\n*****';
outputForAlternateRectangle += '\n-----';
outputForAlternateRectangle += '\n*****';
assert.equal(generateAlternateRectangle(5,5),outputForAlternateRectangle);
outputForAlternateRectangle = '';
outputForAlternateRectangle += '*';
assert.equal(generateAlternateRectangle(1,1),outputForAlternateRectangle);

//tests for checkType function
assert.equal(checkType('left',1),'*');
assert.equal(checkType('right',1),'*');
assert.equal(checkType('filledrec',1,1),'*');
//have to be changed
assert.equal(checkType('empty',1,1),'*\n\n*');
assert.equal(checkType('alternate',2,1),'*\n-');
