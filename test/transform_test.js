'use strict';

var fs = require('fs');
var expect = require('chai').expect;

var transform = require('../lib/transform.js');

describe('Read Into Buffer', function() {

  //Old test code, just keeping the syntax around before I write stuff.
  var greet;

  before(function() {
    greet = new Greet();
  });

  it('should print out a greeting', function() {
    expect(greet.greet('Arthur')).to.equal('hello Arthur');
  });

});
