

// import {add} from "../src/add.js";
// import assert from "assert";

// describe('Array', function () {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });

/**
 *  mocha
 */
// var add = require('../dist/add.js');
// var assert = require('assert');
// describe('add', function () {
//     it('add(3, 4) should be 7', function () {
//         assert.equal(add.add(3, 4), 7);
//     });
//   });


/**
 *  ava require
 */
// var add = require('../dist/add.js');
// var assert = require('ava');
// assert('foo', t => {
//     if(add.add(3, 4) === 7)
//         t.pass();
// })

/**
 *  ava import
 */
// import {add} from '../src/add.js';
// import test from 'ava';
// test('foo', t => {
//     if(add(3, 4) === 7)
//         t.pass();
// })


/**
 *  mocha import
 */

import {add} from '../src/add.js';
var assert = require('assert');
it('add(3, 4) should be 7', function () {
    assert.equal(add(3, 4), 7);
});
