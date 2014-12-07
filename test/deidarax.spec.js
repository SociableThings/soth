var expect = require('expect.js');
var deidarax = require('../deidarax.js');

describe('add', function(){
  it('1 + 1 = 2', function(){
    var result = deidarax.add(1, 1);
    expect(result).to.be(2);
  });
});

