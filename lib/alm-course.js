/*
 * alm-course
 * https://github.com/piether/alm-course
 *
 * Copyright (c) 2014 Pieter Herroelen
 * Licensed under the MIT license.
 */

'use strict';

exports.sum = function(a,b) {
	if (undefined === b) {
		b = 0;
	}
   return a+b;
};
