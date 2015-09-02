/*
 * alm-course
 * https://github.com/piether/alm-course
 *
 * Copyright (c) 2014 Pieter Herroelen
 * Licensed under the MIT license.
 */

'use strict';

exports.sum = function(a,b) {
   if (b === undefined) {
      return a;
   } else {
      return a + b;
   }
};
