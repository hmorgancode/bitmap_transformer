'use strict';

var fs = require('fs');

//Open file using fs and read it into a buffer
var data = readFile('../test/bitmap1.bmp', function(err, data) {
  if (err) throw err;
});

//Convert buffer into a JavaScript object (or just work on the buffer directly)
//Run a transform on the JS object (or buffer)
  //(Take the transform as a callback)
//Turn the transformed object back into a buffer (unless you didn't change it)
//Write the buffer to a new file

