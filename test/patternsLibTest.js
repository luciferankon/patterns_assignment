let assert = require("assert");
let {generateLeftTriangle,
    generateRightTriangle,
    generateFilledRectangle,
    generateEmptyRectangle,
    generateAlternateRectangle,
    createArrayForTriangle,
    createArrayForRectangle,
    generateFilledDiamond,
    generateHollowDiamond,
    generateAngledDiamond} = require("../src/patternLib.js");

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
outputForEmptyRectangle += '\n*';
outputForEmptyRectangle += '\n*';
assert.equal(generateEmptyRectangle(3,1),outputForEmptyRectangle);
outputForEmptyRectangle = '';
outputForEmptyRectangle += '*';
assert.equal(generateEmptyRectangle(1,1),outputForEmptyRectangle);
outputForEmptyRectangle = '';
assert.equal(generateEmptyRectangle(0,0),outputForEmptyRectangle);

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

//tests for createArrayForTriangle function
assert.deepEqual(createArrayForTriangle(5),[1,2,3,4,5]);
assert.deepEqual(createArrayForTriangle(1),[1]);
assert.deepEqual(createArrayForTriangle(0),[]);

//tests for createArrayForRectangle function
assert.deepEqual(createArrayForRectangle(5,6),[6,6,6,6,6]);
assert.deepEqual(createArrayForRectangle(0,6),[]);
assert.deepEqual(createArrayForRectangle(5,0),[0,0,0,0,0]);

//tests for generateFilledDiamond function
let outputForFilledDiamond = '';
outputForFilledDiamond += '  *';
outputForFilledDiamond += '\n ***';
outputForFilledDiamond += '\n*****';
outputForFilledDiamond += '\n ***';
outputForFilledDiamond += '\n  *';
assert.equal(generateFilledDiamond(5),outputForFilledDiamond);

//tests for generateHollowDiamond function
let outputForHollowDiamond = '';
outputForHollowDiamond += '  *'
outputForHollowDiamond += '\n * *';
outputForHollowDiamond += '\n*   *';
outputForHollowDiamond += '\n * *';
outputForHollowDiamond += '\n  *';
assert.equal(generateHollowDiamond(5),outputForHollowDiamond);

//tests for generateAngledDiamond function
let output = '';
output += '  *';
output += '\n / \\';
output += '\n*   *';
output += '\n \\ /';
output += '\n  *';
assert.equal(generateAngledDiamond(5),output);
