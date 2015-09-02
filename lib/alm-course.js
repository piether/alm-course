/*
 * alm-course
 * https://github.com/piether/alm-course
 *
 * Copyright (c) 2014 Pieter Herroelen
 * Licensed under the MIT license.
 */

'use strict';

exports.sum = function(a,b) {

if(!a){
   return b;
}
else if(!b){
   return a;
}
else{
   return a+b;
}
};
