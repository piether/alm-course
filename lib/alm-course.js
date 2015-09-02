/*
 * alm-course
 * https://github.com/piether/alm-course
 *
 * Copyright (c) 2014 Pieter Herroelen
 * Licensed under the MIT license.
 */

'use strict';

exports.sum = function(a,b) {
   if(isNaN(b)){
      return a;
   }
   if(isNaN(a)){
      return b;
   }
   return a+b;
};
