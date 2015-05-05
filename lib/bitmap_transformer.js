'use strict';

var fs = require('fs');

var verify = require('../lib/bitmap_verify.js');
var acquireSettings = require('../lib/bitmap_acquire_settings.js');

module.exports = function(filePath, transform, newFilePath) {
  var buffer = fs.readFileSync(filePath);

  if (!verify(buffer))
  {
    console.log('The file specified was invalid or corrupted.');
    return;
  }

  var settings = acquireSettings(buffer);

  transform(buffer, settings);

  //Save new file at newFilePath
  var newBitmap = fs.openSync(newFilePath, 'w');
  fs.writeSync(newBitmap, buffer, 0, buffer.length);
  fs.closeSync(newBitmap);
};
