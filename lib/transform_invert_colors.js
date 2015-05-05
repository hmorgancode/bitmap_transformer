'use strict';

//Given the buffer of a bitmap file, inverts the entire color palette.
//(This is intended to work with a bitmap with 8 bits per pixel, or 256 colors.)
module.exports = function(buffer, settings) {

  //For every color in the palette, invert (subtract from max value of 255 (0xFF))
  for (var i = settings.paletteOffset; i < settings.paletteEnd; i += 4)
  {
    buffer[i] = 0xFF - buffer[i]; //B
    buffer[i + 1] = 0xFF - buffer[i + 1]; //G
    buffer[i + 2] = 0xFF - buffer[i + 2]; //R
    buffer[i + 3] = 0x00; //Unused A
  }
};

//For future reference, to edit individual pixels:
//for (var i = settings.pixelArrayOffset; i < buffer.length; i++)
