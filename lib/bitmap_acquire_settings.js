'use strict';

//Returns an object containing the offset of the pixel array, size of the palette,
//width, and height.

module.exports = function(buffer) {
  var settings = {};

  settings.width = buffer.readInt32LE(18);
  settings.height = buffer.readInt32LE(22);
  settings.pixelArrayOffset = buffer.readUInt32LE(10);
  settings.paletteSize = buffer.readUInt32LE(46);
  settings.paletteOffset = buffer.readUInt32LE(14) + 14;
  settings.paletteEnd = settings.paletteSize + settings.paletteOffset;

  return settings;
};
