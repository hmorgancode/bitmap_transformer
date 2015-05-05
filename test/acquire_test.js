'use strict';

//Tests the ability of the transformer to correctly acquire the width, height,
//and pixel offset of a bitmap file.

var fs = require('fs');
var expect = require('chai').expect;

var verify = require('../lib/bitmap_verify.js');
var acquireSettings = require('../lib/bitmap_acquire_settings.js');

describe('Acquire Bitmap File Settings', function() {
  var buffer;
  var settings;

  before(function() {
    buffer = fs.readFileSync('./test/bitmap1.bmp');
    settings = acquireSettings(buffer);
  });

  it('should acquire the width correctly', function() {
    expect(settings.width).to.equal(100);
  });

  it('should acquire the height correctly', function() {
    expect(settings.height).to.equal(100);
  });

  it('should acquire the pixel array offset correctly', function() {
    expect(settings.pixelArrayOffset).to.equal(1078);
  });

  it('should acquire the palette size correctly', function() {
    expect(settings.paletteSize).to.equal(256);
  });

  it('should acquire the palette offset correctly', function() {
    expect(settings.paletteOffset).to.equal(54);
  });

  it('should calculate and store the index of the palette\'s end', function() {
    expect(settings.paletteEnd).to.equal(settings.paletteOffset + settings.paletteSize);
  });
});
