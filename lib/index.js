'use strict';

var transformBitmap = require('../lib/bitmap_transformer.js');
var invertColors = require('../lib/transform_invert_colors.js');
var redShift = require('../lib/transform_red_shift.js');

transformBitmap('./test/bitmap1.bmp', invertColors, './test/invertedBitmap.bmp');
transformBitmap('./test/bitmap1.bmp', redShift, './test/redShiftedBitmap.bmp');
