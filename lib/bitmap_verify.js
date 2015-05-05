'use strict';

//Given a buffer representing the beginning 12 bytes of a file,
//verifies that it is an undamaged bmp file.

module.exports = function(buffer) {
  if (buffer[0] !== 0x42 || buffer[1] !== 0x4d) //'BM' in ascii
    return false;

  if (buffer.readUInt32LE(2) !== buffer.length) //file size field
    return false;

  //Currently requires the 40-byte BITMAPINFOHEADER.
  if (buffer.readUInt32LE(14) !== 40)
    return false;

  return true;
};
