'use strict';

//Tests out the transformer's ability to verify that it has actually received a bitmap file.

var fs = require('fs');
var expect = require('chai').expect;

var verify = require('../lib/bitmap_verify.js');

describe('Verify Bitmap File', function() {
  var validBuffer;
  var invalidBuffer1, invalidBuffer2;

  before(function() {
    validBuffer = fs.readFileSync('./test/bitmap1.bmp');
    invalidBuffer1 = fs.readFileSync('./test/notabitmap.txt');
    invalidBuffer2 = fs.readFileSync('./test/corruptedbitmap.bmp');
  });

  it('should accept a valid bitmap', function() {
    expect(verify(validBuffer)).to.equal(true);
  });

  it('should not accept an invalid bitmap', function() {
    expect(verify(invalidBuffer1)).to.equal(false);
  });

  it('should not accept a corrupted bitmap', function() {
    expect(verify(invalidBuffer2)).to.equal(false);
  });

  //it('should not accept a bitmap specification we do not support');

  //This could be expanded, I.E. by validating that all entries in the pixel array
  //point to a valid palette index.
  //Could also expand to account for different bitmap info headers, etc...
}); //end describe
