/*
 * alm-course
 * https://github.com/piether/alm-course
 *
 * Copyright (c) 2014 Pieter Herroelen
 * Licensed under the MIT license.
 */

'use strict';

exports.sum = function(a,b) {
   if (!a){
     return b;
   }
   if (!b){
     return a;
   }
   if (!a && !b){
     return 0;
   }
   return a+b;
};
