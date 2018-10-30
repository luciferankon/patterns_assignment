let assert = require("assert");
let {
  repeatCharacter,
  appendLine,
  starLineGenerator,
  hollowLineGenerator,
  dashLineGenerator,
  addDelimiter,
  modifyDelimiter,
  justify,
  categorizeRectangle,
  categorizeTriangle,
  categorizeDiamond,
  categorizeArguments
} = require("../src/patternUtil.js");

//tests for repeatCharacter function
assert.equal(repeatCharacter('*',5),'*****');
assert.equal(repeatCharacter('a',1),'a');
assert.equal(repeatCharacter('1',0),'');

//tests for generateLine function
assert.equal(appendLine('**','@@','!!'),'**@@!!');
assert.equal(appendLine('**','dd',''),'**dd');

//test for starLineGenerator function
assert.equal(starLineGenerator(3),'***');
assert.equal(starLineGenerator(0),'');
assert.equal(starLineGenerator(-1),'');

//test for hollowLineGenerator function
assert.equal(hollowLineGenerator(3),'* *');
assert.equal(hollowLineGenerator(0),'');
assert.equal(hollowLineGenerator(-1),'');

//test for dashLineGenerator function
assert.equal(dashLineGenerator(3),'---');
assert.equal(dashLineGenerator(0),'');
assert.equal(dashLineGenerator(-1),'');

//tests for addDelimiter function
assert.equal(addDelimiter('ankon',''),'ankon');
assert.equal(addDelimiter('ankon','\n'),'\nankon');

//tests for modifyDelimiter function
assert.equal(modifyDelimiter('adca'),'\n');
assert.equal(modifyDelimiter(''),'\n');
assert.equal(modifyDelimiter('\n'),'\n');
assert.equal(modifyDelimiter(1),'\n');
assert.equal(modifyDelimiter(),'\n');

//tests for justify function
assert.equal(justify('ankon',5),'ankon');
assert.equal(justify('ankon',10),'     ankon');
assert.equal(justify('ankon',0),'ankon');

//tests for categorizeRectangle function
let rectangle = {'type':'filled','height':'7','width':'20'};
assert.deepEqual(categorizeRectangle(['filled','7','20'],0),rectangle);
rectangle = {'type':'empty','height':'7','width':'20'};
assert.deepEqual(categorizeRectangle(['filled','7','20','empty','7','20'],3),rectangle);

//tests for categorizeTriangle function
let triangle = {'type':'left','height':'7'};
assert.deepEqual(categorizeTriangle(['left','7','20'],0),triangle);
triangle = {'type':'right','height':'7'};
assert.deepEqual(categorizeTriangle(['filled','7','20','right','7','20'],3),triangle);

//tests for categorizeDiamond function
let diamond = {'type':'filled','height':'7'};
assert.deepEqual(categorizeDiamond(['filled','7','20'],0),diamond);
diamond = {'type':'hollow','height':'7'};
assert.deepEqual(categorizeDiamond(['filled','7','20','hollow','7','20'],3),diamond);

//tests for categorizeArguments function
rectangle = {'type':'filled','height':'7','width':'20'};
assert.deepEqual(categorizeArguments(['rectangle','filled','7','20']),rectangle);
let userArgs = ['rectangle','filled','7','20','triangle','left','5','diamond','filled','5'];
let output = {'type':'filled',
             'height':'7',
             'width':'20'};
assert.deepEqual(categorizeArguments(userArgs),output);
