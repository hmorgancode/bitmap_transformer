'use strict';

//Given the buffer of a bitmap file, makes the image redder.
//(This is intended to work with a bitmap with 8 bits per pixel, or 256 colors.)
module.exports = function(buffer, settings) {
  var newRedValue;

  //For every color in the palette, invert (subtract from max value of 255 (0xFF))
  for (var i = settings.paletteOffset; i < settings.paletteEnd; i += 4)
  {
    newRedValue = buffer[i + 2];
    newRedValue *= 3;
    if (newRedValue > 0xFF)
      newRedValue = 0xFF;
    buffer[i + 2] = newRedValue;
  }
};
