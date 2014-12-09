var expect = require('expect');
var soth = require('../soth.js');

describe('add', function(){
  it('1 + 1 = 2', function(){
    var result = soth.add(1, 1);
    expect(result).toBe(2);
  });
});

